import line from "../assets/frontend_assets/Rectangle 3147.png"
import contactImage from "../assets/frontend_assets/contact_img.png"
import Subscribe from "../components/Subscribe"
const Contact = () => {
  return (
    <div className="px-8 py-5 sm:px-16 md:px-34 lg:px-66">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-2xl"><span className="text-gray-500 ">CONTACT</span> US</h1>
        <img src={line} alt="" />
      </div>

        <div className="flex flex-col lg:flex-row gap-15 mt-8 items-center mb-30">
            <img src={contactImage} alt="About image" className="w-90 lg:w-120 "/>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-2xl font-semibold text-gray-600">Our Store</h2>
                <p className="text-gray-500">54709 Willms Station <br /> 
                Suite 350, Washington, USA
                </p>
                <p className="text-gray-500">Tel: (415) 555‑0132</p>
                <p className="text-gray-500">Email: greatstackdev@gmail.com</p>

                <h2 className="text-2xl font-semibold text-gray-600">Careers at Forever</h2>
                <p className="text-gray-500">Learn more about our teams and job openings.</p>
            </div>
        </div>     
        <Subscribe/> 
        
    </div>
  )
}

export default Contact