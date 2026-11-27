import { useState } from "react";
import { Link } from "react-router-dom";

function AudioCategory() {
   
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
                <h1 className="font-bold text-4xl text-center">Audio Category</h1>
                <p className="text-gray-400 text-center text-xl">Find your perfect Sound</p>
                </span>

                <span className="grid grid-cols-4 justify-center ml-18 gap-y-10 mt-20 text-white Hero-text">

                    <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <Link to="/echobuds"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Earbuds Images/Echo Buds Earbuds.png"></img></Link>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("echoBuds")}
                        style={{ color: favorites.echoBuds ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Echo Buds to favorites"
                    >
                        <i className={favorites.echoBuds ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Echo Buds</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.9</p>
                    </span>
                    <p className="text-center relative top-3">$24.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
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
                    <p className="font-bold relative bottom-10.5 text-center">Kage Drift Buds</p>
                    <span className="relative bottom-8.5 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative bottom-8">$59.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-5 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

             
                 <span className=" product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/Boom 360 Speaker.png" alt="Speaker" />
                <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("boom360")}
                        style={{ color: favorites.boom360 ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Boom 360 to favorites"
                    > 
                        <i className={favorites.boom360 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold text-center relative bottom-6">Kage Boom 360</p>
                     <span className=" relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p>
                    </span>
                     <p className=" text-center relative bottom-4">$79.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                
                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Earbuds Images/AirLoop Earbuds.png" alt="Earbuds" />
                     <button
                        type="button"
                        onClick={() => toggleFavorite("airLoop")}
                        style={{ color: favorites.airLoop ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Airloop to favorites"
                    >
                        <i className={favorites.airLoop ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Airloop</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.2</p>
                    </span>
                    <p className="text-center relative top-3">$34.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                
                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Headphone Images/Headphone.png" alt="Wireless Headphones"  />
                    <p className="bg-green-400 w-14 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("studioX")}
                        style={{ color: favorites.studioX ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Studio X to favorites"
                    >
                        <i className={favorites.studioX ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold  text-center relative bottom-10.5">Kage Studio X</p>
                    <span className=" relative bottom-8.5 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className=" text-center relative bottom-8">$129.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-5 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>



                <span className=" product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/DeepBass X Speaker.png" alt="Speaker" />
                <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("deepBassX")}
                        style={{ color: favorites.deepBassX ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage DeepBass X to favorites"
                    >
                        <i className={favorites.deepBassX ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold text-center relative bottom-6">Deep Bass X</p>
                     <span className=" relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.8</p>
                    </span>
                     <p className=" text-center relative bottom-4">$179.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                
                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Headphone Images/Sonic Pro Headphones.png"></img>
                   <button
                        type="button"
                        onClick={() => toggleFavorite("sonicPro")}
                        style={{ color: favorites.sonicPro ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Sonic Pro to favorites"
                    >
                        <i className={favorites.sonicPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Sonic Pro</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p>
                    </span>
                    <p className="text-center relative top-3">$74.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/Soundbar S1.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("soundBar")}
                        style={{ color: favorites.soundBar ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage SoundBar S1 to favorites"
                    >
                        <i className={favorites.soundBar ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage SoundBar S1</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.2</p>
                    </span>
                    <p className="text-center relative top-3">$89.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className=" product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Microphone Images/Voicepod Microphone.png" alt="Speaker" />
                <p className="bg-green-400 w-14 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("voicepod")}
                        style={{ color: favorites.voicepod ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Voicepod to favorites"
                    >
                        <i className={favorites.voicepod ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold text-center relative bottom-6">Kage Voicepod</p>
                     <span className=" relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p>
                    </span>
                     <p className=" text-center relative bottom-4">$59.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

             <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Earbuds Images/Aura Pro Earbuds.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("auraPro")}
                        style={{ color: favorites.auraPro ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Aura Pro Buds to favorites"
                    >
                        <i className={favorites.auraPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Aura Pro Buds</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.5</p>
                    </span>
                    <p className="text-center relative top-3">$79.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/BassCore Speaker.png"></img>
                      <button
                        type="button"
                        onClick={() => toggleFavorite("bassCore")}
                        style={{ color: favorites.bassCore ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage BassCore to favorites"
                    >
                        <i className={favorites.bassCore ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage BassCore</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.3</p>
                    </span>
                    <p className="text-center relative top-3">$129.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Headphone Images/Hush 2 Headphones.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("hush2")}
                        style={{ color: favorites.hush2 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Hush 2 to favorites"
                    >
                        <i className={favorites.hush2 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Hush 2</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.9</p>
                    </span>
                    <p className="text-center relative top-3">$94.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/Resonance 2 Speaker.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("resonance2")}
                        style={{ color: favorites.resonance2 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Resonance 2 to favorites"
                    >
                        <i className={favorites.resonance2 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Resonance 2</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative top-3">$84.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>


                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/AudioDock.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("audioDock")}
                        style={{ color: favorites.audioDock ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage AudioDock to favorites"
                    >
                        <i className={favorites.audioDock ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage AudioDock</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.2</p>
                    </span>
                    <p className="text-center relative top-3">$64.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Headphone Images/ClearTone Headphone.png" alt="Wireless Headphones"  />
                    <p className="bg-green-400 w-14 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("clearTone")}
                        style={{ color: favorites.clearTone ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage ClearTone to favorites"
                    >
                        <i className={favorites.clearTone ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold  text-center relative bottom-10.5">Kage ClearTone</p>
                    <span className=" relative bottom-8.5 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className=" text-center relative bottom-8">$42.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-5 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                
                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/BeatBox Speaker.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("beatBox")}
                        style={{ color: favorites.beatBox ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage BeatBox to favorites"
                    >
                        <i className={favorites.beatBox ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage BeatBox</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p>
                    </span>
                    <p className="text-center relative top-3">$149.99</p> 
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/Rhythm Go Speaker.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("rhythmGo")}
                        style={{ color: favorites.rhythmGo ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Rhythm GO to favorites"
                    >
                        <i className={favorites.rhythmGo ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Rhythm GO</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.7</p>
                    </span>
                    <p className="text-center relative top-3">$44.99</p> 
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                
                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/DeepBass SubWoofer.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("deepbassSub")}
                        style={{ color: favorites.deepbassSub ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage DeepBass SubWoofer to favorites"
                    >
                        <i className={favorites.deepbassSub ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage DeepBass SubWoofer</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.1</p>
                    </span>
                    <p className="text-center relative top-3">$179.99</p> 
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/SoundPod Speaker.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("soundPod")}
                        style={{ color: favorites.soundPod ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage SoundPod to favorites"
                    >
                        <i className={favorites.soundPod ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage SoundPod</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative top-3">$49.99</p> 
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Headphone Images/Clarity One Headphone.png" alt="Wireless Headphones"  />
                   <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("clarityOne")}
                        style={{ color: favorites.clarityOne ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Clarity One to favorites"
                    >
                        <i className={favorites.clarityOne ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold  text-center relative bottom-10.5">Kage Clarity One</p>
                    <span className=" relative bottom-8.5 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-0.5 left-0.5">4.8</p>
                    </span>
                    <p className=" text-center relative bottom-8">$99.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-5 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                </span>
            </div>
        </section>
    )
}

export default AudioCategory