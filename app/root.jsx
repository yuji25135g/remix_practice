import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="border-b-2">
          <h2>Root</h2>
          <nav>
            <Link to="/posts" className="text-xl text-blue-600">
              Blog Posts
            </Link>
            <Link to="/posts/admin" className="text-xl text-blue-600 underline">
              Blog Admin
            </Link>
          </nav>
        </div>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
