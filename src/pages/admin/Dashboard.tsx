export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-800 text-white h-screen p-4 space-y-4">
      <h2 className="text-lg font-bold">NCIC Admin</h2>
      <nav className="flex flex-col space-y-2">
        <a href="/managers" className="hover:bg-gray-700 p-2 rounded">Content Managers</a>
        <a href="/devotionals" className="hover:bg-gray-700 p-2 rounded">Devotionals</a>
      </nav>
    </div>
  );
}