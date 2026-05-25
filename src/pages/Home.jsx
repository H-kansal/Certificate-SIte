import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (!certificateNumber) return;

    navigate(`/verify/${certificateNumber}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 flex flex-col items-center px-4 py-10">
      <div className="bg-white w-full max-w-4xl rounded-2xl p-6 shadow-xl">
        <h1 className="text-4xl font-bold text-blue-700">
          APMG AND ASSOCIATES
        </h1>

        <p className="text-gray-600 mt-2 text-lg">
          Certificate Verification Portal
        </p>
      </div>

      <div className="mt-20 text-center text-white">
        <h2 className="text-5xl font-bold leading-tight">
          Verify Internship <br /> Certificate
        </h2>
      </div>

      <div className="bg-white mt-14 p-8 rounded-3xl w-full max-w-3xl shadow-2xl">
        <input
          type="text"
          placeholder="Enter Certificate Number"
          value={certificateNumber}
          onChange={(e) => setCertificateNumber(e.target.value)}
          className="w-full border border-gray-300 rounded-2xl p-5 text-xl outline-none"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-sky-600 hover:bg-sky-700 transition-all text-white text-2xl font-semibold py-5 rounded-2xl mt-6"
        >
          Verify Certificate
        </button>
      </div>
    </div>
  );
}

export default Home;