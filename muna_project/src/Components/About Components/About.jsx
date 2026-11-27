function About() {
    return(
        <section>
            <div className="about-intro bg-[#1a1a23] min-h-screen">
                <span className="flex flex-col items-center gap-y-6 relative top-10 mt-15">
                <p className="bg-[#68cdc349] text-[#12dac6] rounded-full px-3 py-1 mt-8 border border-[#2EC4B6] backdrop-blur-lg ">Our Story </p>
                <p className="text-white font-bold text-5xl">Technology That Fits Your Lifestyle</p>
                <p className="text-gray-400 text-center text-xl">We're passionate about bringing quality technology closer to you. From everyday <br/> devices to essential accessories, we provide reliable products designed<br/> to make your work,entertainment, and everyday life easier.</p>
                </span>

                <span className="bg-black  text-white flex flex-row gap-35 justify-center mt-30 py-9 Hero-text border border-gray-700">
                    <span className="flex flex-col gap-2">
                        <p className="text-center text-4xl font-bold text-[#2EC4B6]">1K+</p>
                        <p className="text-center text-xl text-gray-400">Happy Customers</p>
                    </span>

                    <span className="flex flex-col gap-2">
                        <p className="text-center text-4xl font-bold text-[#2EC4B6]">50+</p>
                        <p className="text-center text-xl text-gray-400">Products</p>
                    </span>

                    <span className="flex flex-col gap-2">
                        <p className="text-center text-4xl font-bold text-[#2EC4B6] ">5+</p> 
                        <p className="text-center text-xl text-gray-400">Countries</p> 
                    </span>

                    <span className="flex flex-col gap-2">
                        <p className="text-center text-4xl font-bold text-[#2EC4B6]">4.9</p>
                        <p className="text-center text-xl text-gray-400">Average Rating</p>
                    </span>
                </span>

            </div>
        </section>
    )
}

export default About