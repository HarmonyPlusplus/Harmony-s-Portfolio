import { Link } from "react-router-dom"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

const Footer = () => {
    const facebooklink = import.meta.env.VITE_FACEBOOK_LINK;
    const twitterlink = import.meta.env.VITE_TWITTER_LINK;
    const linkedinlink = import.meta.env.VITE_LINKEDIN_LINK;
    const instagramlink = import.meta.env.VITE_INSTAGRAM_LINK;

    return (
        <footer className="bg-[#131a29] w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 px-6 py-10 max-md:grid-cols-1">
                <div className="text-white">
                    <h1 className="harmony font-bold text-xl mb-3">Harmony</h1>
                    <p className="text-gray-400">Frontend Developer crafting beautiful web experiences</p>
                </div>

                <div className="text-white">
                    <h3 className="font-bold">Quick Links</h3>
                    <div className="flex flex-col gap-2 text-gray-400 mt-3 w-fit">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <Link to="/works" className="hover:text-white transition-colors">Works</Link>
                        <Link to="/resume" className="hover:text-white transition-colors">Resume</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>

                <div className="text-white">
                    <h3 className="font-bold mb-4">Connect</h3>
                    <div className="flex gap-3">
                        {/* Use <a> for external links. Ensure href is not undefined */}
                        <a href={facebooklink || "#"} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all">
                            <IconBrandFacebook size={22} />
                        </a>

                        <a href={twitterlink || "#"} target="_blank" rel="noopener noreferrer" aria-label="x" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all">
                            <IconBrandX size={22} />
                        </a>

                        <a href={linkedinlink || "#"} target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all">
                            <IconBrandLinkedin size={22} />
                        </a>

                        <a href={instagramlink || "#"} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-700 hover:scale-105 transition-all">
                            <IconBrandInstagram size={22} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="text-center text-gray-500 border-t border-gray-800 py-6">
                <p className="text-sm">&copy; {new Date().getFullYear()} Harmony. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer