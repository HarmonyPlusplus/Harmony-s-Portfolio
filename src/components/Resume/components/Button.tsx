import { IconDownload } from "@tabler/icons-react"

const Button = () => {
    return (
        <div className="flex justify-center">
            <a href="/harmony-resume.pdf" download>
                <button className="px-8 py-4 max-md:px-6 max-md:py-2 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 text-white rounded-full font-semibold  cursor-pointer shadow-lg items-center flex gap-2" >
                    <IconDownload className="inline" />
                    Download Resume
                </button>

            </a>
        </div>
    )
}

export default Button