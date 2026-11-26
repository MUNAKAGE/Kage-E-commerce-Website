function Headphones() {
    return(
        <section>
            <div className=" text-white bg-[#1a1a23] min-h-screen pt-10"  >
                <div className="flex flex-row">

                <div>
                     <p className="bg-green-400 w-14 relative top-15 left-22 ml-2 rounded-lg px-3 py-0.5 text-center">New</p>
                    <img className="h-160 w-135 ml-20 rounded-3xl shadow-[0px_0px_20px_#2EC4B6]" src="/assets/Headphone Images/Headphone.png" alt="" />
                </div>

                <div className="flex flex-col text-white relative left-20 top-20">
                    <p className="bg-green-400 w-14 relative rounded-lg px-3 py-0.5 text-center mb-4">New</p>
                    <p className="font-bold text-5xl mb-4">Wireless Headphones</p>
                
                    <span className="flex flex-row mb-3 text-[#2EC4B6]">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.0</p>
                    </span>
                    <p className="font-bold text-3xl mb-5">$129.99</p>
                    <p className="text-xl w-150 text-gray-400">Enjoy rich, immersive sound with these sleek wireless headphones. Designed for comfort and everyday listening, they offer clear audio and a modern look that fits any lifestyle.</p>

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
                    <p className="text-white mb-4">The headphones arrived quickly and the sound quality is excellent. I also really like that they come with a warranty, so I feel confident about my purchase.</p>
                    <span className="flex flex-row">
                        <img className="w-12 h-12 rounded-full object-cover border-2 border-gray-400" src="/assets/Person 6.jpg" alt="Profile Image"></img>
                        <span className="flex flex-col ml-3">
                        <p className="text-white">Daniel Okafor</p>
                        <p className="text-gray-400">Enugu, Nigeria</p>
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
                    <p className="text-white mb-4">Bought a wireless keyboard and mouse from here and I'm really impressed with the quality. Everything works perfectly and delivery was quick.</p>
                    <span className="flex flex-row">
                         <img className="w-12 h-12 rounded-full object-cover border-2 border-gray-400" src="/assets/Person 3.jpg" alt="Profile Image"></img>
                        <span className="flex flex-col ml-3">
                        
                        <p className="text-white">Sarah Mitchell</p>
                        <p className="text-gray-400">London,England</p>
                        </span>
                        <p className="ml-27 mt-2 bg-[#00710b] text-[#26ff00] px-2 py-1 h-8 rounded"><i class="fa-solid fa-check"></i> Verified</p>
                    </span>
                    
                    </span>
                    </span>
                </div>

                

                <div className="mt-10 pl-20 bg-black w-full ">
                    <p className=" text-3xl font-bold mb-9 pt-9"> You May Also Like</p>

                    <span className="flex flex-row gap-19">
                         <span className= "border-4 border-[#2EC4B6] w-70 rounded-lg ">
                    <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Earbuds Images/Earbuds.png"></img>
                    <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-20%</p>
                    <i class="fa-regular fa-heart relative left-57 bottom-73 text-2xl"></i>
                    <p className="font-bold relative bottom-6 text-center">Earbuds</p>
                    <span className="relative bottom-4 flex flex-row justify-center text-[#2EC4B6] mb-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p className="text-gray-400 relative bottom-1 left-0.5">4.5</p>
                    </span>
                    <p className="text-center relative bottom-4">$59.99</p>
                     <button className=" bg-black border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-2xl text-center relative left-15 bottom-1 p-2 w-40 mb-2 hover:shadow-[0_0_20px_#2EC4B6] transition-colors"><span><i class="fa-solid fa-cart-shopping mr-1"></i></span>Add to cart</button>
                </span>

                 <span className="border-4 border-[#2EC4B6] w-70 rounded-lg">
                        <img className="h-70 w-70 hover:scale-101 transition-transform duration-300" src="/assets/Headset Images/Headset Image.png" alt="Headset"></img>
                         <p className="bg-red-600 w-15 relative bottom-67 ml-2 rounded-lg px-3 py-0.5 text-center">-30%</p>
                        <i class="fa-regular fa-heart relative left-57 bottom-73 text-2xl"></i>
                        <p className="font-bold relative bottom-6 text-center">Headset</p>
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


              </div>
        </section>

    )
}

export default Headphones 