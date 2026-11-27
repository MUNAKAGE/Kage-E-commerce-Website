import { useState } from "react";

function SaleProducts() {

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

            <div className="flex flex-col text-white gap-3 pt-25">
                <h1 className="font-bold text-4xl text-center">Products on Sale</h1>
                <p className="text-gray-400 text-center text-xl">View all our products on Sale</p>
            </div>

           <span className="grid grid-cols-4 justify-center ml-18 gap-y-10 mt-20 text-white Hero-text">

               <span className= "product-card product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/Core 15 Laptop.png"></img>
                     <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-15%</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("core15")}
                        style={{ color: favorites.core15 ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Core 15 to favorites"
                    >
                        <i className={favorites.core15 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Core 15</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.5</p>
                    </span>
                    <p className="text-center relative bottom-4">$599.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                
                   <span className= "product-card product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
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

                <span className= "product-card product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Earbuds Images/Earbuds.png"></img>
                    <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-20%</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("driftBuds")}
                        style={{ color: favorites.driftBuds ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Drift Buds to favorites"
                    >
                        <i className={favorites.driftBuds ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Drift Buds</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative bottom-4">$59.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                     <span className= "product-card product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Fit-Band Images/ActiveBand.png"></img>
                   <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-10%</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("activeBand")}
                        style={{ color: favorites.activeBand ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage ActiveBand Pro to favorites"
                    >
                        <i className={favorites.activeBand ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="relative bottom-6 font-bold text-center">Kage ActiveBand Pro</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p> 
                    </span>
                    <p className="text-center relative bottom-4">$89.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>


                  <span className= "product-card product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                   <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Mouse Images/Mouse.png"></img>
                    <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-15%</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("swiftMouse")}
                        style={{ color: favorites.swiftMouse ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage SwiftMouse to favorites"
                    >
                        <i className={favorites.swiftMouse ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage SwiftMouse</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.6</p>
                    </span>
                    <p className="text-center relative bottom-4">$39.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                    </span>

                     <span className= "product-card product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Smart-Ring Images/Aura Ring.png"></img>
                    <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-25%</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("auraRing")}
                        style={{ color: favorites.auraRing ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Aura Ring to favorites"
                    >
                        <i className={favorites.auraRing ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="relative bottom-6 font-bold text-center">Kage Aura Ring</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.1</p> 
                    </span>
                    <p className="text-center relative bottom-4">$149.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>
                 
                  <span className= "product-card product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Keyboard Images/Keyboard.png"></img>
                    <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-20%</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("strikePad")}
                        style={{ color: favorites.strikePad ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage StrikePad to favorites"
                    >
                        <i className={favorites.strikePad ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage StrikePad</p>
                    <span className="relative bottom-4 flex flex-row  justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.7</p>
                    </span>
                    <p className="text-center relative bottom-4">$129.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

            </span>

            </div>
        </section>
    )
}

export default SaleProducts