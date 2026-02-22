import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white pt-24 px-6">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Code Palette
        </h1>
        <p className="text-gray-400 text-lg">
          Building the future of real-time collaborative coding.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="bg-[#121214] p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            Code Palette is designed to empower developers to collaborate
            in real-time. Our goal is to simplify team coding experiences
            with secure rooms, multi-language support, and lightning-fast sync.
          </p>
        </div>

        <div className="bg-[#121214] p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="text-gray-400 space-y-3 list-disc list-inside">
            <li>⚡ Real-time collaboration</li>
            <li>🔐 Secure private rooms</li>
            <li>🌍 Multi-language support</li>
            <li>🚀 Modern UI experience</li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition"
          >
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
