import React, { useState, useRef, useEffect } from "react";

const Advisor = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! I'm your AI Financial Advisor. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const score = 88;

  const getScoreStyle = (score) => {
    if (score >= 91) {
      return {
        label: "Excellent",
        text: "text-[#9966FF]",
        border: "border-[#9966FF]",
        bar: "bg-[#9966FF]",
      };
    }
    if (score >= 71) {
      return {
        label: "Good",
        text: "text-[#4BC0C0]",
        border: "border-[#4BC0C0]",
        bar: "bg-[#4BC0C0]",
      };
    }
    if (score >= 51) {
      return {
        label: "Fair",
        text: "text-[#FFCE56]",
        border: "border-[#FFCE56]",
        bar: "bg-[#FFCE56]",
      };
    }
    return {
      label: "Poor",
      text: "text-[#FF6384]",
      border: "border-[#FF6384]",
      bar: "bg-[#FF6384]",
    };
  };

  const {
    label: scoreLabel,
    text: scoreTextColor,
    border: scoreBorderColor,
    bar: scoreBarColor,
  } = getScoreStyle(score);

  useEffect(() => {
    document.body.style.overflow = chatOpen ? "hidden" : "auto";
  }, [chatOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { type: "user", text: input }]);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { type: "ai", text: "Thanks! Here's some tailored advice for you." },
      ]);
    }, 800);
    setInput("");
  };

  return (
    <div className="w-full ">
      {/* Main Content */}

      <main className="flex-1 px-2 py-2 space-y-8 ">
        {/* AI Recommendations */}
        <section className="bg-white rounded-xl p-5">
          <h2 className="text-xl font-bold text-gray-800 mb-4 ">AI Advise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniCard
              title="💰 Save More"
              impactLevel="low"
              onAction={() =>
                setActiveCard({ title: "💰 Save More", impactLevel: "low" })
              }
            >
              Allocate 15% of your salary to a high-yield savings account.
            </MiniCard>

            <MiniCard
              title="📉 Cut Expenses"
              impactLevel="medium"
              onAction={() =>
                setActiveCard({
                  title: "📉 Cut Expenses",
                  impactLevel: "medium",
                })
              }
            >
              Reduce entertainment costs under RM500/month.
            </MiniCard>

            <MiniCard
              title="📈 Invest Smart"
              impactLevel="high"
              onAction={() =>
                setActiveCard({ title: "📈 Invest Smart", impactLevel: "high" })
              }
            >
              Consider ETFs with long-term growth.
            </MiniCard>

            <MiniCard
              title="🧾 Track Budget"
              impactLevel="medium"
              onAction={() =>
                setActiveCard({
                  title: "🧾 Track Budget",
                  impactLevel: "medium",
                })
              }
            >
              Use an app to monitor daily and monthly expenses.
            </MiniCard>
          </div>
        </section>

        {/* Health Score */}
        <section>
          <div className="bg-white p-5 rounded-xl shadow w-full">
            <h3 className="font-semibold mb-4 text-lg">
              💳 Financial Health Score
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full border-2 ${scoreBorderColor} ${scoreTextColor} text-2xl font-bold`}
                >
                  {score}
                </div>
                <div>
                  <p className={`text-lg font-semibold ${scoreTextColor}`}>
                    {scoreLabel}
                  </p>
                  <p className="text-sm text-gray-600">
                    Your financial health is on the right track
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold text-[#FF6384]">Poor</span> (0
                  - 50)
                </p>
                <p>
                  <span className="font-semibold text-[#FFCE56]">Fair</span> (51
                  - 70)
                </p>
                <p>
                  <span className="font-semibold text-[#4BC0C0]">Good</span> (71
                  - 90)
                </p>
                <p>
                  <span className="font-semibold text-[#9966FF]">
                    Excellent
                  </span>{" "}
                  (91 - 100)
                </p>
              </div>
            </div>
            <div className="mt-4 h-3 w-full rounded-full bg-gray-200">
              <div
                style={{ width: `${score}%` }}
                className={`h-full rounded-full ${scoreBarColor}`}
              />
            </div>
          </div>
        </section>

        {/* Strengths and Areas to Improve */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4 text-lg">Strengths</h3>
            <div className="space-y-4">
              <Point
                icon="💡"
                title="Savings Habit"
                text="You save consistently every month."
              />
              <Point
                icon="📉"
                title="Credit Usage"
                text="Your credit card usage is below 20%."
              />
              <Point
                icon="🏦"
                title="Retirement Fund"
                text="You contribute regularly to retirement plans."
              />
            </div>
          </div>

          {/* Areas to Improve */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4 text-lg">Areas to Improve</h3>
            <div className="space-y-4">
              <Point
                icon="🎮"
                title="High Entertainment Cost"
                text="Spending on fun exceeds 30% of your income."
              />
              <Point
                icon="🛑"
                title="No Emergency Fund"
                text="Build 3–6 months of emergency savings."
              />
              <Point
                icon="💊"
                title="Insurance Coverage"
                text="Get better medical and illness protection."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Chat Floating Button */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg hover:bg-purple-700"
        title={chatOpen ? "Close ChatWithAI" : "Open ChatWithAI"}
      >
        {chatOpen ? "❌" : "💬"}
      </button>

      {/* ChatWithAI Box */}
      {chatOpen && (
        <aside className="fixed bottom-0 right-0 md:right-6 md:bottom-20 w-full md:w-96 h-[420px] bg-white border shadow-2xl rounded-t-2xl md:rounded-xl z-40 flex flex-col">
          <div className="px-4 py-3 border-b flex justify-between items-center">
            <h2 className="font-semibold">ChatWithAI</h2>
            <button
              onClick={() => setChatOpen(false)}
              className="text-lg leading-none"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 px-4 py-2 space-y-2 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                  m.type === "ai"
                    ? "bg-purple-100 text-gray-800"
                    : "bg-green-100 text-gray-800 ml-auto"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="border-t px-3 py-2 flex items-center space-x-2">
            <input
              className="flex-1 border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-4 py-1 rounded-lg bg-purple-600 text-white text-sm hover:bg-purple-700"
            >
              Send
            </button>
          </div>
        </aside>
      )}
      {activeCard && (
        <ActionBox
          title={activeCard.title}
          impactLevel={activeCard.impactLevel}
          onClose={() => setActiveCard(null)}
        />
      )}
    </div>
  );
};

const impactStyles = {
  high: {
    color: "bg-red-100 text-red-700",
    label: "🔴 High Impact",
  },
  medium: {
    color: "bg-yellow-100 text-yellow-700",
    label: "🟡 Medium Impact",
  },
  low: {
    color: "bg-green-100 text-green-700",
    label: "🟢 Low Impact",
  },
};

const MiniCard = ({ title, children, impactLevel = "medium", onAction }) => {
  const { color, label } = impactStyles[impactLevel] || impactStyles.medium;

  return (
    <div className="bg-stone-50 p-4 rounded-xl shadow relative">
      <div
        className={`absolute top-3 right-3 text-xs font-medium px-2 py-0.5 rounded-full ${color}`}
      >
        {label}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-700 mb-4">{children}</p>
      <div className="flex justify-end">
        <button
          onClick={onAction}
          className="px-3 py-1 bg-purple-600 text-white text-xs rounded-2xl hover:bg-purple-700 transform hover:scale-105 transition duration-200"
        >
          Take Action
        </button>
      </div>
    </div>
  );
};

const ActionBox = ({ title, impactLevel, onClose }) => {
  const { color, label } = impactStyles[impactLevel] || impactStyles.medium;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* 白色内容框，点击不会关闭 */}
      <div
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 标题 */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        {/* Impact 标签 */}
        <p
          className={`text-xs font-medium mb-3 inline-block px-2 py-0.5 rounded-full ${color}`}
        >
          {label}
        </p>

        {/* 解释 */}
        <p className="text-sm text-gray-700 mb-4">
          This is a strategy with measurable impact. It helps improve your
          overall financial stability.
        </p>

        {/* AI 分析 */}
        <p className="text-sm font-semibold mb-1">AI Analysis</p>
        <p className="text-sm text-gray-700 mb-4">
          Based on your spending trends, this action is likely to raise your
          score by 5–8 points.
        </p>

        {/* 步骤 */}
        <p className="text-sm font-semibold mb-1">Steps to Implement</p>
        <ul className="list-decimal list-inside text-sm text-gray-700 space-y-1 mb-6">
          <li>Log in to your banking app</li>
          <li>Open a high-yield savings account</li>
          <li>Set up auto-transfer for 15% salary</li>
          <li>Monitor monthly performance</li>
        </ul>

        {/* 按钮 */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Dismiss
          </button>
          <button className="px-4 py-1 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 active:scale-95">
            Implement Now
          </button>
        </div>
      </div>
    </div>
  );
};

// 建议项组件
const Point = ({ icon, title, text }) => (
  <div className="flex items-start gap-3">
    <div className="text-2xl">{icon}</div>
    <div>
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  </div>
);

export default Advisor;
