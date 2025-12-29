interface TitleProps {
  title: string;
  subtitle: string;
}
const Title = ({title, subtitle}: TitleProps) => {
  return (
    <div className="text-center mb-16 dark:text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 dark:text-[#9CA3AF] w-full max-w-xl mx-auto">{subtitle}</p>
    </div>
  )
}

export default Title
