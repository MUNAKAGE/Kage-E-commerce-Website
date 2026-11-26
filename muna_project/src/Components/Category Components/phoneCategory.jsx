import { useState } from "react";
import { Link } from "react-router-dom";

function PhoneCategory() {

    const [favorites, setFavorites] = useState({});
    
        const toggleFavorite = (id) => {
            setFavorites((prev) => ({
                ...prev,
                [id]: !prev[id],
            }));
        };


    return(
        <section>
            <div>
                <span className="text-center text-white flex flex-col gap-3 pt-25">
                <h1 className="font-bold text-4xl text-center">Mobile Category</h1>
                <p className="text-gray-400 text-center text-xl">Find your perfect Mobile Device</p>
                </span>

                <span className="grid grid-cols-4 justify-center ml-15 gap-y-10 mt-20 text-white Hero-text">
                    
                    
                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <Link to="/zenraphone"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Zenra Ultra Phone.png"></img></Link>
                    <button
                            type="button"
                            onClick={() => toggleFavorite("zenraUltra")}
                            style={{ color: favorites.zenraUltra ? "red" : "" }}
                            className="relative left-57 bottom-66 rounded p-1"
                            aria-label="Add Kage Zenra Ultra to favorites"
                        >
                            <i className={favorites.zenraUltra ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                        </button>
                    <p className="font-bold relative text-center">Kage Zenra Ultra</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.8</p>
                    </span>
                    <p className="text-center relative top-3">$799.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>
                  
                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Halo 5g Phone.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("halo5g")}
                        style={{ color: favorites.halo5g ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Halo 5G to favorites"
                    >
                        <i className={favorites.halo5g ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Halo 5G</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.1</p>
                    </span>
                    <p className="text-center relative top-3">$449.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Mira X Phone.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("miraX")}
                        style={{ color: favorites.miraX ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Mira X to favorites"
                    >
                        <i className={favorites.miraX ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Mira X</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.1</p>
                    </span>
                    <p className="text-center relative top-3">$349.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                   <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Lumia X1 Phone.png"></img>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("lumiaX1")}
                        style={{ color: favorites.lumiaX1 ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Lumia X1 to favorites"
                    >
                        <i className={favorites.lumiaX1 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Lumia X1</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.8</p>
                    </span>
                    <p className="text-center relative bottom-4">$1099.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                  
                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Phone.png"></img>
                    <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center " >New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("aria5g")}
                        style={{ color: favorites.aria5g ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Aria 5G to favorites"
                    >
                        <i className={favorites.aria5g ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Aria 5G</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.3</p>
                    </span>
                    <p className="text-center relative bottom-4">$299.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Solis Pro Phone.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("solisPro")}
                        style={{ color: favorites.solisPro ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Solis Pro to favorites"
                    >
                        <i className={favorites.solisPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Solis Pro</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.3</p>
                    </span>
                    <p className="text-center relative top-3">$649.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                   <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Elera Max Phone.png"></img>
                   <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-20%</p>
                   <button
                        type="button"
                        onClick={() => toggleFavorite("eleraMax")}
                        style={{ color: favorites.eleraMax ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Elera Max to favorites"
                    >
                        <i className={favorites.eleraMax ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Elera Max</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p>
                    </span>
                    <p className="text-center relative bottom-4">$1199.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Aero Max Phone.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("aeroMax")}
                        style={{ color: favorites.aeroMax ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Aero Max to favorites"
                    >
                        <i className={favorites.aeroMax ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Aero Max</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.2</p>
                    </span>
                    <p className="text-center relative top-3">$699.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 
                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Astria Ultra Phone.png"></img>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("astriaUltra")}
                        style={{ color: favorites.astriaUltra ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Astria Ultra to favorites"
                    >
                        <i className={favorites.astriaUltra ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Astria Ultra</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.7</p>
                    </span>
                    <p className="text-center relative bottom-4">$1299.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Nova Pro Phone.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("novaPro")}
                        style={{ color: favorites.novaPro ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Nova Pro to favorites"
                    >
                    <i className={favorites.novaPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Nova Pro</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.0</p>
                    </span>
                    <p className="text-center relative top-3">$599.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

               
                </span>
            </div>
        </section>
    )
}

export default PhoneCategory