import UrlCard from "./UrlCard";

function UrlList({
  filteredUrls,
  handleDelete,
  handleExtend,
  setQrValue,
  setOriginalUrl
}) {

  return (

    <div className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[32px] shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-6 sm:p-8 mt-8">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-10 blur-3xl rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">

            📂 URL Management

          </div>

          <h2 className="text-3xl font-black text-gray-900 tracking-tight">

            Your URLs

          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">

            Manage, monitor and analyze all your shortened links.

          </p>

        </div>

        {/* Right Stats */}
        <div className="flex flex-wrap gap-4">

          {/* Total URLs */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl px-6 py-4 shadow-xl min-w-[140px]">

            <div className="text-sm text-white/80 mb-1">
              Total URLs
            </div>

            <div className="text-3xl font-black">

              {filteredUrls.length}

            </div>

          </div>

          {/* Total Clicks */}
          <div className="bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-sm min-w-[140px]">

            <div className="text-sm text-gray-400 mb-1">
              Total Clicks
            </div>

            <div className="text-3xl font-black text-gray-800">

              {filteredUrls.reduce(
                (sum, item) => sum + item.clickCount,
                0
              )}

            </div>

          </div>

        </div>

      </div>

      {/* EMPTY STATE */}
      {filteredUrls.length === 0 ? (

        <div className="relative z-10 flex flex-col items-center justify-center py-24 text-center">

          {/* Icon */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl shadow-2xl mb-8">

            🔗

          </div>

          {/* Title */}
          <h3 className="text-3xl font-black text-gray-900 mb-4">

            No URLs Yet

          </h3>

          {/* Subtitle */}
          <p className="text-gray-500 max-w-md leading-relaxed text-base sm:text-lg">

            Create your first beautiful short link and start sharing instantly across the web.

          </p>

          {/* Hint */}
          <div className="mt-8 bg-indigo-50 text-indigo-700 px-5 py-3 rounded-2xl text-sm font-semibold">

            ✨ Your generated URLs will appear here

          </div>

        </div>

      ) : (

        /* URL LIST */
        <div className="relative z-10 flex flex-col gap-6">

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