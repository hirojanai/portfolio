import SectionHeading from "../SectionHeading";
import Text from "../Text";

interface Project {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
}

const PERSONAL_PROJECTS: Project[] = [];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-fit px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
      aria-label="Projects"
      tabIndex={-1}
    >
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-10 md:gap-12">
        <div>
          <SectionHeading>Projects</SectionHeading>
          {!PERSONAL_PROJECTS?.length ? (
            <div className="rounded-lg border border-slate-700/50 bg-slate-800/30 px-6 py-8 sm:px-8">
              <Text
                variant="caption"
                className="text-slate-500"
                maxWidth={false}
              >
                Work in progress
              </Text>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-y-5" role="list">
              {PERSONAL_PROJECTS.map((project) => {
                const isExternal = project?.href?.startsWith("http");
                return (
                  <li key={project?.title}>
                    <article className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-6 transition-colors hover:border-slate-600/60 sm:p-8">
                      <h3 className="text-lg font-medium text-slate-200 sm:text-xl">
                        {project?.title}
                      </h3>
                      <Text variant="caption" className="mt-2" maxWidth={false}>
                        {project?.description}
                      </Text>
                      <a
                        href={project?.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        aria-label={`View project: ${project?.title}`}
                        className="mt-4 inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                      >
                        {project?.linkLabel ?? "View project →"}
                      </a>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
