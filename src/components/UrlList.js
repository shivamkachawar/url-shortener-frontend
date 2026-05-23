import UrlCard from "./UrlCard";

function UrlList({
  filteredUrls,
  handleDelete,
  handleExtend,
  setQrValue,
  setOriginalUrl
}) {

  return (

    <div className="flex flex-col gap-6 sm:gap-8 mt-6">
  
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
  
  );
}

export default UrlList;