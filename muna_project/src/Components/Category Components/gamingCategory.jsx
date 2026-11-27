import { useState } from "react";
import { Link } from "react-router-dom";


function GamingCategory() {

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
                <h1 className="font-bold text-4xl text-center">Gaming Category</h1>
                <p className="text-gray-400 text-center text-xl">Find your perfect Gaming Accessory</p>
                </span>

                <span className="grid grid-cols-4 justify-center ml-18 gap-y-10 mt-20 text-white Hero-text">

                  <span className="product-card border-4 border-[#2EC4B6] w-70 rounded-lg">
                       <Link to="/beatx"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Headset Images/Headset Image.png" alt="Headset"></img></Link>
                         <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-30%</p>
                         <button
                            type="button"
                            onClick={() => toggleFavorite("beatX")}
                            style={{ color: favorites.beatX ? "red" : "" }}
                            className="relative left-57 bottom-74 rounded p-1"
                            aria-label="Add Kage Beat X to favorites"
                        >
                            <i className={favorites.beatX ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                        </button>
                        <p className="font-bold relative bottom-6 text-center">Kage Beat X</p>
                          <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative bottom-4">$119.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                    </span>

                     <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                   <Link to="/strikepad"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Keyboard Images/Keyboard.png"></img></Link>
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

                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <Link to="/voxpro"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Headset Images/Vox Pro Headset.png"></img></Link>
                     <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">New</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("voxPro")}
                        style={{ color: favorites.voxPro ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Vox Pro to favorites"
                    >
                        <i className={favorites.voxPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Vox Pro</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className="text-center relative bottom-4">$54.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                
                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Controller Images/PulseGrip Controller.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("pulseGrip")}
                        style={{ color: favorites.pulseGrip ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage PulseGrip to favorites"
                    >
                        <i className={favorites.pulseGrip ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage PulseGrip</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative top-3">$69.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                     <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
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

                    <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Mouse Images/TitanPad.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("titanPad")}
                        style={{ color: favorites.titanPad ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Titan Pad to favorites"
                    >
                        <i className={favorites.titanPad ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Titan Pad</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.1</p>
                    </span>
                    <p className="text-center relative top-3">$29.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>
                        
                     <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Controller Images/Controller.png"></img>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("edgeControl")}
                        style={{ color: favorites.edgeControl ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Edge Control to favorites"
                    >
                        <i className={favorites.edgeControl ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage EdgeControl</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">5.0</p>
                    </span>
                    <p className=" relative bottom-4 text-center ">$99.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Microphone Images/Phantom MicroPhone.png" alt="Gaming Mouse"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("phantomMic")}
                        style={{ color: favorites.phantomMic ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Phantom Mic to favorites"
                    >
                        <i className={favorites.phantomMic ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Phantom Mic</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.1</p>
                    </span>
                    <p className="text-center relative top-3">$89.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Keyboard Images/Mechanical Keyboard.png"></img>
                    <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("battleKeys")}
                        style={{ color: favorites.battleKeys ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage BattleKeys to favorites"
                    >
                        <i className={favorites.battleKeys ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage BattleKeys</p>
                    <span className="relative bottom-4 flex flex-row  justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.3</p>
                    </span>
                    <p className="text-center relative bottom-4">$129.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Mouse Images/ProClick Mouse.png" alt="Gaming Mouse"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("proClick")}
                        style={{ color: favorites.proClick ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage ProClick to favorites"
                    >
                        <i className={favorites.proClick ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage ProClick</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.9</p>
                    </span>
                    <p className="text-center relative top-3">$64.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/PulseCam.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("pulseCam")}
                        style={{ color: favorites.pulseCam ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage PulseCam to favorites"
                    >
                        <i className={favorites.pulseCam ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage PulseCam</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className="text-center relative top-3">$79.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                  <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Mouse Images/RGB Core.png" alt="Gaming Mouse"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("rgbCore")}
                        style={{ color: favorites.rgbCore ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage RGB Core to favorites"
                    >
                        <i className={favorites.rgbCore ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage RGB Core</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.5</p>
                    </span>
                    <p className="text-center relative top-3">$34.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/Vision X.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("visionX")}
                        style={{ color: favorites.visionX ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage VisionX to favorites"
                    >
                        <i className={favorites.visionX ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage VisionX</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.6</p>
                    </span>
                    <p className="text-center relative top-3">$249.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Controller Images/GameDock.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("gameDock")}
                        style={{ color: favorites.gameDock ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage GameDock to favorites"
                    >
                        <i className={favorites.gameDock ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage GameDock</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                       <p className="text-gray-400 relative bottom-1 left-0.5">3.4</p>
                    </span>
                    <p className="text-center relative top-3">$44.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Controller Images/Apex Controller.png"></img>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("apexPad")}
                        style={{ color: favorites.apexPad ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Apex Pad to favorites"
                    >
                        <i className={favorites.apexPad ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Apex Pad</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                       <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className="text-center relative top-3">$69.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/CoreStation.png"></img>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("coreStation")}
                        style={{ color: favorites.coreStation ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage CoreStation to favorites"
                    >
                        <i className={favorites.coreStation ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage CoreStation</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative bottom-4">$899.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                   <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Controller Images/Nova Pro Controller.png"></img>
                    <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">New</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("novaPro")}
                        style={{ color: favorites.novaPro ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Nova Pro to favorites"
                    >
                        <i className={favorites.novaPro ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage NovaPro</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.3</p>
                    </span>
                    <p className=" relative bottom-4 text-center ">$74.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>


                 
                </span>
            </div>
        </section>
    ) 
} 

export default GamingCategory;