import { Link } from "react-router-dom"

function CateGory() {
return(
     <section>
            <div className="relative">

             

                <span className='text-white text-center flex flex-col gap-3 pt-20'>
                    <p className="font-bold text-3xl pt-3">Shop by Category</p>
                    <p className="text-gray-400">Browse our top categories and find the tech that fits your lifestyle</p>
                </span>
                <span className="Category-grid gap-20 justify-center ml-28 mt-19 text-white Hero-text">
                    
                    <span className="row-span-2 transition-all duration-300 hover:scale-[1.02]">
                       <Link to="/laptopCategory"> <img className=" w-100 h-140 rounded-xl shadow-[0px_0px_20px_#00E5FF] hover:shadow-[0px_0px_50px_#00E5FF] border-3 border-[#2EC4B6]" src="./src/assets/Laptop Images/Vortex 15 Laptop.png" alt="" />
                         <button className="relative bottom-135 left-70 group text-[#00ffe5] hover:text-[#2EC4B6] font-bold border-gray-400 backdrop-blur-2xl">Shop Now <span className="group-hover:translate-x-2 ml-0.5 transition-transform-duration-900 inline-block">→</span></button> </Link>
                        <p className="font-bold relative bottom-23 left-5">Computing</p>
                        <p className="relative bottom-23 left-5 text-gray-300">12 products</p>
                         
                    </span>

                        <span className="transition-all duration-300 hover:scale-[1.02]">
                        <Link to="/mobileCategory"><img className="w-80 h-65 rounded-xl shadow-[0px_0px_20px_#00E5FF] hover:shadow-[0px_0px_50px_#00E5FF] border-3 border-[#2EC4B6]" src="./src/assets/Phone Images/Halo 5g Phone.png" alt="" />
                         <button className="relative bottom-62 left-53 group text-[#00ffe5] hover:text-[#2EC4B6] font-bold">Shop Now <span className="group-hover:translate-x-2 ml-0.5 transition-transform-duration-900 inline-block">→</span></button></Link>
                        <p className="font-bold relative bottom-22 left-5">Mobile</p>     
                        <p className="relative bottom-22 left-5 text-gray-300">10 products</p>
                        
                        </span>

                        <span className="transition-all duration-300 hover:scale-[1.02]">
                            <Link to="/audioCategory"><img className="w-80 h-65 rounded-xl relative right-19 shadow-[0px_0px_20px_#00E5FF] hover:shadow-[0px_0px_50px_#00E5FF] border-3 border-[#2EC4B6]" src="./src/assets/Headphone Images/Clarity One Headphone.png" alt="" />
                             <button className="relative bottom-62 left-33 group text-[#00ffe5] hover:text-[#2EC4B6] font-bold">Shop Now <span className="group-hover:translate-x-2 ml-0.5 transition-transform-duration-900 inline-block">→</span></button></Link>
                            <p className="font-bold relative bottom-22 right-15">Audio</p> 
                             <p className="relative bottom-22 right-15 text-gray-300">20 products</p>
                             
                        </span>
                        
                        
                        <span className="relative bottom-28 transition-all duration-300 hover:scale-[1.02]">
                            <Link to="/gamingCategory"><img className="w-80 h-65 rounded-xl shadow-[0px_0px_20px_#00E5FF] hover:shadow-[0px_0px_50px_#00E5FF] border-3 border-[#2EC4B6]" src="./src/assets/Controller Images/Nova Pro Controller.png" alt="" />
                             <button className="relative bottom-62 left-53 group text-[#00ffe5] hover:text-[#2EC4B6] font-bold">Shop Now <span className="group-hover:translate-x-1 ml-0.5 transition-transform-duration-900 inline-block">→</span></button></Link>
                            <p className="font-bold relative bottom-22 left-5">Gaming</p>     
                             <p className=" relative bottom-22 text-gray-300 left-5">17 products</p>
                             
                        </span>
                        
                        
                        <span className="relative bottom-28 transition-all duration-300 hover:scale-[1.02]">
                            <Link to="/wearablesCategory"><img className="w-80 h-65 rounded-xl relative right-19 shadow-[0px_0px_20px_#00E5FF] hover:shadow-[0px_0px_50px_#00E5FF] border-3 border-[#2EC4B6]" src="./src/assets/Fit-Band Images/FitBand.png" alt="" />
                            <button className="relative bottom-62 left-33  text-[#00ffe5] hover:text-[#2EC4B6] group font-bold">Shop Now <span className="group-hover:translate-x-2 ml-0.5 transition-transform-duration-900 inline-block">→</span></button></Link>
                            <p className="font-bold relative bottom-22 right-15">Wearables</p>
                             <p className="relative bottom-22 text-gray-300 right-15">14 products</p> 
                             
                        </span>
                        
                </span>
            </div>
        </section>
)
}

export default CateGory