import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <section className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-[1600px] items-center gap-4 px-4 py-3 text-white sm:px-6">
                <Link to="/" className="mr-auto shrink-0" onClick={closeMenu}>
                    <img className="h-10 w-30 object-contain" src="/assets/Logo.png" alt="Logo" />
                </Link>

                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-xl lg:hidden"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} aria-hidden="true"></i>
                </button>

                <nav
                    id="primary-navigation"
                    className={`${menuOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-4 border-b border-white/10 bg-black/95 px-5 py-5 font-bold Hero-text lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:border-0 lg:bg-transparent lg:p-0`}
                >
                    <Link to="/allproducts" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]" onClick={closeMenu}>Shop</Link>
                    <Link to="/categories" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]" onClick={closeMenu}>Categories</Link>
                    <Link to="/new-arrivals" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]" onClick={closeMenu}>New Arrivals</Link>
                    <Link to="/sale" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]" onClick={closeMenu}>Sale</Link>
                    <Link to="/about" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]" onClick={closeMenu}>About</Link>
                </nav>

                <span className="ml-auto flex shrink-0 items-center gap-4">
                    <span className="hidden items-center gap-4 sm:flex">
                        <i className="fa-solid fa-magnifying-glass text-xl font-light hover:text-[#2EC4B6]"></i>
                        <i className="fa-solid fa-sun text-xl hover:text-[#2EC4B6]"></i>
                    </span>
                    <Link to="/form" aria-label="Account" onClick={closeMenu}>
                        <i className="fa-regular fa-user text-xl hover:text-[#2EC4B6]"></i>
                    </Link>
                    <i className="fa-solid fa-cart-shopping text-xl hover:text-[#2EC4B6]"></i>
                </span>
            </div>
        </section>
    );
}

export default Navbar;
