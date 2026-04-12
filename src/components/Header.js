function Header({ username, handleLogout }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold">URL Shortener</h2>
        <p className="text-sm text-gray-500">
          Welcome, {username} 👋
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;