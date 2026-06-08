:root {
    --bg-main: #0B0F19;
    --bg-sidebar: #111827;
    --bg-card: #1F2937;
    --text-primary: #F9FAFB;
    --text-secondary: #9CA3AF;
    --accent-emerald: #10B981;
    --accent-rose: #EF4444;
    --accent-blue: #3B82F6;
    --border-color: #374151;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    overflow-x: hidden;
}

.app-container {
    display: flex;
    min-height: 100vh;
}

/* Sidebar Framework styling */
.sidebar {
    width: 260px;
    background-color: var(--bg-sidebar);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
}

.logo-icon {
    color: var(--accent-emerald);
    font-size: 1.5rem;
}

.logo-section h2 {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1px;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
}

.nav-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    padding: 0.75rem 1rem;
    text-align: left;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.nav-btn:hover, .nav-btn.active {
    background-color: var(--bg-card);
    color: var(--text-primary);
}

.system-status {
    font-size: 0.8rem;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.status-dot.online {
    width: 8px;
    height: 8px;
    background-color: var(--accent-emerald);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--accent-emerald);
}

/* Application workspace view configuration */
.main-content {
    flex-grow: 1;
    padding: 2rem;
    max-width: calc(100vw - 260px);
}

.top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1.5rem;
}

.subtitle {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-top: 0.25rem;
}

.search-box {
    display: flex;
    gap: 0.5rem;
}

.search-box input {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 0.6rem 1.2rem;
    border-radius: 0.375rem;
    width: 280px;
    outline: none;
}

.search-box button {
    background-color: var(--accent-blue);
    border: none;
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 0.375rem;
    cursor: pointer;
    font-weight: 600;
}

/* Metric Display Layout Grid */
.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.metric-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    border-radius: 0.5rem;
}

.metric-card h3 {
    font-size: 0.85rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.metric-card .value {
    font-size: 1.85rem;
    font-weight: 700;
    margin: 0.5rem 0;
}

.trend.positive { color: var(--accent-emerald); font-size: 0.85rem; font-weight: 600; }
.signal-buy { color: var(--accent-emerald); }
.text-highlight { color: var(--accent-blue); }

.chart-container {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    border-radius: 0.5rem;
}

/* Dynamic display configurations handles view swapping */
.tab-content { display: none; }
.tab-content.active { display: block; }

/* Auth System Component styling blocks */
.auth-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
}

.auth-box {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 2.5rem;
    border-radius: 0.75rem;
    width: 100%;
    max-width: 420px;
}

.auth-tabs {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    margin: 1.5rem 0;
}

.auth-toggle-btn {
    flex: 1;
    background: none;
    border: none;
    color: var(--text-secondary);
    padding: 0.5rem;
    cursor: pointer;
    font-weight: 600;
}

.auth-toggle-btn.active {
    color: var(--accent-blue);
    border-bottom: 2px solid var(--accent-blue);
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin-bottom: 1.25rem;
}

.input-group label { font-size: 0.85rem; color: var(--text-secondary); }
.input-group input {
    background-color: var(--bg-main);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 0.6rem;
    border-radius: 0.375rem;
    outline: none;
}

.auth-submit-btn {
    width: 100%;
    background-color: var(--accent-blue);
    border: none;
    color: white;
    padding: 0.75rem;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 0.5rem;
}