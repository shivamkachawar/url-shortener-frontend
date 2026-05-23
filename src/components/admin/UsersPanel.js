function UsersPanel({
    users,
    selectedUser,
    setSelectedUser,
    userSearch,
    setUserSearch,
    setUrlSearch
  }) {
  
    const filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(userSearch.toLowerCase())
    );
  
    return (
  
      <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6 flex flex-col h-full overflow-hidden">
  
        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
  
          <div>
  
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
  
              👥 User Management
  
            </div>
  
            <h2 className="text-2xl font-black text-gray-900">
              Platform Users
            </h2>
  
          </div>
  
          {/* Count */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-2xl shadow-lg">
  
            <div className="text-xs opacity-80">
              Total
            </div>
  
            <div className="text-xl font-black">
              {users.length}
            </div>
  
          </div>
  
        </div>
  
        {/* SEARCH */}
        <div className="mb-5">
  
          <input
            type="text"
            placeholder="Search users..."
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
          />
  
        </div>
  
        {/* USER LIST */}
        <div className="flex flex-col gap-3 overflow-y-auto pr-1 max-h-[600px]">
  
          {filteredUsers.length > 0 ? (
  
            filteredUsers.map((user) => {
  
              const isSelected = selectedUser?.id === user.id;
  
              return (
  
                <div
                  key={user.id}
                  onClick={() => {
                    setSelectedUser(user);
                    setUrlSearch("");
                  }}
                  className={`group cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
                    isSelected
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-xl scale-[1.02]"
                      : "bg-white/80 hover:bg-indigo-50 border-gray-100 hover:border-indigo-200"
                  }`}
                >
  
                  <div className="flex items-center justify-between gap-3">
  
                    {/* LEFT */}
                    <div className="flex items-center gap-4 min-w-0">
  
                      {/* Avatar */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-md ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      }`}>
  
                        {user.username.charAt(0).toUpperCase()}
  
                      </div>
  
                      {/* Text */}
                      <div className="min-w-0">
  
                        <div className={`font-bold truncate ${
                          isSelected
                            ? "text-white"
                            : "text-gray-900"
                        }`}>
  
                          {user.username}
  
                        </div>
  
                        
  
                      </div>
  
                    </div>
  
                    {/* ROLE */}
                    <div className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                      user.role === "ROLE_ADMIN"
                        ? isSelected
                          ? "bg-white/20 text-white"
                          : "bg-red-100 text-red-600"
                        : isSelected
                          ? "bg-white/20 text-white"
                          : "bg-indigo-100 text-indigo-600"
                    }`}>
  
                      {user.role.replace("ROLE_", "")}
  
                    </div>
  
                  </div>
  
                </div>
              );
            })
  
          ) : (
  
            <div className="text-center py-16 text-gray-400">
  
              <div className="text-5xl mb-4">
                👤
              </div>
  
              <div className="font-semibold">
                No users found
              </div>
  
            </div>
  
          )}
  
        </div>
  
      </div>
    );
  }
  
  export default UsersPanel;