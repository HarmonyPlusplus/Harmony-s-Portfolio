import { IconMail, IconPhone, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

const ContactInfo = () => {
    const linkedinlink = import.meta.env.VITE_LINKEDIN_LINK;
    const githublink = import.meta.env.VITE_GITHUB_LINK;
    const xlink = import.meta.env.VITE_TWITTER_LINK;

    return (
        <div className="max-md:mt-10">
            <h3 className="font-bold text-2xl mb-3 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl cursor-pointer transition-colors">
                    <div className="rounded-full bg-indigo-200 p-3">
                        <IconMail size={24} className="text-indigo-500" />
                    </div>
                    <div>
                        <p className="font-bold mb-1.5 dark:text-white md:text-lg">Email</p>
                        <p className="dark:text-white">getim180@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl cursor-pointer transition-colors">
                    <div className="rounded-full bg-indigo-200 p-3">
                        <IconPhone size={24} className="text-indigo-500" />
                    </div>
                    <div>
                        <p className="font-bold mb-1.5 dark:text-white md:text-lg">Phone</p>
                        <p className="dark:text-white">+234 8103 725 686</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl cursor-pointer transition-colors">
                    <div className="rounded-full bg-indigo-200 p-3">
                        <IconMapPin size={24} className="text-indigo-500" />
                    </div>
                    <div>
                        <p className="font-bold mb-1.5 dark:text-white md:text-lg">Location</p>
                        <p className="dark:text-white">Akwa Ibom State, Nigeria</p>
                    </div>
                </div>
            </div>

            <div className="my-5">
                <h3 className="dark:text-white md:text-2xl font-bold">Follow Me</h3>
                <div className="flex flex-wrap gap-2 my-3">
                    <div className="rounded-full bg-indigo-100 dark:bg-transparent p-3">
                        <a href={githublink} target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <IconBrandGithub size={24} className="text-gray-900 dark:text-white cursor-pointer hover:text-indigo-500 transition-colors" />
                        </a>
                    </div>
                    <div className="rounded-full bg-indigo-100 dark:bg-transparent p-3">
                        <a href={linkedinlink} target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                        <IconBrandLinkedin size={24} className="text-gray-900 dark:text-white cursor-pointer hover:text-indigo-500 transition-colors" />
                        </a>
                    </div>
                    <div className="rounded-full bg-indigo-100 dark:bg-transparent p-3">
                        <a href={xlink} target="_blank" rel="noopener noreferrer" aria-label="X">
                        <IconBrandX size={24} className="text-gray-900 dark:text-white cursor-pointer hover:text-indigo-500 transition-colors" />
                        </a>
                    </div>

                </div>
                <div className="p-6 bg-linear-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl text-white mt-6">
                    <h3 className="text-xl font-bold mb-1">Available for Freelance</h3>
                    <p>I'm currently available for freelance work and exciting new projects. Let's create something amazing together!</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
