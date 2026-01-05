import { IconMail, IconPhone, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

const ContactInfo = () => {
    const linkedinlink = import.meta.env.VITE_LINKEDIN_LINK;
    const githublink = import.meta.env.VITE_GITHUB_LINK;
    const xlink = import.meta.env.VITE_TWITTER_LINK;
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // each item shows 0.2s after previous
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1], // TS-safe cubic-bezier for ease-out
            },
        },
    };



    return (
        <div className="max-md:mt-10">
            <h3 className="font-bold text-2xl mb-3 dark:text-white">Contact Information</h3>
            <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Email */}
                <motion.div
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl cursor-pointer transition-colors"
                    variants={itemVariants}
                >
                    <div className="rounded-full bg-indigo-200 p-3">
                        <IconMail size={24} className="text-indigo-500" />
                    </div>
                    <div>
                        <p className="font-bold dark:text-white md:text-lg">Email</p>
                        <p className="dark:text-gray-300">getim180@gmail.com</p>
                    </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl cursor-pointer transition-colors"
                    variants={itemVariants}
                >
                    <div className="rounded-full bg-indigo-200 p-3">
                        <IconPhone size={24} className="text-indigo-500" />
                    </div>
                    <div>
                        <p className="font-bold dark:text-white md:text-lg">Phone</p>
                        <p className="dark:text-gray-300">+234 8103 725 686</p>
                    </div>
                </motion.div>

                {/* Location */}
                <motion.div
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl cursor-pointer transition-colors"
                    variants={itemVariants}
                >
                    <div className="rounded-full bg-indigo-200 p-3">
                        <IconMapPin size={24} className="text-indigo-500" />
                    </div>
                    <div>
                        <p className="font-bold dark:text-white md:text-lg">Location</p>
                        <p className="dark:text-gray-300">Akwa Ibom State, Nigeria</p>
                    </div>
                </motion.div>
            </motion.div>

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
                <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
                    className="p-6 bg-linear-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl text-white mt-6">
                    <h3 className="text-xl font-bold mb-1">Available for Freelance</h3>
                    <p>I'm currently available for freelance work and exciting new projects. Let's create something amazing together!</p>
                </motion.div>
            </div>
        </div>
    )
}

export default ContactInfo
