import Title from "../components/Title"
import MyResume from "../components/Resume/MyResume"
const Resume = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 py-10 px-4 sm:px-6 lg:px-8 max-sm:px-2">
      <Title title="Resume" subtitle="Frontend Developer with 5+ years of experience crafting exceptional web experiences" />
      <MyResume />
    </div>
  )
}

export default Resume
