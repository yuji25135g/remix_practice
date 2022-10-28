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
        <div className="border-b-2" style={{'border-bottom':'solid', 'margin-bottom':'10px'}}>
          <strong>Root</strong>
          <input style={{'margin-left':'10px'}}></input>
          <nav>
            <Link to="/posts" className="text-xl text-blue-600">
              Blog Posts
            </Link>
            <Link to="/admin" className="text-xl text-blue-600 underline" style={{'margin-left':'10px'}}>
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
