import { QRCodeCanvas } from "qrcode.react";

function QRViewer({
  qrValue,
  originalUrl,
  setQrValue
}) {
  if (!qrValue) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-lg relative animate-fadeIn">

        {/* Close */}
        <button
          onClick={() => setQrValue("")}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          QR Code
        </h2>

        {/* Short URL */}
        <div className="mb-4">
          <p className="text-sm text-gray-400 text-center mb-1">
            Short URL
          </p>

          <p className="text-indigo-600 text-center font-semibold break-all text-lg">
            {qrValue}
          </p>
        </div>

        {/* Original URL */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 text-center mb-1">
            Redirects To
          </p>

          <p className="text-gray-700 text-center break-all text-sm">
            {originalUrl}
          </p>
        </div>

        {/* QR */}
        <div className="bg-gray-50 rounded-2xl p-5 flex justify-center mb-6">
          <QRCodeCanvas
            id="qrCanvas"
            value={qrValue}
            size={220}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <button
            onClick={() => {
              const canvas = document.getElementById("qrCanvas");
              const url = canvas.toDataURL("image/png");

              const link = document.createElement("a");
              link.href = url;
              link.download = "sniply-qr.png";
              link.click();
            }}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Download
          </button>

          <button
            onClick={() => setQrValue("")}
            className="flex-1 border border-gray-300 text-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}

export default QRViewer;