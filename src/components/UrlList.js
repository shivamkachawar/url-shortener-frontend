import UrlCard from "./UrlCard";

function UrlList({ filteredUrls, handleDelete, handleExtend, setQrValue }) {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 mt-6">

      {/* 🔝 Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-gray-800">
          Your URLs
        </h3>

        <span className="text-sm text-gray-500">
          {filteredUrls.length} total
        </span>
      </div>

      {/* 📭 Empty State */}
      {filteredUrls.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">

          <div className="text-4xl mb-2">🔗</div>

          <p className="text-gray-500 font-medium">
            No URLs yet
          </p>

          <p className="text-sm text-gray-400">
            Start by creating your first short link
          </p>

        </div>
      ) : (

        /* 📋 List */
        <div className="flex flex-col gap-4">
          {filteredUrls.map((item) => (
            <UrlCard
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleExtend={handleExtend}
              setQrValue={setQrValue}
            />
          ))}
        </div>

      )}

    </div>
  );
}

export default UrlList;