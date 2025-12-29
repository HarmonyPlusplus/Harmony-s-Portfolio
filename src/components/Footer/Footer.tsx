import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <>
            <div className="bg-[#131a29] w-full ">
                <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 px-6 py-4 max-md:grid-cols-1">
                    <div className="text-white pt-6">
                        <h1 className="harmony font-bold text-xl mb-3">Harmony</h1>
                        <p>Frontend Developer crafting beautiful web experiences</p>
                    </div>
                    <div className="text-white pt-6">
                        <h3 className="font-bold">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link to="/">Home</Link>
                            <Link to="/works">Works</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="text-white pt-6">
                        <h3 className="font-bold">Connect</h3>
                        <div className="grid gap-5 max-md:grid-cols-2 md:grid-cols-4">
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Linkedin</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white pb-4">
                    <p className="pt-6 text-sm">&copy; 2024 Harmony. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
