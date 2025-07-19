import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center animate-bounce-in">
        <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg animate-gradient-x bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Menumatic is Under Construction
        </h1>
        <p className="text-lg text-gray-700 mb-2 animate-pulse">
          In a creative and animative way 🚧✨
        </p>
        <p className="text-md text-gray-400 mb-6">
          Stay tuned for something awesome.
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛠️</span>
            <span className="font-semibold text-purple-600">
              Menumatic is cooking up a smarter menu experience!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💡</span>
            <span className="text-gray-600">
              AI-powered recommendations, beautiful design, and seamless
              ordering are on the way.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⏳</span>
            <span className="text-gray-500 italic">
              We appreciate your patience as we build something special for you.
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-in;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 1s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App
