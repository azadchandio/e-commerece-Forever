import { Link } from "react-router-dom"
import line from "../assets/frontend_assets/Rectangle 3147.png"
import googleLogo from "../assets/frontend_assets/Icon-Google.png"

const SignIn = () => {
  return (
    <div className="px-8 pt-5 md:px-16 lg:px-36 mt-20 mb-50 flex items-center justify-center flex-col ">
        <div className="flex items-center mb-6 gap-2">
        <h2 className="text-3xl "><span className="text-gray-500">LOGIN</span></h2>
        <img src={line} alt="" />
      </div>
        <div className="p-10">
            <form className="space-y-4">
            <div>
                <input type="email" id="email" name="email" placeholder="Email" className="w-100 border border-gray-300 p-2 rounded" />
            </div>
            <div>
                <input type="password" id="password" name="password" placeholder="Password" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex items-center justify-between">
                <Link to="/sign-up" className="text-sm text-gray-600 hover:underline">Forgot your password</Link>
                <Link to="/sign-up" className="text-sm text-gray-600 hover:underline">Create account</Link>
            </div>
            <div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200 cursor-pointer">
                Sign In
            </button>
            <button type="button" className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded mt-4 hover:bg-gray-100 transition duration-200 cursor-pointer">
                <img src={googleLogo} alt="Google logo" className="w-5 h-5" />
                <span>Sign in with Google</span>
            </button>    
            </div>
            </form>
            </div>
    </div>
  )
}

export default SignIn