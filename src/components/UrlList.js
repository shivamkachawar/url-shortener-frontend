import UrlCard from "./UrlCard";

function UrlList({ filteredUrls, handleDelete, handleExtend, setQrValue }) {
  return (
    <div className="bg-white p-6 rounded shadow-md">

      <h3 className="text-lg font-semibold mb-4">Your URLs</h3>

      {filteredUrls.length === 0 ? (
        <p className="text-gray-400 text-center">No URLs found 😕</p>
      ) : (
        filteredUrls.map((item) => (
          <UrlCard
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleExtend={handleExtend}
            setQrValue={setQrValue}
          />
        ))
      )}
    </div>
  );
}

export default UrlList;