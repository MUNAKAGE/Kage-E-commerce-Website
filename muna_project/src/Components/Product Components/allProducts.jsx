import { useState } from "react";

function AllProducts() {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (id) => {
        setFavorites((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return(
    <section>
        <div clasName="">
            <span className="flex flex-col text-white gap-3 pt-20">
                 <h1 className="font-bold text-4xl text-center text-white">All Products</h1>
                <p className="text-gray-400 text-center text-xl">Find the perfect Product for You</p>
            </span>

              <div className="grid grid-cols-4 justify-center ml-15 gap-y-10 mt-10 text-white Hero-text">

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Phantom 16 Laptop.png"></img>
                  <button
                        type="button"
                        onClick={() => toggleFavorite("phantom16")}
                        style={{ color: favorites.phantom16 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Phantom 16 to favorites"
                    >
                        <i className={favorites.phantom16 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Phantom 16</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.1</p>
                    </span>
                    <p className="text-center relative top-3">$1299.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Lumia X1 Phone.png"></img>
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

                   <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Earbuds Images/Echo Buds Earbuds.png"></img>
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

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Mouse Images/ProClick Mouse.png" alt="Gaming Mouse"></img>
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


                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Controller Images/Apex Controller.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Laptop.png"></img>
                    <p className="bg-green-400 w-14 relative bottom-67  ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("pulse14")}
                        style={{ color: favorites.pulse14 ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Pulse 14 to favorites"
                    >
                        <i className={favorites.pulse14 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Pulse 14</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.2</p>
                    </span>
                    <p className="text-center relative bottom-4">$499.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
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

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Earbuds Images/Earbuds.png"></img>
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

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Nova Pro Phone.png"></img>
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

                   <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Controller Images/Nova Pro Controller.png"></img>
                    <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("novaProController")}
                        style={{ color: favorites.novaProController ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage NovaPro to favorites"
                    >
                        <i className={favorites.novaProController ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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

                  <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Nova 15 Laptop.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("nova15")}
                        style={{ color: favorites.nova15 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Nova 15 to favorites"
                    >
                        <i className={favorites.nova15 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Nova 15</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className="text-center relative top-3">$699.99</p>
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

                 <span className="border-4 border-[#2EC4B6] w-70 rounded-lg">
                        <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Headset Images/Headset Image.png" alt="Headset"></img>
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

                     <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="./src/assets/Headphone Images/Clarity One Headphone.png" alt="Wireless Headphones"  />
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
                    <p className="font-bold  text-center relative bottom-6">Kage Clarity One</p>
                    <span className=" relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.8</p>
                    </span>
                    <p className=" text-center relative bottom-4">$99.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Zenra Ultra Phone.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Eclipse 17 Laptop.png"></img>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("eclipse17")}
                        style={{ color: favorites.eclipse17 ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Eclipse 17 to favorites"
                    >
                        <i className={favorites.eclipse17 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Eclipse 17</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.9</p>
                    </span>
                    <p className="text-center relative bottom-4">$1899.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
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

                
                     <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Keyboard Images/Keyboard.png"></img>
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

                  <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/SoundPod Speaker.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Halo 5g Phone.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Vortex 15 Laptop.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("vortex15")}
                        style={{ color: favorites.vortex15 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Vortex 15 to favorites"
                    >
                        <i className={favorites.vortex15 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Vortex 15</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p>
                    </span>
                    <p className="text-center relative top-3">$1099.99</p>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Headset Images/Vox Pro Headset.png"></img>
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

                
                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/DeepBass SubWoofer.png"></img>
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

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Mira X Phone.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Titan 17 Laptop.png"></img>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("titan17")}
                        style={{ color: favorites.titan17 ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Titan 17 to favorites"
                    >
                        <i className={favorites.titan17 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Titan 17</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.7</p>
                    </span>
                    <p className="text-center relative bottom-4">$1799.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Controller Images/PulseGrip Controller.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/Rhythm Go Speaker.png"></img>
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

                
                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Phone.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Edge 15 Laptop.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("edge15")}
                        style={{ color: favorites.edge15 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Edge 15 to favorites"
                    >
                        <i className={favorites.edge15 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Edge 15</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative top-3">$849.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                   <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Mouse Images/Mouse.png"></img>
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

                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/BeatBox Speaker.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Solis Pro Phone.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Apex 16 Laptop.png"></img>
                    <p className="bg-green-400 w-14 relative bottom-67  ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("apex16")}
                        style={{ color: favorites.apex16 ? "red" : "" }}
                        className="relative left-57 bottom-74 rounded p-1"
                        aria-label="Add Kage Apex 16 to favorites"
                    >
                        <i className={favorites.apex16 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative bottom-6 text-center">Kage Apex 16</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                         <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.9</p>
                    </span>
                    <p className="text-center relative bottom-4">$1499.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
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

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Mouse Images/TitanPad.png"></img>
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

                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="./src/assets/Headphone Images/ClearTone Headphone.png" alt="Wireless Headphones"  />
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
                    <p className="font-bold  text-center relative bottom-6">Kage ClearTone</p>
                    <span className=" relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className=" text-center relative bottom-4">$42.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                  <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Elera Max Phone.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Flux 14 Laptop.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("flux14")}
                        style={{ color: favorites.flux14 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Flux 14 to favorites"
                    >
                        <i className={favorites.flux14 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Flux 14</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className="text-center relative top-3">$749.99</p>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Controller Images/Controller.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Aero Max Phone.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Spectra 15 Laptop.png"></img>
                   <button
                        type="button"
                        onClick={() => toggleFavorite("spectra15")}
                        style={{ color: favorites.spectra15 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Spectra 15 to favorites"
                    >
                        <i className={favorites.spectra15 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Spectra 15</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p>
                    </span>
                    <p className="text-center relative top-3">$999.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 top-6 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
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

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Keyboard Images/Mechanical Keyboard.png"></img>
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

                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/AudioDock.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Phone Images/Astria Ultra Phone.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Zenith 16 Laptop.png"></img>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("zenith16")}
                        style={{ color: favorites.zenith16 ? "red" : "" }}
                        className="relative left-57 bottom-66 rounded p-1"
                        aria-label="Add Kage Zenith 16 to favorites"
                    >
                        <i className={favorites.zenith16 ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
                    </button>
                    <p className="font-bold relative text-center">Kage Zenith 16</p>
                    <span className="relative top-2 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i> 
                        <p className="text-gray-400 relative bottom-1 left-0.5">3.4</p>
                    </span>
                    <p className="text-center relative top-3">$1599.99</p>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Microphone Images/Phantom MicroPhone.png" alt="Gaming Mouse"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/Resonance 2 Speaker.png"></img>
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

                  

                 <span className=" border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/Boom 360 Speaker.png" alt="Speaker" />
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/PulseCam.png"></img>
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

                  <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Headphone Images/Hush 2 Headphones.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Mouse Images/RGB Core.png" alt="Gaming Mouse"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/BassCore Speaker.png"></img>
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

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Core 15 Laptop.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/Vision X.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Earbuds Images/Aura Pro Earbuds.png"></img>
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
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Controller Images/GameDock.png"></img>
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

                 <span className=" border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="./src/assets/Microphone Images/Voicepod Microphone.png" alt="Speaker" />
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

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Smart-Watch Images/Pulse Watch.png"></img>
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

                 <span className=" border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/DeepBass X Speaker.png" alt="Speaker" />
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


                  <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Speaker Images/Soundbar S1.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Laptop Images/CoreStation.png"></img>
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

                 <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="./src/assets/Headphone Images/Sonic Pro Headphones.png"></img>
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

                  <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="./src/assets/Headphone Images/Headphone.png" alt="Wireless Headphones"  />
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
                    <p className="font-bold  text-center relative bottom-6">Kage Studio X</p>
                    <span className=" relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className=" text-center relative bottom-4">$129.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                   <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg h-121">
                    <img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="./src/assets/Earbuds Images/AirLoop Earbuds.png" alt="Earbuds" />
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


              </div>

        </div>
    </section>
)
}

export default AllProducts