import { Camera } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 fixed w-full top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse transition-smooth hover:opacity-80"
          >
            <Camera 
              className="h-8 w-8 text-[var(--accent)]" 
              strokeWidth={1.5}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[var(--primary)]">
              PhotoStudio
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-[var(--primary)] hover:bg-[var(--accent)] focus:ring-4 focus:outline-none focus:ring-[var(--accent)]/30 font-medium rounded-lg text-sm px-6 py-2.5 text-center transition-smooth"
            >
              Réserver
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[var(--primary)] rounded-lg md:hidden hover:bg-[var(--hover)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)] transition-smooth"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#home"
                  className="block py-2 px-3 md:p-0 text-[var(--primary)] bg-[var(--accent)]/10 rounded-sm md:bg-transparent md:text-[var(--accent)] hover:text-[var(--accent)] transition-smooth"
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="block py-2 px-3 md:p-0 text-[var(--text-primary)] rounded-sm hover:bg-[var(--hover)] md:hover:bg-transparent md:hover:text-[var(--accent)] transition-smooth"
                >
                  Galerie
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 md:p-0 text-[var(--text-primary)] rounded-sm hover:bg-[var(--hover)] md:hover:bg-transparent md:hover:text-[var(--accent)] transition-smooth"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 md:p-0 text-[var(--text-primary)] rounded-sm hover:bg-[var(--hover)] md:hover:bg-transparent md:hover:text-[var(--accent)] transition-smooth"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 md:p-0 text-[var(--text-primary)] rounded-sm hover:bg-[var(--hover)] md:hover:bg-transparent md:hover:text-[var(--accent)] transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
