import { Link, useLocation } from "react-router-dom";

export default function MainLayout({ children }: any) {
  const location = useLocation();

  const menu = [
    { path: "/dashboard", name: "Dashboard" },
    { path: "/stocks", name: "Stocks" },
    { path: "/prediction", name: "Prediction" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/reports", name: "Reports" },
  ];

  return (
    <div className="app-layout">

      <aside className="sidebar">

        <div className="logo">
          STOCK AI
        </div>

        {menu.map((item) => (
          <Link
            key={item.path}
            className={
              location.pathname === item.path
                ? "nav-link active"
                : "nav-link"
            }
            to={item.path}
          >
            {item.name}
          </Link>
        ))}

      </aside>

      <div className="content-area">

        <header className="topbar">

          <div>
            <h2>Stock Market Prediction System</h2>
          </div>

          <div>
            Admin User
          </div>

        </header>

        <main className="page-content">
          {children}
        </main>

      </div>

    </div>
  );
}

<header className="topbar">

<div>
<h2>
Stock Market AI Analytics
</h2>
</div>

<div className="user-box">

<span>
🔔
</span>

<span>
👤 Admin
</span>

</div>

</header>