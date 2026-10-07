import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MyWebsite
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">WELCOME TO MY WEBSITE</p>

          <h1>
            Build something
            <span> amazing.</span>
          </h1>

          <p className="description">
            A simple and modern React website to showcase your product,
            business, or personal project.
          </p>

          <div className="buttons">
            <Link to="/about" className="btn primary">
              Learn More
            </Link>

            <a href="#features" className="btn secondary">
              Explore
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why choose us?</h2>

        <div className="feature-grid">
          <div className="card">
            <div className="icon">⚡</div>
            <h3>Fast</h3>
            <p>
              Built with React for a fast and smooth user experience.
            </p>
          </div>

          <div className="card">
            <div className="icon">🎨</div>
            <h3>Modern</h3>
            <p>
              Clean and responsive design that works on every device.
            </p>
          </div>

          <div className="card">
            <div className="icon">🚀</div>
            <h3>Simple</h3>
            <p>
              Easy to customize and ready to deploy whenever you are.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="about-page">
      <section className="about">
        <p className="tagline">ABOUT US</p>

        <h1>We keep things simple.</h1>

        <p className="description">
          This is the second page of our React website. You can use this page
          to tell visitors about yourself, your company, or your project.
        </p>

        <Link to="/" className="btn primary">
          Back Home
        </Link>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <p>© 2026 MyWebsite. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
