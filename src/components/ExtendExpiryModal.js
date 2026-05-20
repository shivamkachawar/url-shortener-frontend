function ExtendExpiryModal({
  show,
  onClose,
  onSave,
  newExpiry,
  setNewExpiry
}) {

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Extend Expiry
        </h2>

        {/* Datetime Picker */}
        <div className="space-y-2">

          <label className="text-sm text-gray-500">
            Select new expiry date & time
          </label>

          <input
            type="datetime-local"
            min={new Date().toISOString().slice(0, 16)}
            value={newExpiry}
            onChange={(e) => setNewExpiry(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default ExtendExpiryModal;