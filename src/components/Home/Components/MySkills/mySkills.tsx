import Title from "../../../Title"
import { skillsList } from "./skillsList"
import { motion } from "motion/react"
const mySkills = () => {
    return (

        <div className="py-20 backdrop-blur-sm max-md:py-10">
            <Title title="My Skills" subtitle="Technologies I work with" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 mb-6 dark:text-white">
                {skillsList.map((skill, index) => (
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        key={index} className=" p-4 dark:border-none border-2 border-gray-200 rounded-lg shadow-md dark:shadow-xl">
                        <div className="flex items-center space-x-4">
                            <div className="w-fit bg-indigo-100 rounded-lg">
                                <p className="p-2">{skill.icon}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{skill.name}</h3>
                                <p className="dark:text-[#9CA3AF]">{skill.level}</p>
                            </div>
                        </div>
                        <div className="w-full mt-4 bg-amber-50 rounded-full h-2. items-center">
                            {skill.percentage}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

    )
}

export default mySkills
