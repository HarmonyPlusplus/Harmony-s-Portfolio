import Title from "../../../Title"
import { projectList } from "./Featurescomponents/projectList"
import { useNavigate } from "react-router-dom"
import { motion } from "motion/react"

const FeaturedProject = () => {
  const navigate = useNavigate()
  const viewAllProjects = () => {
    navigate('/works')
  }

  return (
    <motion.div className="py-20 " 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
        
      <Title title="Featured Project" subtitle="Some of my recent work" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2  mt-10 mx-auto  px-4 max-w-7xl">
        {projectList.map((project, index) => (
          <div key={index} className="mb-8 rounded-lg shadow-lg max-w-sm">
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={project.images}
                alt={project.title}
                className="w-full h-auto rounded-t-lg  hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="p-6 dark:bg-gray-900 rounded-b-2xl">
              <h3 className="text-2xl font-bold mt-4 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
              {project.stack && (
                <div className="mt-2">
                  <ul>
                    {project.stack.map((tech, techIndex) => (
                      <li key={techIndex} className="inline-block gap-2 mb-1 mr-2 bg-[#E0E7FF] text-[#4F46E5] px-3 py-1 rounded-full text-sm dark:bg-[#312e8180] dark:text-indigo-400">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <motion.div className="flex justify-center  "initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <button onClick={viewAllProjects} className="bg-[#4F46E5] text-white px-8 py-4 rounded-full  max-md:px-6 max-md:py-2 ">View All Projects</button>
      </motion.div>
    </motion.div>
  )
}

export default FeaturedProject