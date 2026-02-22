import React from "react";
import { useNavigate } from "react-router-dom";

const Feature: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-white overflow-hidden px-6 py-24">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built for modern developers who demand speed, security, and seamless collaboration.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="group bg-[#121214] border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition duration-500">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-xl font-semibold mb-3">Real-Time Collaboration</h2>
            <p className="text-gray-400">
              Experience instant code synchronization with ultra-low latency powered by WebSockets.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-[#121214] border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition duration-500">
            <div className="text-4xl mb-4">🔐</div>
            <h2 className="text-xl font-semibold mb-3">Secure Private Rooms</h2>
            <p className="text-gray-400">
              Create encrypted rooms with unique IDs to keep your collaboration safe and private.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-[#121214] border border-white/10 p-8 rounded-2xl hover:border-pink-500/50 transition duration-500">
            <div className="text-4xl mb-4">💻</div>
            <h2 className="text-xl font-semibold mb-3">Multi-Language Support</h2>
            <p className="text-gray-400">
              Code in JavaScript, Python, C++, and more — all inside one seamless editor.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            Start Coding Now
          </button>

          <div className="mt-6">
            <button
              onClick={() => navigate("/")}
              className="text-gray-400 hover:text-white transition text-sm"
            >
              ← Back to Home
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feature;
