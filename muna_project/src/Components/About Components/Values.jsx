function Values() {
    return(
            <section>
                <div className="bg-[#1a1a23] text-white relative top-50">
                    <p className="text-center font-bold text-3xl mb-3 pt-20">Our Values</p>
                    <p className="text-center text-gray-400 text-xl">The principles that guide everything we do</p>

                    <div className="flex flex-row gap-12 relative mt-25 px-10 pb-25">
                        <span className="Flex flex-col shadow-[0px_0px_20px_#00E5FF] bg-[#1b1c1b] w-100 h-45 py-7 px-5 rounded-xl">
                            <i class="fa-regular fa-gem mb-2 text-xl text-[#2EC4B6]"></i>
                            <p className="mb-2 font-bold">Quality First</p>
                            <p className="text-gray-400">We choose products that offer reliable performance, great design, and lasting value.</p>
                        </span>

                        <span className="flex flex-col shadow-[0px_0px_20px_#00E5FF] bg-[#1b1c1b] w-100 h-45 py-7 px-5 rounded-xl">
                            <i class="fa-solid fa-bolt mb-2 text-xl text-[#2EC4B6]"></i>
                            <p className="mb-2 font-bold">Innovation</p>
                            <p className="text-gray-400">We keep up with the latest technology to bring you products that make life easier and better.</p>
                        </span>

                        <span className="flex flex-col shadow-[0px_0px_20px_#00E5FF] bg-[#1b1c1b] w-100 h-45 py-7 px-5 rounded-xl">
                            <i class="fa-solid fa-handshake mb-2 text-xl text-[#2EC4B6]"></i>
                            <p className="mb-2 font-bold">Customer First</p>
                            <p className="text-gray-400">Your experience matters. We're committed to making every purchase simple, secure, and worthwhile.</p>
                        </span>

                        <span className="flex flex-col shadow-[0px_0px_20px_#00E5FF] bg-[#1b1c1b] w-100 h-45 py-7 px-5 rounded-xl">
                            <i class="fa-solid fa-rocket mb-2 text-xl text-[#2EC4B6]"></i>
                            <p className="mb-2 font-bold">Always Evolving</p>
                            <p className="text-gray-400">Technology never stops changing and neither do we. We're constantly discovering better products for you</p>
                        </span>
                    </div>
                </div>
            </section>
    )
}

export default Values