import { QRCodeCanvas } from "qrcode.react";

function QRViewer({
  qrValue,
  originalUrl,
  setQrValue
}) {
  if (!qrValue) return null;

  return (
    <div
      id="qr-section"
      className="mt-8 flex justify-center"
    >
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-6 w-full max-w-md text-center relative">

        {/* ❌ Close button */}
        <button
          onClick={() => setQrValue("")}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg transition"
        >
          ✖
        </button>

        {/* Title */}
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          QR Code
        </h3>

        {/* Short URL */}
        <p className="text-gray-500 text-sm mb-1">
          Short URL
        </p>

        <p className="text-indigo-600 font-medium break-all mb-4">
          {qrValue}
        </p>

        {/* Original URL */}
        <p className="text-gray-500 text-sm mb-1">
          Redirects To
        </p>

        <p className="text-gray-700 break-all mb-6">
          {originalUrl}
        </p>

        {/* QR Box */}
        <div className="flex justify-center p-4 bg-white rounded-2xl shadow-inner mb-6">
          <QRCodeCanvas
            id="qrCanvas"
            value={qrValue}
            size={220}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            onClick={() => {
              const canvas = document.getElementById("qrCanvas");
              const url = canvas.toDataURL("image/png");

              const link = document.createElement("a");
              link.href = url;
              link.download = "sniply-qr.png";
              link.click();
            }}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-md"
          >
            Download
          </button>

          <button
            onClick={() => setQrValue("")}
            className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}

export default QRViewer;