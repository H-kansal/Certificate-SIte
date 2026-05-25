import { useParams, Link } from "react-router-dom";
import data from "../data/collections.json";

function Verify() {
  const { certificateNumber } = useParams();

  const certificate = data.find(
    (item) => item.certificateNumber === certificateNumber
  );

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-xl w-full">
          <h1 className="text-4xl font-bold text-red-600">
            Invalid Certificate
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Certificate not found.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Go Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden">
        <div className="bg-green-500 text-white p-8">
          <h1 className="text-4xl font-bold">
            Certificate Successfully Verified
          </h1>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center">
            <img
              src={certificate.image}
              alt="student"
              className="w-64 h-64 rounded-3xl object-cover"
            />

            <h2 className="text-5xl font-bold mt-6 text-center">
              {certificate.name}
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            <div className="bg-gray-100 p-6 rounded-3xl">
              <p className="text-gray-500 text-lg">Certificate Number</p>
              <h3 className="text-3xl font-bold mt-2">
                {certificate.certificateNumber}
              </h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-3xl">
              <p className="text-gray-500 text-lg">Issue Date</p>
              <h3 className="text-3xl font-bold mt-2">
                {certificate.issueDate}
              </h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-3xl">
              <p className="text-gray-500 text-lg">Status</p>
              <h3 className="text-3xl font-bold text-green-600 mt-2">
                {certificate.status}
              </h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-3xl">
              <p className="text-gray-500 text-lg">Certificate Type</p>
              <h3 className="text-3xl font-bold mt-2">
                {certificate.certificateType}
              </h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-3xl">
              <p className="text-gray-500 text-lg">Internship Duration</p>
              <h3 className="text-3xl font-bold mt-2">
                {certificate.duration}
              </h3>
            </div>
          </div>

          <a
            href={certificate.certificateUrl}
            download
            className="block w-full bg-sky-600 hover:bg-sky-700 transition-all text-white text-center text-2xl font-bold py-5 rounded-2xl mt-10"
          >
            Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Verify;