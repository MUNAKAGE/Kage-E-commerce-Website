function AboutDiscount() {
    return(
        <section className="home-discount relative top-100" style={{background: `radial-gradient(circle at 95% 80%, rgba(46,196,182,0.25), transparent 100%), #000000`}}>
            <div className=" relative backdrop-blur-3xl h-180 ">
                <div className="flex flex-row text-white pt-40 ml-22 ">


                    <div className="relative top-20">
                        <p className="font-bold text-3xl mb-3">Get 20% Off Your First Order</p>
                        <p className="text-xl text-gray-400 mb-7">Sign up for our newsletter and receive exclusive offers, early access <br/> to new products, and useful tech updates.</p>
                        <span className="flex flex-row gap-4 mb-2">
                            <input type="email" placeholder="Enter Your Email" className="w-110 h-13 p-5 border border-white/20 bg-transparent rounded-lg  "/>
                            <button className="bg-[#2EC4B6] px-7 py-2 rounded-lg">Subscribe</button>
                        </span>
                        <p className="text-md text-gray-500">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
                    </div>


                    <div className="grid grid-cols-2 gap-y-7 gap-x-5 relative left-17">

                        <span className="py-6 pl-5 h-45 bg-gray-600/20 backdrop-blur-3xl rounded-lg">
                            <i class="fa-solid fa-gift text-[#2EC4B6] text-2xl text-center mb-4"></i>
                            <p className="font-bold text-xl mb-2">Exclusive Offers</p>
                            <p className="text-gray-400">Get member-only discounts and special <br/> deals on your favorite tech.</p>
                        </span>

                        <span className="py-6 pl-5 h-45 bg-gray-600/20 backdrop-blur-3xl rounded-lg">
                            <i class="fa-solid fa-box-open text-[#2EC4B6] text-2xl text-center mb-4"></i>
                            <p className="font-bold text-xl mb-2">New Arrivals First</p>
                            <p className="text-gray-400">Be the first to know about new devices,<br/> gadgets, and accessories</p>
                        </span>

                        <span className="py-6 pl-5 h-45 bg-gray-600/20 backdrop-blur-3xl rounded-lg">
                            <i class="fa-regular fa-circle-check text-[#2EC4B6] text-2xl text-center mb-4"></i>
                            <p className="font-bold text-xl mb-2">Early Access</p>
                            <p className="text-gray-400">Get early access to major sales, limited<br/> releases, and special promotions.</p>
                        </span>

                        <span className="py-6 px-5 h-45 bg-gray-600/20 backdrop-blur-3xl rounded-lg">
                            <i class="fa-solid fa-laptop text-[#2EC4B6] text-2xl text-center mb-4"></i>
                            <p className="font-bold text-xl mb-2">Tech Tips & Updates</p>
                            <p className="text-gray-400">Get useful tech tips, product<br/> recommendations, and the latest updates.</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDiscount