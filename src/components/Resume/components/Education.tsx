import { Educationlist } from "./ResumeContent"

const Education = () => {
  return (
    <div className="mt-10 mx-auto max-md:px-1">
        <h2 className="font-bold text-3xl max-sm:text-xl dark:text-white py-4">Education</h2>
      {Educationlist.map((edu, index) => (
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl" key={index}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{edu.institution}</p> 
           <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{edu.years}</p>
          <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Education
