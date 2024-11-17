import React from "react";
import Navbar from "../components/navbar";

const AdminPanel: React.FC = () => {
  const handleLogout = () => {
    alert("Logout efetuado!");
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Menu lateral */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center text-purple-700 font-medium hover:underline"
          >
            <span className="material-icons mr-3">dashboard</span>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-purple-700 hover:underline"
          >
            <span className="material-icons mr-3">person</span>
            Users
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-purple-700 hover:underline"
          >
            <span className="material-icons mr-3">settings</span>
            Settings
          </a>
        </nav>
      </aside>

      {/* Área principal */}
      <main className="flex-1 p-8">
        {/* Navbar */}
        <Navbar onLogout={handleLogout} />

        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        {/* Primeiro Card - Riot ID */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Riot ID</h2>
            <p className="text-sm text-gray-400">
              Your Riot ID is used by players to find you through the social
              panel in our games.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Game Name</label>
                <div className="bg-gray-900 p-2 rounded-md">PhoenixPT</div>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Tagline</label>
                <div className="bg-gray-900 p-2 rounded-md">#4817</div>
              </div>
            </div>
            <button
              className="mt-6 w-full bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg"
              disabled
            >
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
