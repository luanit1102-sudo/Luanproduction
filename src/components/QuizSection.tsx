import React, { useState, useEffect, useRef } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Trophy, RotateCcw, Sparkles, Award } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Theo Nghị quyết 815/NQ-UBTVQH14, diện tích tự nhiên của TP. Điện Biên Phủ sau sáp nhập mở rộng lên khoảng bao nhiêu km²?',
    options: ['64,27 km²', '150,5 km²', '308,18 km²', '520,3 km²'],
    correctIndex: 2,
    explanation: 'Sau sáp nhập theo Nghị quyết 815, diện tích TP. Điện Biên Phủ tăng hơn 4,8 lần từ 64,27 km² lên 308,18 km², tiếp nhận 4 xã Nà Nhạn, Nà Tấu, Mường Phăng, Pá Khoang từ huyện Điện Biên và sáp nhập xã Tà Lèng vào Thanh Minh.',
    category: 'Địa giới hành chính'
  },
  {
    id: 2,
    question: 'Cực Tây A Pa Chải - nơi "một tiếng gà gáy cả ba nước cùng nghe" thuộc địa phận huyện nào của tỉnh Điện Biên?',
    options: ['Huyện Nậm Pồ', 'Huyện Mường Nhé', 'Huyện Mường Chà', 'Huyện Tủa Chùa'],
    correctIndex: 1,
    explanation: 'Cột mốc số 0 A Pa Chải nằm trên đỉnh núi Khoang La San thuộc xã Sín Thầu, huyện Mường Nhé, giáp ranh giữa ba nước Việt Nam - Lào - Trung Quốc.',
    category: 'Địa lý & Biên cương'
  },
  {
    id: 3,
    question: 'Nghệ thuật trình diễn dân gian nào của đồng bào người Thái tại Điện Biên và vùng Tây Bắc đã được UNESCO ghi danh là Di sản Văn hóa Phi vật thể đại diện của nhân loại?',
    options: ['Nghệ thuật Khèn Mông', 'Nghệ thuật Xòe Thái', 'Múa Chuông người Dao', 'Hát Then người Tày'],
    correctIndex: 1,
    explanation: 'Nghệ thuật Xòe Thái được UNESCO ghi danh vào tháng 12/2021, là biểu tượng cho sự gắn kết cộng đồng và tinh thần cởi mở, mến khách của người Thái.',
    category: 'Con người & Văn hóa'
  },
  {
    id: 4,
    question: 'Đặc sản "Chè Shan Tuyết cổ thụ" mọc tự nhiên trên núi đá cao hàng trăm năm tuổi là niềm tự hào của huyện nào?',
    options: ['Huyện Điện Biên Đông', 'Huyện Tủa Chùa', 'Huyện Mường Ảng', 'Thị xã Mường Lay'],
    correctIndex: 1,
    explanation: 'Huyện Tủa Chùa nổi tiếng với quần thể cây chè Shan Tuyết cổ thụ hàng trăm năm tuổi tại Sín Chải, Tả Sìn Thàng... cho ra búp chè phủ lớp tuyết trắng tinh khiết đậm đà.',
    category: 'Đặc sản & OCOP'
  },
  {
    id: 5,
    question: 'Huyện Mường Ảng của tỉnh Điện Biên được mệnh danh là "thủ phủ" của loại cây trồng kinh tế mũi nhọn nào?',
    options: ['Cây Cà phê Arabica (Cà phê chè)', 'Cây Cao su', 'Cây Thảo quả', 'Cây Quế'],
    correctIndex: 0,
    explanation: 'Mường Ảng có thổ nhưỡng và khí hậu thung lũng lý tưởng để trồng Cà phê Arabica (Catimor), sản phẩm đạt OCOP 4 sao và xuất khẩu sang nhiều nước châu Âu và Nhật Bản.',
    category: 'Đặc sản & OCOP'
  },
  {
    id: 6,
    question: 'Thị xã Mường Lay nổi tiếng với nét kiến trúc độc đáo nào của đồng bào dân tộc Thái Trắng ven lòng hồ sông Đà?',
    options: ['Nhà trình tường đất nện', 'Nhà sàn lợp ngói đá phiến đen', 'Nhà rông mái vút', 'Nhà ngầm vách đá'],
    correctIndex: 1,
    explanation: 'Thị xã Mường Lay được xem là "thủ phủ nhà sàn đá phiến", nơi hàng ngàn nếp nhà sàn truyền thống của người Thái Trắng được lợp bằng đá phiến đen khai thác từ lòng núi.',
    category: 'Con người & Văn hóa'
  },
  {
    id: 7,
    question: 'Di tích Sở chỉ huy Chiến dịch Điện Biên Phủ, nơi Đại tướng Võ Nguyên Giáp làm việc và chỉ đạo chiến dịch 1954, nằm tại xã nào?',
    options: ['Xã Thanh Xương', 'Xã Mường Phăng', 'Xã Noong Hẹt', 'Xã Sam Mứn'],
    correctIndex: 1,
    explanation: 'Sở chỉ huy Chiến dịch Điện Biên Phủ nằm ẩn mình trong khu rừng nguyên sinh cổ thụ tại xã Mường Phăng (hiện nay thuộc TP. Điện Biên Phủ sau sáp nhập).',
    category: 'Di tích Lịch sử'
  },
  {
    id: 8,
    question: 'Món ăn truyền thống "Pa Pỉnh Tộp" trứ danh của người Thái ở Điện Biên là món gì?',
    options: ['Thịt trâu gác bếp xé sợi', 'Cá chép/trắm suối ướp gia vị gập nướng', 'Nộm hoa ban măng đắng', 'Xôi nếp ngũ sắc'],
    correctIndex: 1,
    explanation: '"Pa Pỉnh Tộp" trong tiếng Thái có nghĩa là "cá nướng gập", cá được mổ lưng, ướp mắc khén, hạt dổi, gừng, tỏi rồi kẹp thanh tre nướng trên than hồng thơm lừng.',
    category: 'Đặc sản & Ẩm thực'
  }
];

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const curQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === curQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      triggerConfetti();
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  // Simple pure canvas confetti burst
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 600;
    canvas.height = 300;

    const particles: any[] = [];
    const colors = ['#10b981', '#f59e0b', '#38bdf8', '#ec4899', '#8b5cf6'];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.7) * 14,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        life: Math.random() * 50 + 50
      });
    }

    let animationFrame: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let aliveCount = 0;

      particles.forEach(p => {
        if (p.alpha > 0) {
          aliveCount++;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.25; // gravity
          p.alpha -= 0.015;

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
          ctx.restore();
        }
      });

      if (aliveCount > 0) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    render();
  };

  return (
    <div className="space-y-8" id="quiz-section">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/60 via-stone-900 to-emerald-950/60 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Thử Thách Kiến Thức Điện Biên</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Mini Game: Bạn Hiểu Điện Biên Sau Sáp Nhập Đến Mức Nào?
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">
            Trả lời 8 câu hỏi trắc nghiệm thú vị về địa giới hành chính, 19 dân tộc, di tích lịch sử và đặc sản ẩm thực để nhận danh hiệu <strong>Chuyên Gia Khám Phá Điện Biên</strong>.
          </p>
        </div>
      </div>

      {/* Quiz Play Area */}
      <div className="max-w-3xl mx-auto bg-stone-900/90 rounded-2xl border border-stone-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {!isQuizCompleted ? (
          <div className="space-y-6">
            
            {/* Progress & Category Bar */}
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Chủ đề: {curQ.category}
              </span>
              <span className="text-xs font-bold text-stone-400">
                Câu {currentIdx + 1} / {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Progress bar line */}
            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question text */}
            <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-snug">
              {curQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3">
              {curQ.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === curQ.correctIndex;
                
                let optionStyle = 'bg-stone-950/60 border-stone-800 text-stone-200 hover:border-stone-700';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-red-950/40 border-red-500 text-red-300';
                  } else {
                    optionStyle = 'bg-stone-950/30 border-stone-800/50 text-stone-500 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-amber-950/30 border-amber-500 text-amber-300 shadow-md';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 rounded-full bg-stone-800/80 text-stone-300 font-bold text-xs flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after submission */}
            {isAnswerSubmitted && (
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5 animate-in fade-in duration-200">
                <strong className="text-xs font-semibold text-emerald-400 block">Giải thích chi tiết:</strong>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {curQ.explanation}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end space-x-3">
              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedAnswer === null}
                  onClick={handleSubmitAnswer}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-800 disabled:text-stone-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg"
                >
                  Xác nhận câu trả lời
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg flex items-center space-x-2"
                >
                  <span>{currentIdx + 1 < QUIZ_QUESTIONS.length ? 'Câu tiếp theo →' : 'Xem kết quả tổng kết'}</span>
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Result Celebration Screen */
          <div className="text-center py-6 space-y-6 relative">
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-emerald-500 flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/20">
              <Trophy className="w-10 h-10 text-stone-950 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-display">
                Hoàn Thành Thử Thách Điện Biên!
              </h3>
              <p className="text-sm text-stone-300">
                Bạn đã trả lời đúng <strong className="text-emerald-400 text-lg font-bold">{score}</strong> / {QUIZ_QUESTIONS.length} câu hỏi.
              </p>
            </div>

            {/* Badge earned */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>
                {score >= 7
                  ? 'Danh hiệu: Nhà Thông Thái Đất Mường Trời Điện Biên 🏆'
                  : score >= 5
                  ? 'Danh hiệu: Lữ Khách Khám Phá Tây Bắc Tinh Tường 🎖️'
                  : 'Danh hiệu: Tân Binh Tìm Hiểu Điện Biên 🌱'}
              </span>
            </div>

            <div>
              <button
                onClick={handleRestartQuiz}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg inline-flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Chơi lại từ đầu</span>
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
