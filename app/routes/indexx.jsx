import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <nav>
        <Link to="/posts" className="text-xl text-blue-600 underline">
          Blog Posts
        </Link>
        <Link to="/posts" className="text-xl text-blue-600 underline">
          Blog Posts
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
