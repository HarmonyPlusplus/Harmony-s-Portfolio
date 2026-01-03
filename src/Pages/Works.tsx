import Title from "../components/Title"
import MyWorks from "../components/MyWorks/MyWorks"

const Works = () => {
  return (
    
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 py-10 px-4 sm:px-6 lg:px-8 max-sm:px-2">
      <div className=" mx-auto max-w-7xl">
        <Title title="My Works" subtitle="A collection of projects showcasing my skills in frontend development, design, and Problem Solving" />
      </div>
      <MyWorks/>

    </div>
  )
}

export default Works
