import { useNavigate } from "react-router-dom"
import Harmony from "../../../assets/GoodnewsHarmony.jpeg"
import { motion } from 'motion/react'
import { IconCode, IconTrophy } from "@tabler/icons-react";
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
            className="header-container flex justify-between items-center px-6 py-10  max-md:flex-col max-md:space-y-8 max-md:text-center md:px-5 lg:px-20 gap-10 ">
            <div className="flex flex-col  max-md:items-start max-md:text-start">
                <div className="text-md text-[#4F46E5] px-3 py-1 bg-[#e5e7eb] rounded-[60px] w-fit  items-center mb-6 dark:bg-[#312e8180] dark:text-indigo-400">👋 Welcome to my portfolio</div>
                <div className="justify-start">
                    <h1 className="text-6xl font-bold dark:text-white max-md:text-4xl">Hi, I'm <span className="bg-linear-to-r from-[#4F46E5] to-[#9333EA] bg-clip-text text-transparent">Goodnews Etim,</span> </h1>
                    <h3 className="text-[#4b5563] text-xl mt-4 dark:text-gray-300">Frontend Developer</h3>
                    <p className="text-[#4b5563] text-lg mt-4 w-full max-w-[600px] dark:text-gray-300">Crafting beautiful, responsive, and user-friendly web experiences with modern technologies. Passionate about clean code and stunning animations.</p>
                    <div className="mt-6 flex gap-4 max-md:justify-between">
                        <button className="bg-linear-to-r from-[#4F46E5] to-[#9333EA] px-6 py-2 text-white font-bold  cursor-pointer  rounded-[60px] max-md:px-4 max-md:text-sm max-sm:w-full" onClick={viewWorks}>View Works</button>
                        <button className="text-[#4F46E5] px-6 py-2 font-bold border-2 cursor-pointer border-[#4F46E5] rounded-[60px] max-md:px-4 max-md:text-sm  max-sm:w-full" onClick={viewContact}>Get In Touch</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[500px] relative max-md:hidden">
                <img className="w-full rounded-full shadow-2xl " src={Harmony} alt="Header Image" />
                <div className='flex items-center gap-1 w-fit bg-white dark:bg-gray-900 dark:text-white px-4 py-4 rounded-lg font-bold shadow-lg  border-[#e5e7eb] absolute top-0 right-0'>
                    <div><IconCode size={30} className="inline-block mr-2 mb-1 text-[#4F46E5]" /></div>
                    <div className="text-xs">
                        <p className="mb-1 text-bold text-md"> 2+ Years</p>
                        <p>Experienced</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 w-fit bg-white dark:bg-gray-900 dark:text-white px-4 py-4 rounded-lg font-bold shadow-lg  border-[#e5e7eb] absolute bottom-0 left-0">
                    <div>
                        <IconTrophy size={30} className="inline-block mr-2 mb-1 text-[#9333EA]" />
                    </div>
                    <div className="text-xs">
                    <p className="mb-1 text-bold text-md"> 50+</p>
                    <p>Projects</p>  
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Header
