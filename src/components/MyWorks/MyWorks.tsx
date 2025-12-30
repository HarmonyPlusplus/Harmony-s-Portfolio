import { useState } from "react";
import { Projects } from "./Components/MyWorkList";
import { Link } from 'react-router-dom'

const PortfolioFilter = () => {
  const tabs = ["All", "Web", "App", "Others"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? Projects
      : Projects.filter((item) => item.category === activeTab);

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-sm:px-2">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6 justify-self-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-2xl text-sm font-md cursor-pointer transition
              ${activeTab === tab
                ? "bg-[#6366f1] text-white"
                : "bg-[#1f2937] text-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            {/* Image Container */}
            <div className="relative aspect-4/3 overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img
                src={project.images}
                alt={project.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 sm:group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-100 sm:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 pointer-events-auto xl:pointer-events-none xl:group-hover:pointer-events-auto z-10"
              >
                <Link
                  to={project.projectUrl}
                  className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold whitespace-nowrap"
                >
                  View Project
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                {project.stack.map((item, index) => (
                  <span
                    key={index}
                    className="
                bg-indigo-100 text-indigo-600
                dark:bg-indigo-900 dark:text-indigo-400
                px-2 py-0.5 rounded-3xl
              "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilter;
