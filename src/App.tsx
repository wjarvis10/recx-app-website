import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

/** ---------- Buttons ---------- */
const AppStoreButton: React.FC = () => (
  <a
    href="#" // Replace with your App Store link
    className="inline-flex items-center justify-center rounded-2xl border border-edge bg-white px-5 py-3 text-sm font-semibold shadow-soft hover:shadow transition"
    aria-label="Download on the App Store"
  >
    <div className="text-left leading-tight">
      <div className="text-[10px] uppercase tracking-widest text-gray-500">
        Download on the
      </div>
      <div className="text-base">App Store</div>
    </div>
  </a>
);

const PlayStoreSoon: React.FC = () => (
  <span
    className="inline-flex items-center justify-center rounded-2xl border border-edge bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-500 shadow-soft select-none"
    aria-disabled
    title="Coming soon"
  >
    Google Play — Coming Soon
  </span>
);

/** ---------- Feature Card ---------- */
type FeatureProps = { title: string; children: React.ReactNode };
const Feature: React.FC<FeatureProps> = ({ title, children }) => (
  <div className="rounded-2xl border border-edge bg-white p-5 shadow-soft">
    <h3 className="mb-1 text-base font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{children}</p>
  </div>
);

/** ---------- Home (Landing) ---------- */
const Home: React.FC = () => {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-mist/70 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img
                src="/recx-logo.svg"
                alt="Recx"
                className="h-8 w-8 transform-gpu"
              />
              <h1 className="text-2xl text-primary font-crimson font-semibold">
                Recx
              </h1>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <AppStoreButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-10 pb-14 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10">
            {/* Text first on mobile */}
            <div className="order-1 md:order-1 px-4 md:px-8 lg:px-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Discover and share trusted recommendations with your friends.
              </h2>
              <p className="mt-4 text-gray-700">
                Discover the best places to eat, drink, and explore — straight
                from your friends. Recx makes finding your next favorite spot
                simple, personal, and reliable.
              </p>
              <p>Hello World</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <AppStoreButton />
                <PlayStoreSoon />
              </div>
            </div>

            {/* Visual */}
            <div className="order-2 md:order-2 md:px-8">
              <div className="mx-auto w-full max-w-sm">
                <img
                  src="/home_screen.png" // if your framed image is screen.png in /public
                  alt="Recx App"
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Feature title="Trusted by Friends">
              No algorithms or strangers — see places your friends actually
              love.
            </Feature>
            <Feature title="Share Effortlessly">
              Add photos, notes, and ratings to your recs in seconds.
            </Feature>
            <Feature title="Plan with Lists">
              Keep track of spots you’ve been and where you want to go next.
            </Feature>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-edge">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="/recx-logo.svg" alt="Recx" className="h-7 w-7" />
            <span className="text-sm text-gray-600">
              © {new Date().getFullYear()} Recx
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {/* Use Link so it stays in-app */}
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
            <a href="mailto:hello@recxapp.com" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

/** ---------- App Router ---------- */
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      {/* Optional: basic 404 */}
      <Route
        path="*"
        element={
          <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-16 text-center">
            <h1 className="text-3xl font-bold">Page not found</h1>
            <p className="mt-2 text-gray-600">
              The page you’re looking for doesn’t exist.
            </p>
            <Link
              to="/"
              className="mt-6 inline-block rounded-2xl border border-edge bg-white px-5 py-3 text-sm font-semibold shadow-soft hover:shadow transition"
            >
              Back to home
            </Link>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
