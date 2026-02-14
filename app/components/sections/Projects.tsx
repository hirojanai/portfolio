import SectionHeading from "../SectionHeading";
import Text from "../Text";

interface Project {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
}

const CONTRIBUTION_PROJECTS: Project[] = [
  {
    title: "STUDIO",
    description:
      "Trusted by leading Amazon brands, this advanced Business Intelligence solution enhances product management, advertising, and analytics to drive e-commerce growth and efficiency.",
    href: "https://studio.witailer.com/en",
    linkLabel: "View project →",
  },
  {
    title: "SC-Project Shop",
    description:
      "Multi-language, multi-country e-commerce platform for SC-Project, a leading brand in high-performance motorcycle exhaust systems, catering to a global customer base.",
    href: "https://shop.sc-project.com/en",
    linkLabel: "View project →",
  },
  {
    title: "Gioia 55",
    description:
      "A cutting-edge booking platform powered by advanced software engineering, offering smart home apartments with integrated command suites. Guests can easily control various aspects of their apartment through a seamless interface, all while enjoying a multilingual experience designed for global travelers. It's where technology meets convenience for the modern stay.",
    href: "https://www.gioia55.com/en",
    linkLabel: "View project →",
  },
];

const PERSONAL_PROJECTS: Project[] = [];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
      aria-label="Projects"
      tabIndex={-1}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 md:gap-10">
        <SectionHeading>Projects</SectionHeading>

        <div>
          <Text as="h3" variant="intro" className="mb-2.5 sm:mb-3">
            Contributions
          </Text>
          <ul className="flex flex-col gap-8 sm:gap-10" role="list">
            {CONTRIBUTION_PROJECTS.map((project) => {
              const isExternal = project.href.startsWith("http");
              return (
                <li key={project.title}>
                  <article className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-6 transition-colors hover:border-slate-600/60 sm:p-8">
                    <h3 className="text-lg font-medium text-slate-200 sm:text-xl">
                      {project.title}
                    </h3>
                    <Text variant="caption" className="mt-2" maxWidth={false}>
                      {project.description}
                    </Text>
                    <a
                      href={project.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={`View project: ${project.title}`}
                      className="mt-4 inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    >
                      {project.linkLabel ?? "View project →"}
                    </a>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <Text as="h3" variant="intro" className="mb-2.5 sm:mb-3">
            Personal
          </Text>
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
            <ul className="flex flex-col gap-8 sm:gap-10" role="list">
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
