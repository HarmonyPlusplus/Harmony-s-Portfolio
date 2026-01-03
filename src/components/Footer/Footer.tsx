import { Link } from "react-router-dom"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
const Footer = () => {
    const facebooklink = import.meta.env.VITE_FACEBOOK_LINK;
    const twitterlink = import.meta.env.VITE_TWITTER_LINK;
    const linkedinlink = import.meta.env.VITE_LINKEDIN_LINK;
    const instagramlink = import.meta.env.VITE_INSTAGRAM_LINK;

    return (
        <>
            <div className="bg-[#131a29] w-full ">
                <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 px-6 py-4 max-md:grid-cols-1">
                    <div className="text-white pt-6">
                        <h1 className="harmony font-bold text-xl mb-3">Harmony</h1>
                        <p className="text-gray-400">Frontend Developer crafting beautiful web experiences</p>
                    </div>
                    <div className="text-white pt-6">
                        <h3 className="font-bold">Quick Links</h3>
                        <div className="flex flex-col gap-2 text-gray-400  mt-3 w-fit">
                            <Link to="/" className="hover:text-white">Home</Link>
                            <Link to="/works" className="hover:text-white">Works</Link>
                            <Link to="/resume" className="hover:text-white">Resume</Link>
                            <Link to="/contact" className="hover:text-white">Contact</Link>
                        </div>
                    </div>
                    <div className="text-white pt-6">
                        <h3 className="font-bold mb-2.5">Connect</h3>

                        <div className="flex gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-indigo-700 hover:scale-105 transition">
                                <Link to={facebooklink} target="_blank" rel="noopener noreferrer">
                                <IconBrandFacebook size={22} className="text-white" />
                                </Link>
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-poiner hover:bg-indigo-700 hover:scale-105 transition">
                                <Link to={twitterlink} target="_blank" rel="noopener noreferrer">
                                <IconBrandX size={22} className="text-white" />
                                </Link>
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-indigo-700 hover:scale-105 transition">
                                <Link to={linkedinlink} target="_blank" rel="noopener noreferrer">
                                <IconBrandLinkedin size={22} className="text-white" />
                                </Link>
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-indigo-700 hover:scale-105 transition">
                                <Link to={instagramlink} target="_blank" rel="noopener noreferrer">
                                <IconBrandInstagram size={22} className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center text-white pb-4">
                    <p className="pt-6 text-sm">&copy; 2026 Harmony. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
