import Button from './components/Button'
import Education from './components/Education'
import Experience from './components/Experience'
import SkillsTechnologies from './components/SkillsTechnologies'

const Resume = () => {
  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <Button />
      <Experience/>
      <Education/>
      <SkillsTechnologies/>
    </div>
  )
}

export default Resume
