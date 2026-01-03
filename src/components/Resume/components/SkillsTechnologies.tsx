import { Skillslist } from './ResumeContent'

const SkillsTechnologies = () => {
    return (
        <div className="mt-10 mx-auto max-md:px-1">
            <h2 className="font-bold text-3xl max-sm:text-xl dark:text-white py-4 ml-1">Skills & Technologies</h2>
            <div className='grid md:grid-cols-2 gap-6'>
                {Skillslist.map((skill, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl  shadow-xs mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.skills}</h3>
                        <div className='flex flex-wrap gap-2'>
                            {skill.skillsset.map((item, i) => (
                                <span key={i} className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                    {item}
                                </span>
                            ))}

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SkillsTechnologies
