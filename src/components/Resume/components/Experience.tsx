import { Experiencelist } from "./ResumeContent"
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="mt-10 mx-auto max-md:px-1">
      <h2 className="font-bold text-3xl max-sm:text-xl dark:text-white">Work Experience</h2>
      {Experiencelist.map((exp, index) => (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          key={index}
          className="relative pl-8 max-sm:pl-4 border-l-2 border-indigo-600 dark:border-indigo-400 mt-10 mb-10"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>

          <div className="md:ml-4 rounded-sm p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {exp.position}
            </h3>

            <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
              {exp.company}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {exp.years}
            </p>

            <p className="text-gray-600 max-md:text-sm dark:text-gray-300 mb-4">
              {exp.description}
            </p>

            <ul className="px-6 text-gray-600 max-md:text-sm dark:text-gray-300 list-disc">
              {exp.done.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Experience
