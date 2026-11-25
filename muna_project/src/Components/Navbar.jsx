import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

function Navbar() {
    // const [scrolled, setScrolled] = useState(false); 

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolled(window.scrollY > 20); 
    //     };

    //     handleScroll();
    //     window.addEventListener("scroll", handleScroll);

    // return () => window.removeEventListener("scroll", handleScroll); 
    // }, []);  

    return (
        <section

        className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"

            // className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
            //     scrolled
            //         ? "bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            //         : "bg-black/90"
            // }`} 
        >
            <div className="mx-auto flex w-full max-w-[1600px] items-center justify-center px-6 py-4 text-white">
                <span className="mr-auto pl-4">
                    <Link to="/">
                        <img className="h-10 w-30 object-contain" src="./src/assets/Logo.png" alt="Logo" />
                    </Link>
                </span>

                <nav className="flex items-center justify-center gap-4 font-bold Hero-text">
                    <Link to="/allproducts" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]">Shop</Link>
                    <Link to="/categories" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]">Categories</Link>
                    <Link to="/new-arrivals" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]">New Arrivals</Link>
                    <Link to="/sale" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]">Sale</Link>
                    <Link to="/about" className="hover:text-[#2EC4B6] focus:text-[#2EC4B6]">About</Link>
                </nav>

                <span className="ml-auto flex items-center gap-5 pr-4 ">
                    <i className="fa-solid fa-magnifying-glass text-xl font-light hover:text-[#2EC4B6]"></i>
                    <i className="fa-solid fa-sun text-xl hover:text-[#2EC4B6]"></i>
                    <Link to="/form">
                        <i className="fa-regular fa-user text-xl hover:text-[#2EC4B6]"></i>
                    </Link>
                    <i className="fa-solid fa-cart-shopping text-xl hover:text-[#2EC4B6]"></i>
                </span>
            </div>
        </section>
    );
}

export default Navbar