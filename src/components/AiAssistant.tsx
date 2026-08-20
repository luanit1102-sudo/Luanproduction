import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Loader2, RefreshCw, Compass, BookOpen, Utensils, Layers } from 'lucide-react';

interface AiAssistantProps {
  initialPrompt?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ initialPrompt }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Xin chào! Tôi là **Trợ lý Văn hóa & Du lịch Điện Biên AI**. 

Tôi có thể giúp bạn:
- 🗺️ Tra cứu thông tin địa giới hành chính và các đợt sáp nhập (Nghị quyết 815/NQ-UBTVQH14, mở rộng TP. Điện Biên Phủ, sáp nhập xã/phường).
- 👥 Khám phá phong tục tập quán, lễ hội, trang phục của **19 dân tộc anh em** (Thái, H'Mông, Hà Nhì, Kinh, Dao, Khơ Mú...).
- 🍲 Tư vấn đặc sản, ẩm thực truyền thống & sản phẩm **OCOP** (Gạo Tám Mường Thanh, Pa Pỉnh Tộp, Thịt trâu gác bếp, Chè Shan Tuyết Tủa Chùa, Cà phê Mường Ảng...).
- 🚩 Lên lịch trình tham quan di tích lịch sử và danh thắng Tây Bắc.

Bạn muốn tìm hiểu thông tin gì về Điện Biên hôm nay?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState(initialPrompt || '');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    { text: 'Nghị quyết 815 đã mở rộng TP. Điện Biên Phủ như thế nào?', icon: Layers },
    { text: 'Kể cho tôi nghe về nét độc đáo của Lễ hội Hoa Ban và điệu Xòe Thái', icon: Sparkles },
    { text: 'Đặc sản Chè Shan Tuyết cổ thụ Tủa Chùa có gì đặc biệt?', icon: Utensils },
    { text: 'Chinh phục Cực Tây A Pa Chải cần chuẩn bị những gì?', icon: Compass },
    { text: 'Gợi ý lịch trình 3 ngày 2 đêm khám phá Điện Biên trọn vẹn', icon: BookOpen }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt && initialPrompt.trim() !== '') {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputValue;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: textToSend,
          districtContext: 'Tỉnh Điện Biên sau sáp nhập',
          topic: 'Cẩm nang du lịch và văn hóa địa giới'
        })
      });

      const data = await response.json();
      const aiReplyText = data.answer || 'Xin lỗi, tôi chưa thể tìm thấy câu trả lời phù hợp. Bạn vui lòng thử lại nhé!';

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error('AI query error:', error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: 'Đã có lỗi xảy ra khi kết nối với máy chủ AI. Vui lòng kiểm tra lại đường truyền hoặc thử câu hỏi khác.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6" id="ai-assistant-section">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/60 via-stone-900 to-emerald-950/60 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Trí Tuệ Nhân Tạo Thông Minh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Trợ Lý Văn Hóa, Địa Giới & Du Lịch Điện Biên AI
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Hỏi bất kỳ câu hỏi nào về 10 đơn vị hành chính sau sáp nhập, lịch sử chiến trường Điện Biên Phủ, 19 dân tộc Tây Bắc hay cách thưởng thức trọn vẹn đặc sản Điện Biên.
          </p>
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="bg-stone-900/90 rounded-2xl border border-stone-800 shadow-2xl flex flex-col h-[620px] overflow-hidden">
        
        {/* Chat Messages List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${
                  isUser ? 'bg-emerald-600 text-white' : 'bg-gradient-to-br from-amber-500 to-emerald-600 text-stone-950 shadow-md'
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-lg ${
                  isUser
                    ? 'bg-emerald-600 text-white rounded-tr-none'
                    : 'bg-stone-950/80 border border-stone-800 text-stone-200 rounded-tl-none'
                }`}>
                  <div className="whitespace-pre-line prose prose-invert prose-sm max-w-none">
                    {msg.text}
                  </div>
                  <div className={`text-[10px] mt-2 text-right ${isUser ? 'text-emerald-200' : 'text-stone-500'}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-emerald-600 text-stone-950 flex items-center justify-center shadow-md">
                <Bot className="w-4 h-4 animate-pulse" />
              </div>
              <div className="bg-stone-950/80 border border-stone-800 rounded-2xl rounded-tl-none p-3 text-xs text-stone-400 flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                <span>Trợ lý AI đang tra cứu dữ liệu địa giới và văn hóa Điện Biên...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="px-4 py-2 bg-stone-950/60 border-t border-stone-800/80 flex items-center space-x-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] text-stone-500 shrink-0 font-medium">Gợi ý nhanh:</span>
          {sampleQuestions.map((q, idx) => {
            const Icon = q.icon;
            return (
              <button
                key={idx}
                onClick={() => handleSendMessage(q.text)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 text-xs whitespace-nowrap transition flex items-center space-x-1.5 shrink-0"
              >
                <Icon className="w-3 h-3 text-amber-400" />
                <span>{q.text}</span>
              </button>
            );
          })}
        </div>

        {/* Chat Input Bar */}
        <div className="p-4 bg-stone-950 border-t border-stone-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập câu hỏi về địa giới, 19 dân tộc, đặc sản hoặc lịch trình..."
              disabled={isLoading}
              className="flex-1 bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-800 text-white font-medium text-xs sm:text-sm transition flex items-center space-x-1.5 shadow-lg shrink-0"
            >
              <span>Gửi</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
