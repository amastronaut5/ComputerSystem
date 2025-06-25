import { useState } from "react";

const QUESTIONS = [
  {
    q: "Which part of a computer executes arithmetic and logical operations?",
    a: ["ALU", "RAM", "Control Unit", "Cache"],
    correct: 0,
    explanation: "The Arithmetic Logic Unit (ALU) performs arithmetic and logic operations."
  },
  {
    q: "What protocol is used to transfer web pages?",
    a: ["FTP", "TCP", "HTTP", "DNS"],
    correct: 2,
    explanation: "HTTP (HyperText Transfer Protocol) is used to transfer web pages."
  },
  {
    q: "Which data structure is LIFO?",
    a: ["Queue", "Stack", "Heap", "Tree"],
    correct: 1,
    explanation: "Stack is Last-In, First-Out."
  },
  // Add more quiz questions...
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showExp, setShowExp] = useState(false);

  const handleAnswer = (idx: number) => {
    if (idx === QUESTIONS[step].correct) setScore(s => s + 1);
    setShowExp(true);
  };
  const next = () => { setStep(s => s+1); setShowExp(false); };

  if (step >= QUESTIONS.length)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 flex-col">
        <h1 className="text-3xl font-bold mb-4">Quiz Complete!</h1>
        <p className="text-xl mb-6">Your Score: {score} / {QUESTIONS.length}</p>
        <a href="/playlists" className="underline text-blue-700">Review materials</a>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="bg-gray-800 p-8 rounded shadow-2xl w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Knowledge Quiz</h1>
        <p className="mb-8">{QUESTIONS[step].q}</p>
        <ul className="space-y-3">
          {QUESTIONS[step].a.map((ans, i) => (
            <li key={i}>
              <button
                disabled={showExp}
                onClick={() => handleAnswer(i)}
                className={`w-full text-left px-4 py-2 rounded transition
                  ${showExp && i === QUESTIONS[step].correct ? "bg-green-700" : "bg-gray-700 hover:bg-blue-700"}
                  ${showExp && i !== QUESTIONS[step].correct ? "opacity-50" : ""}
                `}
              >
                {ans}
              </button>
            </li>
          ))}
        </ul>
        {showExp && (
          <div className="mt-6">
            <p className="text-green-300 font-semibold">{QUESTIONS[step].explanation}</p>
            <button
              onClick={next}
              className="mt-4 px-5 py-2 rounded bg-blue-800 hover:bg-blue-900 font-semibold"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}