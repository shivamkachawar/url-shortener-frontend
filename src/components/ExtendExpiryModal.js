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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

  {/* Date */}
  <div className="space-y-2">

    <label className="text-sm text-gray-500">
      Expiry Date
    </label>

    <input
      type="date"
      min={new Date().toISOString().split("T")[0]}
      value={newExpiry.split("T")[0] || ""}
      onChange={(e) => {

        const time =
          newExpiry.split("T")[1] || "00:00";

        setNewExpiry(`${e.target.value}T${time}`);
      }}
      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

  </div>

  {/* Time */}
  <div className="space-y-2">

    <label className="text-sm text-gray-500">
      Expiry Time
    </label>

    <input
      type="time"
      value={newExpiry.split("T")[1] || ""}
      onChange={(e) => {

        const date =
          newExpiry.split("T")[0] ||
          new Date().toISOString().split("T")[0];

        setNewExpiry(`${date}T${e.target.value}`);
      }}
      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

  </div>

</div>

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