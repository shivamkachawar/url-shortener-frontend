function ExtendExpiryModal({
    show,
    onClose,
    onSave,
    newExpiry,
    setNewExpiry
  }) {
  
    if (!show) return null;
  
    return (
  
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xl overflow-y-auto">
  
        {/* Modal */}
        <div className="relative overflow-hidden bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[28px] sm:rounded-[36px] shadow-[0_20px_80px_rgba(0,0,0,0.25)] w-full max-w-2xl animate-fadeIn max-h-[95vh] overflow-y-auto">
  
          {/* Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 opacity-10 blur-3xl rounded-full"></div>
  
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/70 hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-all shadow-sm"
          >
  
            ✕
  
          </button>
  
          {/* Content */}
          <div className="relative z-10 p-5 sm:p-10">
  
            {/* Header */}
            <div className="text-center mb-7 sm:mb-10">
  
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
  
                ⏳ Expiry Management
  
              </div>
  
              {/* Title */}
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
  
                Extend Expiry
  
              </h2>
  
              {/* Subtitle */}
              <p className="text-gray-500 mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2">
  
                Select a new expiration date and time for your shortened URL.
  
              </p>
  
            </div>
  
            {/* Form Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 shadow-inner">
  
              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
  
                {/* DATE */}
                <div>
  
                  <div className="text-sm font-semibold text-gray-700 mb-3">
  
                    Expiry Date
  
                  </div>
  
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
  
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={newExpiry.split("T")[0] || ""}
                      onChange={(e) => {
  
                        const time =
                          newExpiry.split("T")[1] || "00:00";
  
                        setNewExpiry(`${e.target.value}T${time}`);
  
                      }}
                      className="w-full bg-transparent outline-none text-gray-700 font-medium text-sm sm:text-base"
                    />
  
                  </div>
  
                </div>
  
                {/* TIME */}
                <div>
  
                  <div className="text-sm font-semibold text-gray-700 mb-3">
  
                    Expiry Time
  
                  </div>
  
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
  
                    <input
                      type="time"
                      value={newExpiry.split("T")[1] || ""}
                      onChange={(e) => {
  
                        const date =
                          newExpiry.split("T")[0] ||
                          new Date().toISOString().split("T")[0];
  
                        setNewExpiry(`${date}T${e.target.value}`);
  
                      }}
                      className="w-full bg-transparent outline-none text-gray-700 font-medium text-sm sm:text-base"
                    />
  
                  </div>
  
                </div>
  
              </div>
  
              {/* Info Box */}
              <div className="mt-5 sm:mt-6 bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
  
                <div className="flex items-start gap-3">
  
                  <div className="text-lg sm:text-xl">
  
                    ℹ️
  
                  </div>
  
                  <div>
  
                    <div className="font-semibold text-indigo-700 mb-1 text-sm sm:text-base">
  
                      Expiry Update
  
                    </div>
  
                    <div className="text-xs sm:text-sm text-indigo-600 leading-relaxed">
  
                      Your short URL will remain active until the selected expiry date and time.
  
                    </div>
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-6 sm:mt-8">
  
              {/* Save */}
              <button
                onClick={onSave}
                className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 sm:py-4 rounded-2xl font-bold shadow-xl hover:scale-[1.01] hover:shadow-2xl transition-all duration-300"
              >
  
                💾 Save Expiry
  
              </button>
  
              {/* Cancel */}
              <button
                onClick={onClose}
                className="flex-1 bg-white border border-gray-200 text-gray-700 py-3 sm:py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300"
              >
  
                Cancel
  
              </button>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default ExtendExpiryModal;