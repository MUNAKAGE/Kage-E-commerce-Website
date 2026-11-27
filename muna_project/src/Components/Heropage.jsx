import { Link } from "react-router-dom"
import {  } from "module";
function Heropage() {
    return (
        <section className="home-hero mb-20">
        <img className="absolute w-screen h-180" src="/assets/HeroImage.png" alt="Hero Image"></img>

        <div className="absolute top-40 left-20 flex flex-row gap-0.5">

            <span>
            <p className="text-[#2EC4B6] Hero-text">TECH THAT MOVES WITH YOU</p> 
            </span>

            <span className="bg-[#2EC4B6] h-0.5 w-20 relative top-3 ml-3"></span>
        </div>

            <div className="absolute top-50 left-20 text-white flex flex-col"> 
                <h1 className="text-7xl font-bold Hero-text ">YOUR <span className="text-[#2EC4B6]">TECH</span></h1>
                <h1 className="text-7xl font-bold Hero-text">YOUR <span className="text-[#2EC4B6]">WORLD</span></h1>

            </div>

            <div className="absolute top-90  left-23 Hero-size">
                <p className="text-gray-400">From the latest devices to essential accessories <span className="relative bottom-1.5 mr-0.5"> ____</span> <span className="text-[#2EC4B6] font-bold Hero-text">KAGE</span> <br/> brings you quality tech, sleek design, and unbeatable value. </p>
                <p className="font-bold text-white mt-1">All in one place.</p>
            </div>

            <div className="absolute top-120 left-20 flex flex-row gap-3">
                <Link to="/allproducts"><button className="bg-[#2EC4B6]  rounded w-40 h-16 hover:shadow-[0_0_20px_#2EC4B6]">Shop Now</button></Link>
                <Link to="/categories"><button className="border-2 border-[#2EC4B6] rounded w-40 h-16 text-white hover:shadow-[0_0_20px_#2EC4B6] hover:bottom-5 backdrop-blur-2xl bg-gray-900">Explore Categories</button></Link>
            </div>

            <div className="absolute top-145 left-21 flex flex-row">
                
                <img className="w-12 h-12 rounded-full object-cover border-2 border-[#2EC4B6]" src="/assets/Person 1 (1).jpg" alt="Profile Image"></img>
                <img className="w-12 h-12 rounded-full object-cover border-2 border-[#2EC4B6] relative right-3" src="/assets/Person 2.jpg" alt="Profile Image"></img>
                <img className="w-12 h-12 rounded-full object-cover border-2 border-[#2EC4B6] relative right-5" src="/assets/Person 3.jpg" alt="Profile Image"></img>
                <img className="w-12 h-12 rounded-full object-cover border-2 border-[#2EC4B6] relative right-8" src="/assets/Person 4.jpg" alt="Profile Image"></img>
                
                <span className="h-11 w-1 bg-[#2EC4B6] relative top-0.5 right-3"></span>


                <span className="flex flex-col gap-1.5" >
                    <p className="text-white font-bold">Trusted by Tech Lovers Worldwide!</p>
                    
                <span className="text-[#2EC4B6] flex flex-row">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <p className="text-white relative bottom-1 ml-2">4.9/5 </p>
                </span>

                </span>


            </div>

            <div className="absolute top-170 left-31 bg-black/10 backdrop-blur-lg  w-350 h-25 flex flex-row justify-center -mx-16 rounded-2xl gap-15 ">

                <span className="flex flex-row gap-2 mt-4">
                    <i class="fa-solid fa-truck-fast text-[#2EC4B6] text-2xl mt-2.5 mr-0.5"></i>
                    <span className="text-white flex flex-col">
                        <h4 className="font-bold">Fast Shipping</h4>
                        <p className="text-gray-400">Get your Orders quickly</p>
                    </span>
                </span>

                 <span className="h-11 w-px mt-4 bg-[#2EC4B6] relative top-0.5 right-3"></span>

                 <span className="flex flex-row gap-2 mt-4">
                    <i class="fa-regular fa-circle-check text-[#2EC4B6] text-2xl mt-2.5 mr-0.5"></i>
                    <span className="text-white flex flex-col">
                        <h4 className="font-bold">Secure Payment</h4>
                        <p className="text-gray-400">Shop with confidence</p>
                    </span>
                </span>

                 <span className="h-11 w-px mt-4 bg-[#2EC4B6] relative top-0.5 right-3"></span>

                 <span className="flex flex-row gap-2 mt-4">
                   <i class="fa-solid fa-headset text-[#2EC4B6] text-2xl mt-2.5 mr-0.5"></i>
                    <span className="text-white flex flex-col">
                        <h4 className="font-bold">24/7 Support</h4>
                        <p className="text-gray-400">We are always here</p>
                    </span>
                </span>

                 <span className="h-11 w-px mt-4 bg-[#2EC4B6] relative top-0.5 right-3"></span>

                 <span className="flex flex-row gap-2 mt-4">
                   <i class="fa-regular fa-gem text-[#2EC4B6] text-2xl mt-2.5 mr-0.5"></i>
                    <span className="text-white flex flex-col">
                        <h4 className="font-bold">Quality Guaranteed</h4>
                        <p className="text-gray-400">Only the best products</p>
                    </span>
                </span>
                

            </div>
            
        </section> 
    )
}

export default Heropage
