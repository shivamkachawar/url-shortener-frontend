import UrlCard from "./UrlCard";

function UrlList({
  filteredUrls,
  handleDelete,
  handleExtend,
  setQrValue,
  setOriginalUrl
}) {

  return (

    <div className="relative overflow-hidden bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[24px] sm:rounded-[32px] shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-4 sm:p-8 mt-6 sm:mt-8">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-purple-300 opacity-10 blur-3xl rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 flex flex-col gap-5 sm:gap-6 mb-6 sm:mb-8">

        {/* Top Section */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold mb-3">

            📂 URL Management

          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">

            Your URLs

          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">

            Manage, monitor and analyze all your shortened links.

          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Total URLs */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-5 shadow-xl">

            <div className="text-xs sm:text-sm text-white/80 mb-2">

              Total URLs

            </div>

            <div className="text-3xl sm:text-4xl font-black leading-none">

              {filteredUrls.length}

            </div>

            <div className="mt-3 text-xs sm:text-sm text-white/70">

              Active shortened links

            </div>

          </div>

          {/* Total Clicks */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

            <div className="text-xs sm:text-sm text-gray-400 mb-2">

              Total Clicks

            </div>

            <div className="text-3xl sm:text-4xl font-black text-gray-800 leading-none">

              {filteredUrls.reduce(
                (sum, item) => sum + item.clickCount,
                0
              )}

            </div>

            <div className="mt-3 text-xs sm:text-sm text-gray-400">

              Across all URLs

            </div>

          </div>

        </div>

      </div>

      {/* EMPTY STATE */}
      {filteredUrls.length === 0 ? (

        <div className="relative z-10 flex flex-col items-center justify-center py-16 sm:py-24 text-center">

          {/* Icon */}
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl sm:text-5xl shadow-2xl mb-6 sm:mb-8">

            🔗

          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">

            No URLs Yet

          </h3>

          {/* Subtitle */}
          <p className="text-gray-500 max-w-md leading-relaxed text-sm sm:text-lg px-4">

            Create your first beautiful short link and start sharing instantly across the web.

          </p>

          {/* Hint */}
          <div className="mt-6 sm:mt-8 bg-indigo-50 text-indigo-700 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold">

            ✨ Your generated URLs will appear here

          </div>

        </div>

      ) : (

        /* URL LIST */
        <div className="relative z-10 flex flex-col gap-5 sm:gap-6">

          {filteredUrls.map((item) => (

            <UrlCard
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleExtend={handleExtend}
              setQrValue={setQrValue}
              setOriginalUrl={setOriginalUrl}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default UrlList;