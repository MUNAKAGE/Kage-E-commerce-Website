import { useState } from "react"
import { Link } from "react-router-dom";

function Featured() {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (id) => {
        setFavorites((prev) => ({
            ...prev,
            [id]: !prev[id], 
        }));
    }; 

    return(
        <section className="pb-35">
                <span className="absolute top-215 left-15 bg-gray-400 h-px w-350" ></span>

            <div className="absolute top-225 left-17">

                <div>
                <span className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-white">Featured <span className="text-[#2EC4B6]">Products</span></h1>
                    <p className="text-gray-400 ">The Tech everyone wants now</p>
                </span>
                <span><Link to="/allproducts"><button className="text-[#2EC4B6] text-center border-2 border-[#2EC4B6] shadow-[0_0_10px_#2EC4B6] hover:shadow-[0_0_20px_#2EC4B6] hover:scale-101 px-5 py-4 rounded-lg ml-290 relative bottom-13.5 hover:text-[#1e9589] font-size1 group">View all Products <span className="group-hover:translate-x-2 ml-1 transition-transform-duration-300 inline-block">→</span></button></Link></span>
                </div>

                <div className="grid grid-cols-4 justify-center ml-15 gap-y-10 mt-5 text-white Hero-text">

              
                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <Link to="/eclipselaptop"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/Eclipse 17 Laptop.png"></img></Link>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                   <button
                        type="button"
                        onClick={() => toggleFavorite("eclipse")} 
                        style={{ color: favorites.eclipse ? "red" : "" }} 
                        className="relative left-57 bottom-75.5 rounded p-2"
                        aria-label="Add Kage Eclipse 17 to favorites" 
                    >
                        <i className={favorites.eclipse ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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
                    
                      <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <Link to="/apexwatch"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Smart-Watch Images/Smart Watch.png"></img></Link>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">Best Seller</p>
                   <button
                        type="button"
                        onClick={() => toggleFavorite("apex")}
                        style={{ color: favorites.apex ? "red" : "" }}
                        className="relative left-57 bottom-75.5 rounded p-2"
                        aria-label="Add Kage Apex Watch to favorites"
                    >
                        <i className={favorites.apex ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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
                <Link to="/clarityone"><img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Headphone Images/Clarity One Headphone.png" alt="Wireless Headphones"  /></Link>
                   <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                   <button
                        type="button"
                        onClick={() => toggleFavorite("clarity")}
                        style={{ color: favorites.clarity ? "red" : "" }}
                        className="relative left-57 bottom-75.5 rounded p-2"
                        aria-label="Add Kage Clarity One to favorites"
                    >
                        <i className={favorites.clarity ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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
                    <Link to="/lumiax1"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Lumia X1 Phone.png"></img></Link>
                     <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("lumia")}
                        style={{ color: favorites.lumia ? "red" : "" }}
                        className="relative left-57 bottom-75.5 rounded p-2"
                        aria-label="Add Kage Lumia X1 to favorites"
                    >
                        <i className={favorites.lumia ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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
                    <Link to="/corestation"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/CoreStation.png"></img> </Link>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("core")}
                        style={{ color: favorites.core ? "red" : "" }}
                        className="relative left-57 bottom-75.5 rounded p-2"
                        aria-label="Add Kage CoreStation to favorites"
                    >
                        <i className={favorites.core ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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

                        
                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <Link to="/titanlaptop"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/Titan 17 Laptop.png"></img> </Link>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("titan")}
                        style={{ color: favorites.titan ? "red" : "" }}
                        className="relative left-57 bottom-75.5 rounded p-2"
                        aria-label="Add Kage Titan 17 to favorites"
                    >
                        <i className={favorites.titan ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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

                     <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <Link to ="/edgecontrol"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Controller Images/Controller.png"></img></Link>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("edge")}
                        style={{ color: favorites.edge ? "red" : "" }}
                        className="relative left-57 bottom-75.5 rounded p-2"
                        aria-label="Add Kage EdgeControl to favorites"
                    >
                        <i className={favorites.edge ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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
                    <Link to="/linkglasses"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Smart-Glasses Images/Link SmartGlasses.png"></img> </Link>
                    <p className="bg-[#2EC4B6] w-27 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">Best Seller</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("link")}
                        style={{ color: favorites.link ? "red" : "" }}
                        className="relative left-57 bottom-75.5 rounded p-2"
                        aria-label="Add Kage Link Glasses to favorites"
                    >
                        <i className={favorites.link ? "fa-solid fa-heart text-2xl" : "fa-regular fa-heart text-2xl"}></i>
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

                
                </div>
            </div>

        </section>
    )
}

export default Featured