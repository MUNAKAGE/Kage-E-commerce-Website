import { useState } from "react" 
import { Link } from "react-router-dom";

function WearablesCategory() {

const [favorites, setFavorites] = useState({});

 const toggleFavorite = (id) => {
                setFavorites((prev) => ({
                    ...prev,
                    [id]: !prev[id],
                }));
            };

    return (
        <section>
            <div>
             <span className="text-center text-white flex flex-col gap-3 pt-25">
                <h1 className="font-bold text-4xl text-center">Wearables Category</h1>
                <p className="text-gray-400 text-center text-xl">Find your perfect Wearable Accessory</p>
                </span>

                <span className="grid grid-cols-4 justify-center ml-18 gap-y-10 mt-20 text-white Hero-text">

                
                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                   <Link to ="/pulsewatch"> <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Watch Images/Pulse Watch.png"></img></Link>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("pulseWatch")}
                        style={{ color: favorites.pulseWatch ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Pulse Watch to favorites"
                    >
                        <i className={favorites.pulseWatch ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Pulse Watch</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.2</p>
                    </span>
                    <p className="text-center relative top-3">$129.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Fit-Band Images/FitBand.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("fitBand2")}
                        style={{ color: favorites.fitBand2 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage FitBand 2 to favorites"
                    >
                        <i className={favorites.fitBand2 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage FitBand 2</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className="text-center relative top-3">$59.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                  
                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Watch Images/Smart Watch.png"></img>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">Best Seller</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("apexWatch")}
                        style={{ color: favorites.apexWatch ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Apex Watch to favorites"
                    >
                        <i className={favorites.apexWatch ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="relative bottom-6 font-bold text-center">Kage Apex Watch</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.8</p> 
                    </span>
                    <p className="text-center relative bottom-4">$99.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Watch Images/Nova Watch Pro.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("novaWatchPro")}
                        style={{ color: favorites.novaWatchPro ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Nova Watch Pro to favorites"
                    >
                        <i className={favorites.novaWatchPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Nova Watch Pro</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative top-3">$249.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Fit-Band Images/ActiveBand.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Ring Images/Core RIng.png"></img>
                   <button
                        type="button"
                        onClick={() => toggleFavorite("coreRing")}
                        style={{ color: favorites.coreRing ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Core Ring to favorites"
                    >
                        <i className={favorites.coreRing ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button> 
                    <p className="font-bold relative text-center">Kage Core Ring</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.5</p>
                    </span>
                    <p className="text-center relative top-3">$99.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Watch Images/Nova Watch Pro.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("titanWatch")}
                        style={{ color: favorites.titanWatch ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Titan Watch Ultra to favorites"
                    >
                        <i className={favorites.titanWatch ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Titan Watch Ultra</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.3</p>
                    </span>
                    <p className="text-center relative top-3">$299.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Ring Images/Aura Ring.png"></img>
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
                 
                  <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Fit-Band Images/MotionBand.png"></img>
                    <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">New</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("motionBand")}
                        style={{ color: favorites.motionBand ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage MotionBand to favorites"
                    >
                        <i className={favorites.motionBand ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="relative bottom-6 font-bold text-center">Kage MotionBand</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p> 
                    </span>
                    <p className="text-center relative bottom-4">$69.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                   <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Glasses Images/Vision SmartGlasses.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("vision")}
                        style={{ color: favorites.vision ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Vision to favorites"
                    >
                        <i className={favorites.vision ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Vision</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.6</p>
                    </span>
                    <p className="text-center relative top-3">$199.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Ring Images/Pulse Ring Pro.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("pulseRingPro")}
                        style={{ color: favorites.pulseRingPro ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Pulse Ring Pro to favorites"
                    >
                        <i className={favorites.pulseRingPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Pulse Ring Pro</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p>
                    </span>
                    <p className="text-center relative top-3">$199.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Glasses Images/Vision Pro SmartGlasses.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("visionPro")}
                        style={{ color: favorites.visionPro ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Vision Pro to favorites"
                    >
                        <i className={favorites.visionPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Vision Pro</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className="text-center relative top-3">$299.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>
                
                   <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Glasses Images/View AR SmartGlasses.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("viewAR2")}
                        style={{ color: favorites.viewAR2 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage View AR to favorites"
                    >
                        <i className={favorites.viewAR2 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage View AR</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.2</p>
                    </span>
                    <p className="text-center relative top-3">$399.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Glasses Images/Link SmartGlasses.png"></img>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("linkGlasses")}
                        style={{ color: favorites.linkGlasses ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Link Glasses to favorites"
                    >
                        <i className={favorites.linkGlasses ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="relative bottom-6 font-bold text-center">Kage Link Glasses</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1 ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.9</p> 
                    </span>
                    <p className="text-center relative bottom-4">$349.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>


                </span>
            </div>
        </section>
    )
}

export default WearablesCategory