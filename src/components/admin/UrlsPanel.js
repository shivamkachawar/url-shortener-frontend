function UrlsPanel({
    selectedUser,
    urls,
    urlSearch,
    setUrlSearch,
    fetchData
  }) {
  
    const filteredUrls = selectedUser
      ? urls
          .filter((url) => url.user?.id === selectedUser.id)
          .filter((url) =>
            url.originalUrl.toLowerCase().includes(urlSearch.toLowerCase()) ||
            url.shortCode.toLowerCase().includes(urlSearch.toLowerCase())
          )
      : [];
  
    return (
  
      <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6 flex flex-col h-full overflow-hidden">
  
        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
  
          <div>
  
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
  
              🔗 URL Management
  
            </div>
  
            <h2 className="text-2xl font-black text-gray-900">
  
              {selectedUser
                ? `${selectedUser.username}'s URLs`
                : "Select a user"}
  
            </h2>
  
          </div>
  
          {selectedUser && (
  
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-2xl shadow-lg">
  
              <div className="text-xs opacity-80">
                URLs
              </div>
  
              <div className="text-xl font-black">
                {filteredUrls.length}
              </div>
  
            </div>
  
          )}
  
        </div>
  
        {/* SEARCH */}
        {selectedUser && (
  
          <div className="mb-5">
  
            <input
              type="text"
              placeholder="Search URLs..."
              value={urlSearch}
              onChange={(e) => setUrlSearch(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
            />
  
          </div>
  
        )}
  
        {/* URL LIST */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-1 max-h-[600px]">
  
          {selectedUser ? (
  
            filteredUrls.length > 0 ? (
  
              filteredUrls.map((url) => {
  
                const shortUrl = `https://snip--ly.vercel.app/${url.shortCode}`;
  
                return (
  
                  <div
                    key={url.id}
                    className="bg-white/90 border border-gray-100 rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
                  >
  
                    {/* Original URL */}
                    <div className="mb-4">
  
                      <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                        Original URL
                      </div>
  
                      <div className="text-sm text-gray-700 break-all leading-relaxed">
                        {url.originalUrl}
                      </div>
  
                    </div>
  
                    {/* Short URL */}
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-4 text-white shadow-lg">
  
                      <div className="text-xs opacity-80 mb-2">
                        Short URL
                      </div>
  
                      <div className="font-bold break-all">
                        {shortUrl}
                      </div>
  
                      {/* Actions */}
                      <div className="flex flex-wrap gap-2 mt-4">
  
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(shortUrl);
                            alert("Short URL copied");
                          }}
                          className="px-3 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-sm font-medium transition"
                        >
                          Copy
                        </button>
  
                        <a
                          href={shortUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-sm font-medium transition"
                        >
                          Open
                        </a>
  
                      </div>
  
                    </div>
  
                    {/* METADATA */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
  
                      <div className="bg-gray-50 rounded-2xl p-3">
  
                        <div className="text-xs text-gray-400 mb-1">
                          Clicks
                        </div>
  
                        <div className="font-black text-indigo-600 text-lg">
                          {url.clickCount}
                        </div>
  
                      </div>
  
                      <div className="bg-gray-50 rounded-2xl p-3">
  
                        <div className="text-xs text-gray-400 mb-1">
                          Created
                        </div>
  
                        <div className="text-sm text-gray-700">
                          {new Date(url.createdAt).toLocaleDateString()}
                        </div>
  
                      </div>
  
                      <div className="bg-gray-50 rounded-2xl p-3">
  
                        <div className="text-xs text-gray-400 mb-1">
                          Expires
                        </div>
  
                        <div className="text-sm text-gray-700">
  
                          {url.expiryDate
                            ? new Date(url.expiryDate).toLocaleDateString()
                            : "Never"}
  
                        </div>
  
                      </div>
  
                    </div>
  
                    {/* FOOTER */}
                    <div className="flex items-center justify-between mt-5">
  
                      <div className="text-xs text-gray-400">
  
                        Last accessed:{" "}
  
                        {url.lastAccessedAt
                          ? new Date(url.lastAccessedAt).toLocaleString()
                          : "Never"}
  
                      </div>
  
                      <button
                        onClick={async () => {
  
                          const token = localStorage.getItem("token");
  
                          try {
  
                            await fetch(
                              `https://sniply-backend.onrender.com/admin/url/${url.id}`,
                              {
                                method: "DELETE",
                                headers: {
                                  Authorization: "Bearer " + token,
                                },
                              }
                            );
  
                            alert("Deleted successfully");
  
                            fetchData();
  
                          } catch (err) {
  
                            alert("Delete failed");
  
                          }
                        }}
                        className="px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition text-sm font-semibold"
                      >
                        Delete
                      </button>
  
                    </div>
  
                  </div>
                );
              })
  
            ) : (
  
              <div className="text-center py-16 text-gray-400">
  
                <div className="text-5xl mb-4">
                  🔗
                </div>
  
                <div className="font-semibold">
                  No URLs found
                </div>
  
              </div>
  
            )
  
          ) : (
  
            <div className="flex flex-col items-center justify-center text-center py-20 text-gray-400">
  
              <div className="text-6xl mb-5">
                👈
              </div>
  
              <div className="text-xl font-semibold">
                Select a user
              </div>
  
              <div className="mt-2 text-sm">
                Choose a user from the left panel to view URLs
              </div>
  
            </div>
  
          )}
  
        </div>
  
      </div>
    );
  }
  
  export default UrlsPanel;