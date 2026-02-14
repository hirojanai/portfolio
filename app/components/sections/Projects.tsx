import GithubIcon from "../icons/socials/GithubIcon";
import Button from "../Button";
import SectionHeading from "../SectionHeading";
import Text from "../Text";

interface Project {
  title: string;
  description: string;
  projectUrl: string;
  gitHubUrl: string;
}

const PERSONAL_PROJECTS: Project[] = [
  {
    title: "Portfolio",
    description:
      "A self-built portfolio to showcase my work as a software engineer. It highlights my skills, projects, and provides contact details for potential collaborations or inquiries.",
    projectUrl: "https://hirojanai.dev",
    gitHubUrl: "https://github.com/hirojanai/portfolio",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-[50vh] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
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
                const isExternal = project?.projectUrl?.startsWith("http");
                return (
                  <li key={project?.title}>
                    <article className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-6 transition-colors hover:border-slate-600/60 sm:p-8">
                      <h3 className="text-lg font-medium text-slate-200 sm:text-xl">
                        {project?.title}
                      </h3>
                      <Text variant="caption" className="mt-2" maxWidth={false}>
                        {project?.description}
                      </Text>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <Button
                          as="a"
                          href={project?.projectUrl}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          aria-label={`View project: ${project?.title}`}
                          variant="secondary"
                          className="w-full justify-center py-3 sm:w-auto sm:py-2.5"
                        >
                          View project
                        </Button>
                        <Button
                          as="a"
                          href={project?.gitHubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View on GitHub: ${project?.title}`}
                          variant="secondary"
                          className="w-full justify-center py-3 sm:w-auto sm:py-2.5"
                          leftIcon={
                            <GithubIcon
                              width="18"
                              height="18"
                              className="text-slate-400"
                            />
                          }
                        >
                          View on GitHub
                        </Button>
                      </div>
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
