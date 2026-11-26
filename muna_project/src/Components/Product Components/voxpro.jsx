
import { useState } from "react";
import { Link } from "react-router-dom";

function VoxPro() {

 const [favorites, setFavorites] = useState({});
        
            const toggleFavorite = (id) => {
                setFavorites((prev) => ({
                    ...prev,
                    [id]: !prev[id],
                }));
            };
return(
<section>
            <div className=" text-white bg-[#1a1a23] min-h-screen pt-30"  >
                <div className="flex flex-row">

                <div>
                      <p className="bg-green-400 w-14 relative top-15 left-22 ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                    <img className="h-160 w-135 ml-20 rounded-3xl shadow-[0px_0px_20px_#2EC4B6]" src="/assets/Headset Images/Vox Pro Headset.png" alt="" />
                </div>

                <div className="flex flex-col text-white relative left-20 top-20">
                   <p className="bg-green-400 w-14 relative rounded-lg px-3 py-0.5 text-center mb-4">New</p>
                    <p className="font-bold text-5xl mb-4">Kage Vox Pro</p>
                
                    <span className="flex flex-row mb-3 text-[#2EC4B6]">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p> 
                    </span>
                    <p className="font-bold text-3xl mb-5">$54.99</p>
                    <p className="text-xl w-150 text-gray-400">Immerse yourself in every game with the Kage Vox Pro. Designed for clear audio, powerful sound, and comfortable extended use, it delivers an immersive gaming experience that’s perfect for competitive play, music, calls, and everyday entertainment.</p>

                          <span className="flex flex-row items-start gap-3 relative top-20">
                            <button className="bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-xl text-center w-90 px-3 py-3 mb-3 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                            <button className="border-2 border-[#2EC4B6] text-[#2EC4B6] bg-black rounded-xl p-3 leading-none">
                                <i class="fa-regular fa-heart text-2xl"></i>
                            </button>
                     </span>

                </div> 

                </div>

                    <div className=" h-px ml-20 w-340 bg-gray-500 relative top-18"></div>

                <div >
                    <p className="mt-30 ml-20 text-3xl font-bold">Customer Reviews</p>

                    <span className="flex flex-row gap-10 mt-8 ml-20 pb-6">

                    <span className="bg-gray-900 rounded-xl px-4 py-3 w-110 h-55 "> 
                    <span className="text-[#ffd504] flex flex-row gap-0.5 mb-3 mt-1.5">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <p className="text-white mb-4">The Kage Vox Pro delivers clear, immersive sound and feels comfortable even during long gaming sessions. The audio is crisp, the headset looks great, and it arrived quickly and well packaged. Really happy with it!</p>
                    <span className="flex flex-row">
                        <img className="w-12 h-12 rounded-full object-cover border-2 border-gray-400" src="/assets/Person 5.jpg" alt="Profile Image"></img>
                        <span className="flex flex-col ml-3">
                        <p className="text-white">Micheal Olujari</p>
                        <p className="text-gray-400">Lagos, Nigeria</p>
                        </span>
                        <p className="ml-27 mt-2 bg-[#00710b] text-[#26ff00] px-2 py-1 h-8 rounded"><i class="fa-solid fa-check"></i> Verified</p>
                    </span>
                    </span>

                        <span className="bg-gray-900 rounded-xl px-4 py-3 w-110 h-55">

                    <span className="text-[#ffd504] flex flex-row gap-0.5 mb-3 mt-1.5">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <p className="text-white mb-4">The Kage Vox Pro has excellent sound quality and feels comfortable for long gaming sessions. The audio is clear, the fit is great, and the quick delivery was a nice bonus. Definitely enjoying it!</p>
                    <span className="flex flex-row">
                         <img className="w-12 h-12 rounded-full object-cover border-2 border-gray-400" src="/assets/Person 7.jpg" alt="Profile Image"></img>
                        <span className="flex flex-col ml-3">
                        
                        <p className="text-white">Kingsley Okonkwo</p>
                        <p className="text-gray-400">Enugu, Nigeria</p>
                        </span>
                        <p className="ml-27 mt-2 bg-[#00710b] text-[#26ff00] px-2 py-1 h-8 rounded"><i class="fa-solid fa-check"></i> Verified</p>
                    </span>
                    
                    </span>
                    </span>
                </div>

                

                <div className="mt-10 pl-20 bg-black w-full ">
                    <p className=" text-3xl font-bold mb-9 pt-9"> You May Also Like</p>

                    <span className="flex flex-row gap-19">
                      
                    
                    <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg">
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

                
                     <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                   <Link to="strikepad"><img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Keyboard Images/Keyboard.png"></img></Link>
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


              </div>
        </section>
)
}

export default VoxPro