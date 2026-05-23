import { QRCodeCanvas } from "qrcode.react";

function QRViewer({
  qrValue,
  originalUrl,
  setQrValue
}) {

  if (!qrValue) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xl overflow-y-auto">

      {/* Modal */}
      <div className="relative overflow-hidden bg-white/85 backdrop-blur-2xl border border-white/60 rounded-[36px] shadow-[0_20px_80px_rgba(0,0,0,0.25)] w-full max-w-2xl animate-fadeIn">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>

        {/* Close */}
        <button
          onClick={() => setQrValue("")}
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-2xl bg-white/70 hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-all shadow-sm"
        >

          ✕

        </button>

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-10">

          {/* Top */}
          <div className="text-center mb-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">

              📱 Share QR Code

            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">

              QR Code Ready

            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">

              Scan instantly or share this QR code anywhere for quick access to your shortened URL.

            </p>

          </div>

          {/* QR Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-[32px] p-6 sm:p-8 shadow-inner mb-8">

            {/* QR */}
            <div className="flex justify-center mb-8">

              <div className="bg-white p-5 rounded-[28px] shadow-2xl border border-gray-100">

                <QRCodeCanvas
                  id="qrCanvas"
                  value={qrValue}
                  size={240}
                />

              </div>

            </div>

            {/* Short URL */}
            <div className="mb-6">

              <div className="text-xs uppercase tracking-wide text-gray-400 mb-3 text-center">

                Short URL

              </div>

              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-center">

                <a
                  href={qrValue}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 font-black text-lg sm:text-xl break-all hover:text-purple-600 transition"
                >

                  {qrValue}

                </a>

              </div>

            </div>

            {/* Original URL */}
            <div>

              <div className="text-xs uppercase tracking-wide text-gray-400 mb-3 text-center">

                Redirects To

              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm text-gray-600 break-all leading-relaxed text-center">

                {originalUrl}

              </div>

            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Download */}
            <button
              onClick={() => {

                const canvas = document.getElementById("qrCanvas");
                const url = canvas.toDataURL("image/png");

                const link = document.createElement("a");

                link.href = url;
                link.download = "sniply-qr.png";

                link.click();

              }}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white py-4 rounded-2xl font-bold shadow-xl hover:scale-[1.01] hover:shadow-2xl transition-all duration-300"
            >

              ⬇ Download QR

            </button>

            {/* Copy */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(qrValue);
                alert("Short URL copied");
              }}
              className="flex-1 bg-white border border-gray-200 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300"
            >

              📋 Copy URL

            </button>

            {/* Close */}
            <button
              onClick={() => setQrValue("")}
              className="flex-1 bg-red-50 text-red-600 py-4 rounded-2xl font-bold hover:bg-red-100 transition-all duration-300"
            >

              ✕ Close

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default QRViewer;