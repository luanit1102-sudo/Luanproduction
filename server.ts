import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy Google GenAI Client
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// AI Cultural & Travel Assistant endpoint for Dien Bien
app.post('/api/ai-guide', async (req, res) => {
  try {
    const { query, districtContext, topic } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    const ai = getAi();
    if (!ai) {
      // Fallback local smart response if no API key is provided
      return res.json({
        answer: `Tỉnh Điện Biên - vùng đất lịch sử hào hùng Tây Bắc với 10 đơn vị hành chính (TP. Điện Biên Phủ, TX. Mường Lay, các huyện Điện Biên, Điện Biên Đông, Mường Ảng, Mường Chà, Mường Nhé, Nậm Pồ, Tủa Chùa, Tuần Giáo). Điện Biên là nơi sinh sống của 19 dân tộc anh em (Thái, H'Mông, Kinh, Dao, Hà Nhì, Khơ Mú...), nổi tiếng với các đặc sản như Gạo Tám Điện Biên, Thịt trâu gác bếp, Pa Pỉnh Tộp, Chẩm chéo, và di tích chiến trường Điện Biên Phủ lừng lẫy năm châu. Bạn có thể chọn từng địa danh trên bản đồ để khám phá chi tiết!`,
        source: 'local_fallback',
      });
    }

    const systemPrompt = `Bạn là Hướng Dẫn Viên và Nhà Nghiên Cứu Văn Hóa - Lịch Sử - Địa Lý chuyên sâu về tỉnh Điện Biên (Việt Nam).
Tỉnh Điện Biên có 10 đơn vị hành chính cấp huyện gồm:
1. Thành phố Điện Biên Phủ (trung tâm chính trị, văn hóa, lịch sử lẫy lừng - đã được mở rộng địa giới hành chính theo Nghị quyết số 815/NQ-UBTVQH14 và các giai đoạn sáp nhập: sáp nhập các xã Tà Lèng, Thanh Minh, Thanh Xương, Thanh Nưa, Noong Bua...).
2. Thị xã Mường Lay (thủ phủ người Thái trắng, ngã ba sông Đà - Nậm Na - Nậm Mức, nhà sàn truyền thống, lễ hội đua thuyền đuôi én).
3. Huyện Điện Biên (vựa lúa cánh đồng Mường Thanh, cửa khẩu quốc tế Tây Trang, khoáng nóng U Va, di tích thành Bản Phủ - Hoàng Công Chất).
4. Huyện Điện Biên Đông (văn hóa H'Mông, tháp Mường Luân di tích quốc gia, đặc sản bò thịt, mật ong rừng).
5. Huyện Mường Ảng (thủ phủ cà phê Arabica Điện Biên, đèo Tằng Quái biển mây, vườn bưởi da xanh).
6. Huyện Mường Chà (hang động Pa Thơm, di tích Pa Ham, nếp nương bánh dày người Mông).
7. Huyện Mường Nhé (Cực Tây Tổ quốc A Pa Chải - cột mốc 3 nước Việt - Lào - Trung 'một con gà gáy ba nước cùng nghe', khu bảo tồn thiên nhiên Mường Nhé, văn hóa người Hà Nhì với lễ hội Cúng rừng Khô Già Già).
8. Huyện Nậm Pồ (huyện biên giới giàu bản sắc người Mông, Dao, Thái; di tích lịch sử, cảnh quan nguyên sơ).
9. Huyện Tủa Chùa (cao nguyên đá cổ Tây Bắc, Chè Tuyết San cổ thụ Sín Chải hàng trăm năm tuổi, chợ phiên Tả Sìn Thàng, rượu Mông Pê).
10. Huyện Tuần Giáo (cửa ngõ tỉnh, đèo Pha Đin - tứ đại đỉnh đèo, hang Khó Chua Xua, táo mèo, thảo quả).

Nhiệm vụ của bạn: Trả lời câu hỏi của du khách hoặc người nghiên cứu một cách thân thiện, chính xác, giàu cảm xúc, có cấu trúc rõ ràng về:
- Sự thay đổi địa giới hành chính, sáp nhập xã/phường/huyện
- Đặc trưng con người, phong tục tập quán 19 dân tộc anh em (Thái, Mông, Kinh, Dao, Hà Nhì, Lào, Khơ Mú...)
- Đặc sản ẩm thực, sản phẩm OCOP và nguồn gốc
- Địa điểm tham quan, di tích lịch sử, lễ hội (Lễ hội Hoa Ban, Đua thuyền đuôi én, Xòe Thái, Cầu Mùa...)
- Lời khuyên du lịch, thời điểm đẹp (mùa hoa ban tháng 3, mùa lúa chín tháng 9-10, mùa hoa dã quỳ tháng 11-12).

Hãy trả lời bằng tiếng Việt, súc tích, sinh động, chuẩn xác và truyền cảm hứng!`;

    const userPrompt = `Ngữ cảnh khu vực: ${districtContext || 'Toàn tỉnh Điện Biên'}
Chủ đề quan tâm: ${topic || 'Tổng quan'}
Câu hỏi của người dùng: "${query}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    res.json({
      answer: response.text || 'Không có câu trả lời phù hợp.',
      source: 'gemini',
    });
  } catch (error: any) {
    console.error('Error generating AI guide content:', error);
    res.status(500).json({
      error: 'Không thể xử lý yêu cầu AI lúc này',
      details: error?.message || 'Unknown error',
    });
  }
});

// Start server with Vite middleware in dev or static files in prod
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Điện Biên Map & Culture Server is running on port ${PORT}`);
  });
}

start();
