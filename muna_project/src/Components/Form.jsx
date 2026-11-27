function Form() {

    
//   const [email, setEmail] = useState("");

//   function handleChange(e) {
//     setEmail(e.target.value);
//   }

    return(
<section>
    <div className = "auth-form-page bg-[#1a1a23] min-h-screen flex items-center justify-center">
        <form className="auth-form flex flex-col text-white relative top-10 bg-black px-5 rounded-xl shadow-[0px_0px_25px_#00E5FF]">

            
            <span className="text-center mb-8"> 
            <div className="h-1 w-24 bg-[#2EC4B6] mx-auto mb-4"></div>
            <p className="text-center text-3xl font-bold ">Welcome Back</p>
            <p className="text-center text-gray-400 mt-3">Sign in to Continue with your KAGE account</p>
            </span>

            <span className="mb-5">
            <label className="block text-white font-semibold mb-2">Email Address</label>
            <input placeholder="Enter your email" className="text-white border-gray-500  border rounded-md px-4 py-3 w-full bg-transparent placeholder-gray-400 focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] transition"  type="email"/> 
            </span> 

            <span className="mb-2">
                <label className="block text-white font-semibold mb-2">Password</label>
                <input placeholder="Enter your password" className="border-gray-500 border rounded-md px-4 py-3 text-white w-full bg-transparent placeholder-gray-400 outline-none focus:border-[#2EC4B6] focus:ring-1 focus:ring-[#2EC4B6] transistion" type="password" />
            </span>

            <span className="text-right mb-6">
             <button type="button" className="text-[#2EC4B6] text-sm hover:underline">Forgot Password?</button>
            </span>

            <span>
            <button type="submit" className="w-full bg-[#2EC4B6] hover:bg-[#24ad9f] text-black font-semibold py-3 rounded-md transition duration-300">Sign in</button>
            </span> 

            <span className="flex items-center gap-4 my-7">
                <div className="flex-1 h-px bg-gray-500"></div>
                <p className="text-gray-400">or</p>
                <div className="flex-1 h-px bg-gray-500"></div>
            </span>

            <span className="mb-5">
                <p className="text-center text-gray-300">Don't have an account? {""}
                    <button type="button" className="text-[#2EC4B6] font-semibold hover:underline">Create One</button>
                </p>
                
            </span>
        </form>

        {/* <p>Current Value: {email}</p> */}
    </div>
</section>
    )
}

export default Form