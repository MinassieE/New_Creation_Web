export default function AdminSidebar() {
  return (
    <div className="w-60 bg-gray-900 text-white h-screen p-4 space-y-4">
      <h2 className="text-xl font-bold">Admin Panel</h2>

      <nav className="flex flex-col space-y-2">
        <a href="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
        <a href="/admin/managers" className="hover:bg-gray-700 p-2 rounded">Content Managers</a>
        <a href="/admin/devotionals" className="hover:bg-gray-700 p-2 rounded">Devotionals</a>
      </nav>
    </div>
  );
}