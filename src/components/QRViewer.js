import { QRCodeCanvas } from "qrcode.react";

function QRViewer({ qrValue, setQrValue }) {
  if (!qrValue) return null;

  return (
    <div className="mt-6 bg-gray-50 p-6 rounded border flex flex-col items-center">

      <p className="text-sm text-gray-600 mb-2">QR for:</p>

      <p className="text-blue-600 break-all mb-3">{qrValue}</p>

      <QRCodeCanvas id="qrCanvas" value={qrValue} size={150} />

      <div className="flex gap-3 mt-3">

        <button
          onClick={() => {
            const canvas = document.getElementById("qrCanvas");
            const url = canvas.toDataURL("image/png");

            const link = document.createElement("a");
            link.href = url;
            link.download = "qr-code.png";
            link.click();
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Download QR
        </button>

        <button
          onClick={() => setQrValue("")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default QRViewer;