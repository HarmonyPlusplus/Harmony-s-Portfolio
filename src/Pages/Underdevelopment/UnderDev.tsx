import { Link } from 'react-router-dom';

const UnderDev = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 dark:text-white text-center p-4">
      <h1 className="text-4xl max-md:text-2xl font-bold mb-4">🚧 Work in Progress 🚧</h1>
      <p className="text-lg text-gray-400 mb-8">
        This project is currently being built. Check back soon!
      </p>
      <Link 
        to="/works" 
        className="px-6 py-3 max-md:px-4 max-md:py-2 bg-indigo-600 rounded-full font-semibold hover:bg-indigo-500 transition text-white"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default UnderDev;