import {IconDownload} from "@tabler/icons-react"

const Button = () => { 
    return (
        <div className="flex justify-center">
            <button className="px-8 py-4 max-md:px-6 max-md:py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full font-semibold whitespace-nowrap cursor-pointer shadow-lg content-center" >
                <IconDownload className="inline mr-2" />
                Download Resume
            </button>
        </div>
    )
}

export default Button