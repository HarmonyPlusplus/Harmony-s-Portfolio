import { useNavigate } from "react-router-dom"
import PortImage from '../../../assets/PortImage.jpg'
import {motion} from 'motion/react'
const Header = () => {
    const navigate = useNavigate();

    const viewWorks = () => {
        navigate("/works");
    }
    const viewContact = () => {
        navigate("/contact");
    }
    return (
        <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="header-container flex justify-between items-center px-6 py-20  max-md:flex-col max-md:space-y-8 max-md:text-center md:px-5 lg:px-20 gap-10 ">
            <div>
                <div className="text-md text-[#4F46E5] px-3 py-1 bg-[#e5e7eb] rounded-[60px] w-fit  items-center mb-6 dark:bg-[#312e8180] dark:text-indigo-400">👋 Welcome to my portfolio</div>
                <div>
                    <h1 className="text-6xl font-bold dark:text-white">Hi, I'm <span className="bg-linear-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent">Harmony</span> </h1>
                    <h3 className="text-[#4b5563] text-xl mt-4 dark:text-gray-300">Frontend Developer</h3>
                    <p className="text-[#4b5563] text-lg mt-4 w-full max-w-[600px] dark:text-gray-300">Crafting beautiful, responsive, and user-friendly web experiences with modern technologies. Passionate about clean code and stunning animations.</p>
                    <div className="mt-6 flex gap-4 max-md:justify-center ">
                        <button className="bg-linear-to-r from-[#4F46E5] to-[#9333EA] px-6 py-2 text-white font-bold  cursor-pointer  rounded-[60px] max-md:px-4 max-md:text-sm" onClick={viewWorks}>View Works</button>
                        <button className="text-[#4F46E5] px-6 py-2 font-bold border-2 cursor-pointer border-[#4F46E5] rounded-[60px] max-md:px-4 max-md:text-sm" onClick={viewContact}>Get In Touch</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[500px] relative ">
                <img className="w-full rounded-full shadow-2xl " src={PortImage} alt="Header Image" />
                <div className='bg-white dark:bg-gray-900 dark:text-white px-6 py-2 rounded-md font-bold text-md shadow-lg  border-[#e5e7eb] absolute top-0 right-0'>
                    Experience
                </div>
                <div className="bg-white dark:bg-gray-900 dark:text-white px-6 py-2 rounded-md font-bold text-md shadow-lg border-[#e5e7eb] absolute bottom-0 left-0">
                    50+ Projects 
                </div>
            </div>

        </motion.div>
    )
}

export default Header
