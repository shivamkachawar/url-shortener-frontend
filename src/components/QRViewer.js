import { QRCodeCanvas } from "qrcode.react";

function QRViewer({ qrValue, setQrValue }) {
  if (!qrValue) return null;

  return (
    <div
      id="qr-section"
      className="mt-8 flex justify-center"
    >
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-6 w-full max-w-md text-center relative">

        {/* ❌ Close button (top right) */}
        <button
          onClick={() => setQrValue("")}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg transition"
        >
          ✖
        </button>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          QR Code
        </h3>

        {/* URL */}
        <p className="text-sm text-gray-500 mb-3 break-all">
          {qrValue}
        </p>

        {/* QR Box */}
        <div className="flex justify-center p-4 bg-white rounded-xl shadow-inner mb-4">
          <QRCodeCanvas id="qrCanvas" value={qrValue} size={160} />
        </div>

        {/* Actions */}
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