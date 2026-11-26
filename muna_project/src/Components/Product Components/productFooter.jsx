function ProductFooter() {
return (
    <section>
    <div className="relative top-35 text-white">
                <div className=" bg-gray-400 h-px w-full" ></div>


                <div className="flex flex-row gap-50 justify-center mt-10 mb-10">

                <span className="flex flex-col gap-6">
                    <img src="/assets/Logo.png" className="w-30 h-10" alt="Muna logo"></img>
                    <p>Discover curated collections of <br/>premium tech, devices & accessories</p>
                    <span className="flex flex-row gap-5 text-xl">
                        <i class="fa-brands fa-instagram hover:text-[#2EC4B6]"></i>
                        <i class="fa-brands fa-facebook hover:text-[#2EC4B6]"></i>
                        <i class="fa-brands fa-tiktok hover:text-[#2EC4B6]"></i>
                        <i class="fa-brands fa-shopify hover:text-[#2EC4B6]"></i>
                    </span>
                </span>

                <span className="flex flex-col gap-2 ">
                    <p class="font-bold text-[#2EC4B6] text-xl">Shop</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Laptops</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Phones</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Audio</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Gaming</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Wearables</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Sale</p>
                </span>

                <span className="flex flex-col gap-2">
                    <p class="font-bold text-[#2EC4B6] text-xl">Customer Service</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Contact Us</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Shipping</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Returns</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Warranty</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Track Order</p>
                </span>

                <span className="flex flex-col gap-2">
                    <p class="font-bold text-[#2EC4B6] text-xl">About</p>    
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Our Story</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Careers</p>
                    <p className="text-gray-400 hover:text-[#2EC4B6]">Press</p>
                </span>
                </div>

                 <div className=" bg-gray-400 h-px w-full" ></div>

                    <div className="flex flex-row gap-190 mt-5 p-7">

                <span>
                    <p className="text-gray-400 text-center ml-7">© 2026 KAGE. All rights reserved.</p>
                </span>

                <span className="flex flex-row gap-4 justify-center">
                    <p className="text-gray-400 hover:text-white">Privacy Policy</p> 
                    <div className="bg-gray-400 w-px h-6"></div>
                    <p className="text-gray-400 hover:text-white">Terms & Conditions</p>
                    <div className="bg-gray-400 w-px h-6"></div>
                    <p className="text-gray-400 hover:text-white">Cookie Policy</p>
                </span>

            </div>

            </div>
        </section>
)
}

export default ProductFooter