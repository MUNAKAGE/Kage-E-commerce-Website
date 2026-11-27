import { Link } from "react-router-dom"
import { useState } from "react";

function Sale () {

    const [favorites, setFavorites] = useState({});
    
        const toggleFavorite = (id) => {
            setFavorites((prev) => ({
                ...prev,
                [id]: !prev[id], 
            })); 
        };  

return(
    <section className="home-sale">
        <div className=" w-full relative top-480">

        <div className="absolute left-15 bg-gray-400 h-px w-350" ></div>

            <span className="flex flex-row">
            <span className="flex flex-col gap-0.5 text-white ml-18 pt-10">
                <p className="bg-[#ffffff3f] backdrop-blur-2xl font-size2 rounded-full w-43 py-0.5 px-2 mb-1.5 mt-4 text-center"><i class="fa-regular fa-clock"></i> Limited Time Offer</p>
                <p className="font-bold text-4xl">Season Sale</p>
                <p className="text-gray-400 text-lg">Up to 40% off on selected items</p>
            </span>

            <span>
               <Link to="/sale"> <button className="text-[#2EC4B6] text-center border-2 border-[#2EC4B6] shadow-[0_0_10px_#2EC4B6] hover:shadow-[0_0_20px_#2EC4B6] hover:scale-101 px-6 py-3 ml-240 relative top-25 rounded-lg hover:text-[#1e9589] font-size1 group">See All Sale <span className="group-hover:translate-x-2 ml-1 transition-transform-duration-300 inline-block">→</span></button></Link>
            </span>
            </span>

            <span className="flex flex-row gap-x-15 justify-center text-white Hero-text mt-18">
                
                 <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <Link to="/eleraphone"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Elera Max Phone.png"></img></Link>
                   <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-20%</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("eleraMax")}
                        style={{ color: favorites.eleraMax ? "red" : "" }}
                        className="relative left-57 bottom-75 rounded p-1"
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

             <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <Link to="/strikepad"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Keyboard Images/Keyboard.png"></img></Link>
                    <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-20%</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("strikePad")}
                        style={{ color: favorites.strikePad ? "red" : "" }}
                        className="relative left-57 bottom-75 rounded p-1"
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

                    <span className= "product-card border-4 border-[#2EC4B6] w-70 rounded-lg ">
                   <Link to="/corelaptop"> <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/Core 15 Laptop.png"></img></Link>
                    <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-15%</p>
                      <button
                        type="button"
                        onClick={() => toggleFavorite("core15")}
                        style={{ color: favorites.core15 ? "red" : "" }}
                        className="relative left-57 bottom-75 rounded p-1"
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



                    <span className="product-card border-4 border-[#2EC4B6] w-70 rounded-lg">
                        <Link to="/beatx"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Headset Images/Headset Image.png" alt="Headset"></img></Link>
                        <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-30%</p>
                        <button
                            type="button"
                            onClick={() => toggleFavorite("beatX")}
                            style={{ color: favorites.beatX ? "red" : "" }}
                            className="relative left-57 bottom-75 rounded p-1"
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
            </span>
        </div>
    </section>
)
}

export default Sale