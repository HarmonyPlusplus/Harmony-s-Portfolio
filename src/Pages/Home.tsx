import FeaturedProject from "../components/Home/Components/FeaturedProject/FeaturedProject"
import Header from "../components/Home/Components/Header"
import MySkills from "../components/Home/Components/MySkills/mySkills"
import LetsWork from "../components/Home/Components/LetsWork/LetsWork"

const Home = () => {
  return (
    <div className=" bg-linear-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 scroll-smooth">
      <Header />
      <MySkills />
      <FeaturedProject />
      <LetsWork />
    </div>
  )
}

export default Home
