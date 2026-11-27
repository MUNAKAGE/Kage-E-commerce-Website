function Review () {
    return(
        <section className="home-reviews">
            <div className="relative top-510">
                 <div className="absolute left-15 bg-gray-400 h-px w-350" ></div>

                 <span className="flex flex-col gap-1 items-center relative top-10">
                    <p className="font-bold text-4xl pt-3 text-white">Customer Reviews</p>
                    <p className="text-gray-400 text-lg">Join our Hundreds of satisfied customers who love shopping with us</p>
                 </span>

                 <div className="home-review-cards flex flex-row justify-center mt-28 gap-30 Hero-text">

                    <span className="bg-gray-900 rounded-xl px-4 py-3 w-145 h-55 relative left-15 "> 

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

                       <span className="bg-gray-900 rounded-xl px-4 py-3 w-145 h-55">

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

                       <span className="bg-gray-900 rounded-xl px-4 py-3 w-145 h-55 relative right-15">

                    <span className="text-[#ffd504] flex flex-row gap-0.5 mb-3 mt-1.5">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <p className="text-white mb-4">Got a gaming headset and I've been really happy with it so far. The sound is clear and the microphone works great for gaming.</p>
                    <span className="flex flex-row">
                        <img className="w-12 h-12 rounded-full object-cover border-2 border-gray-400" src="/assets/Person 5.jpg" alt="Profile Image"></img>
                        <span className="flex flex-col ml-3">
                        <p className="text-white">Michael Olujari</p>
                        <p className="text-gray-400">Lagos, Nigeria</p>
                        </span>
                        <p className="ml-27 mt-2 bg-[#00710b] text-[#26ff00] px-2 py-1 h-8 rounded"><i class="fa-solid fa-check"></i> Verified</p>
                    </span>
                    </span>

                 </div>

                 <div className="relative left-40 top-15 bg-gray-600 h-px w-300" ></div>

                 <span className="flex flex-row gap-20 justify-center text-gray-400 mt-24 Hero-text">

                    <span>
                        <p className="text-lg"><i class="fa-solid fa-comment-dots relative right-2"></i>Customer Feedback</p>
                    </span>

                    <span>
                        <p className="text-lg"><i class="fa-solid fa-bag-shopping relative right-2"></i>Quality Guaranteed</p>
                    </span>

                    <span>
                        <p className="text-lg"><i class="fa-solid fa-check relative right-2"></i>Verified Reviews</p>
                    </span>
                 </span>
            </div>
        </section>
    )
}

export default Review