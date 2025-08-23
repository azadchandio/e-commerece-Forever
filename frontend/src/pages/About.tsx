import aboutImage from "../assets/frontend_assets/about_img.png"
import line from "../assets/frontend_assets/Rectangle 3147.png"
import Subscribe from "../components/Subscribe"
const About = () => {
  return (
    <div className="px-8 py-5 sm:px-8 md:px-16 lg:px-34">

        <div className="flex items-center justify-center gap-3">
        <h1 className="text-2xl"><span className="text-gray-500 ">ABOUT</span> US</h1>
        <img src={line} alt="" />
        </div>

        <div className="flex flex-col lg:flex-row gap-20 mt-8 items-center">
            <img src={aboutImage} alt="About image" className="w-100 lg:w-140 "/>
            <div className="flex flex-col gap-4 ">
                <p className="text-gray-500">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes</p>
                <p className="text-gray-500">Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                <h2 className="text-gray-500 font-semibold">Our Mission</h2>
                <p className="text-gray-500">Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
        </div>

        <div className="flex items-center gap-3 mt-16">
            <h1 className="text-2xl"><span className="text-gray-500 ">Why </span>Choose Us</h1>
            <img src={line} alt="" />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 mb-20">
        <div className="border border-gray-200 py-20 px-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Quality Assurance</h2>
            <p className="text-gray-600 leading-relaxed">
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
        </div>
        
        <div className="border border-gray-200 py-20 px-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Convenience</h2>
            <p className="text-gray-600 leading-relaxed">
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
        </div>
        
        <div className="border border-gray-200 py-20 px-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Exceptional Customer Service</h2>
            <p className="text-gray-600 leading-relaxed">
            Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
            </p>
        </div>
        </div>

        <Subscribe/>

    </div>
  )
}

export default About