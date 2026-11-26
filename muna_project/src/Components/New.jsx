
import { useState } from "react";
import { Link } from "react-router-dom"

function New() {

        const [favorites, setFavorites] = useState({});
    
        const toggleFavorite = (id) => {
            setFavorites((prev) => ({
                ...prev,
                [id]: !prev[id],
            }));
        };
    

    return(
<section>

    
    <div className="relative top-450 ">
         <div className="absolute left-15 bg-gray-400 h-px w-350" ></div>
        <span>

        <span className="flex flex-col gap-1.5 relative top-13 ml-20 text-white">
            <p className="text-[#00ff37e5] font-semibold font-size2">Just Dropped</p>
            <p className="font-bold text-4xl">New Arrivals</p>
            <p className="text-gray-400 font-size3">New Products added to our collection</p>
        </span>

        <span>
           <Link to="/new-arrivals"> <button className="text-[#2EC4B6] text-center border-2 border-[#2EC4B6] shadow-[0_0_10px_#2EC4B6] hover:shadow-[0_0_20px_#2EC4B6] hover:scale-101 ml-315 relative bottom-3 hover:text-[#1e9589] font-size1 group px-6 py-3 rounded-lg w-46">See All New <span className="group-hover:translate-x-2 ml-1 transition-transform-duration-300 inline-block">→</span></button> </Link>
        </span>

        </span>

    <span className="flex flex-row justify-center ml-5 gap-x-15 mt-22 text-white Hero-text">


                  <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <Link to="/apexlaptop"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Laptop Images/Apex 16 Laptop.png"></img></Link>
                    <p className="bg-green-400 w-14 relative bottom-67  ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                    <button
                        type="button"
                        onClick={() => toggleFavorite("apex16")}
                        style={{ color: favorites.apex16 ? "red" : "" }}
                        className="relative left-57 bottom-75 rounded p-1"
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
                   <Link to="/ariaphone"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Phone Images/Phone.png"></img></Link>
                    <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center " >New</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("aria5g")}
                        style={{ color: favorites.aria5g ? "red" : "" }}
                        className="relative left-57 bottom-75 rounded p-1"
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
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.3</p>
                    </span>
                    <p className="text-center relative bottom-4">$299.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                   <Link to="/motionband"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Fit-Band Images/MotionBand.png"></img></Link>
                    <p className="bg-green-400 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5  text-center">New</p>
                     <button
                        type="button"
                        onClick={() => toggleFavorite("motionBand")}
                        style={{ color: favorites.motionBand ? "red" : "" }}
                        className="relative left-57 bottom-75 rounded p-1"
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
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.4</p> 
                    </span>
                    <p className="text-center relative bottom-4">$69.99</p>
                    <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                <span className=" border-4 border-[#2EC4B6] w-70 rounded-lg">
                <Link to="/boom360"><img className="h-70 w-70 object-cover border-[#2EC4B6] hover:scale-101 transition-transform duration-300" src="/assets/Speaker Images/Boom 360 Speaker.png" alt="Speaker" /></Link>
                <p className="bg-green-400 w-14 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                   <button
                        type="button"
                        onClick={() => toggleFavorite("boom360")}
                        style={{ color: favorites.boom360 ? "red" : "" }}
                        className="relative left-57 bottom-75 rounded p-1"
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
    </span>
    </div>
</section>
    )
}
export default New