import { Fade } from "react-awesome-reveal";
import { FaGithub, FaPlayCircle } from "react-icons/fa";
import categorizedProjects from "../data/projects.json";

export default function Projects() {
  return (
    <section className="p-6 max-w-screen-xl mx-auto pt-20">
      <h2 className="text-2xl font-semibold mb-8 text-center">My Projects</h2>

      {Object.entries(categorizedProjects).map(([category, projects], index) => (
        <div key={category} className="mb-16 w-full">
          {/* Category Heading with Inline Separator */}
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap">
              ⬩ {category}
            </h3>
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 justify-items-center">
            {projects.map((project, idx) => (
              <Fade key={project.title} triggerOnce delay={idx * 30}>
                <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.04] w-full max-w-lg flex flex-col p-6">
                  
                  {/* Row: Image + Title + Date */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 flex-shrink-0 transform transition-transform duration-300 group-hover:rotate-3">
                      <img
                        src={require(`../assets/projects/${project.image}`)}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {project.date}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <p className="text-xs sm:text-sm text-gray-500 pb-3 pt-8">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-center gap-6 text-sm mt-auto flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex items-center gap-1"
                      >
                        <FaPlayCircle className="text-blue-500" />
                        Try
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:underline flex items-center gap-1"
                      >
                        <FaGithub className="text-gray-500" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
