import GithubIcon from "../icons/socials/GithubIcon";
import GmailIcon from "../icons/socials/GmailIcon";
import LinkedInIcon from "../icons/socials/LinkedInIcon";
import AngularIcon from "../icons/technologies/AngularIcon";
import AzureIcon from "../icons/technologies/AzureIcon";
import DockerIcon from "../icons/technologies/DockerIcon";
import DotNetIcon from "../icons/technologies/DotNetIcon";
import FigmaIcon from "../icons/technologies/FigmaIcon";
import GitIcon from "../icons/technologies/GitIcon";
import JavaIcon from "../icons/technologies/JavaIcon";
import JavaScriptIcon from "../icons/technologies/JavaScriptIcon";
import LaravelIcon from "../icons/technologies/LaravelIcon";
import MicrosoftSqlServerIcon from "../icons/technologies/MicrosoftSqlServerIcon";
import MySqlIcon from "../icons/technologies/MySqlIcon";
import NextJsIcon from "../icons/technologies/NextJsIcon";
import PostgreIcon from "../icons/technologies/PostgreIcon";
import PythonIcon from "../icons/technologies/PythonIcon";
import TypeScriptIcon from "../icons/technologies/TypeScriptIcon";
import VercelIcon from "../icons/technologies/VercelIcon";
import WordPressIcon from "../icons/technologies/WordPressIcon";
import SectionHeading from "../SectionHeading";
import Text from "../Text";
import Tooltip from "../Tooltip";

const mainTechnologies = [
  {
    category: "Design",
    skills: [
      {
        icon: <FigmaIcon width="24" height="24" className="shrink-0" />,
        tooltip: "Figma",
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        icon: <NextJsIcon width="24" height="24" className="shrink-0" />,
        tooltip: "React / Next.js",
      },
      {
        icon: <TypeScriptIcon width="24" height="24" className="shrink-0" />,
        tooltip: "Typescript",
      },
      {
        icon: <JavaScriptIcon width="24" height="24" className="shrink-0" />,
        tooltip: "JavaScript",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        icon: <DotNetIcon width="24" height="24" className="shrink-0" />,
        tooltip: "C# / .NET",
      },
      {
        icon: <PythonIcon width="24" height="24" className="shrink-0" />,
        tooltip: "Python",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        icon: (
          <MicrosoftSqlServerIcon width="24" height="24" className="shrink-0" />
        ),
        tooltip: "Microsoft SQL Server",
      },
      {
        icon: <MySqlIcon width="24" height="24" className="shrink-0" />,
        tooltip: "MySQL",
      },
      {
        icon: <PostgreIcon width="24" height="24" className="shrink-0" />,
        tooltip: "PostgreSQL",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      {
        icon: <GitIcon width="24" height="24" className="shrink-0" />,
        tooltip: "Git",
      },
      {
        icon: <DockerIcon width="24" height="24" className="shrink-0" />,
        tooltip: "Docker",
      },
      {
        icon: <VercelIcon width="24" height="24" className="shrink-0" />,
        tooltip: "Vercel",
      },
      {
        icon: <AzureIcon width="24" height="24" className="shrink-0" />,
        tooltip: "Microsoft Azure",
      },
    ],
  },
];

const otherTechnologies = [
  {
    icon: <AngularIcon width="24" height="24" className="shrink-0" />,
    tooltip: "Angular",
  },
  {
    icon: <JavaIcon width="24" height="24" className="shrink-0" />,
    tooltip: "Java",
  },
  {
    icon: <WordPressIcon width="24" height="24" className="shrink-0" />,
    tooltip: "WordPress",
  },
  {
    icon: <LaravelIcon width="24" height="24" className="shrink-0" />,
    tooltip: "Laravel",
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gjher-shervine-gacos-pahati/",
    label: "LinkedIn",
    tooltip: "LinkedIn",
    icon: <LinkedInIcon width="24" height="24" className="shrink-0" />,
  },
  {
    href: "https://github.com/hirojanai",
    label: "GitHub",
    tooltip: "GitHub",
    icon: (
      <GithubIcon fill="white" width="24" height="24" className="shrink-0" />
    ),
  },
  {
    href: "mailto:gjpahati.work@gmail.com",
    label: "Email",
    tooltip: "Email",
    icon: <GmailIcon width="24" height="24" className="shrink-0" />,
  },
];

const AboutMe: React.FC = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24"
      aria-label="About Me"
      tabIndex={-1}
    >
      <div className="flex flex-col gap-10 md:gap-12">
        <div className="mx-auto w-full max-w-4xl">
          <SectionHeading>About Me</SectionHeading>

          <Text variant="default" className="flex flex-col gap-2">
            <span>
              I'm a results-driven software engineer with a product-first
              mindset and a strong empathy for users.
            </span>

            <span>
              I bridge design and engineering to deliver high-impact features
              efficiently, balancing product ambition with technical clarity.
            </span>

            <span>
              My focus is simple: understand the problem deeply, architect smart
              solutions, and ship fast without compromising quality.
            </span>
          </Text>
        </div>

        <div className="mx-auto w-full max-w-4xl flex flex-col gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-2">
              <SectionHeading>Skills</SectionHeading>
              <Text as="h3" variant="caption" className="mb-2.5 sm:mb-3">
                {`> Core Engineering Stack`}
              </Text>
            </div>

            <div className="grid grid-cols-2 gap-y-5 md:grid-cols-3">
              {mainTechnologies?.map((technology) => (
                <div
                  key={technology?.category}
                  className="last:col-span-2 md:last:col-span-1"
                >
                  <Text as="h3" variant="default" className="mb-2.5 sm:mb-3">
                    {technology?.category}
                  </Text>

                  <ul className="flex flex-wrap gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                    {technology?.skills?.map((skill) => (
                      <li
                        key={skill?.tooltip}
                        className="flex items-center justify-center"
                      >
                        <Tooltip
                          content={skill?.tooltip}
                          className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-600/40 bg-slate-700/25 p-2 transition-[transform,background-color,border-color] duration-150 hover:scale-105 hover:border-slate-500/50 hover:bg-slate-700/55 focus-within:ring-2 focus-within:ring-slate-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
                        >
                          {skill?.icon}
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Text as="h3" variant="default" className="mb-2.5 sm:mb-3">
              Other Technologies I've Worked With
            </Text>

            <ul className="flex flex-wrap gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {otherTechnologies?.map((skill) => (
                <li key={skill?.tooltip}>
                  <Tooltip
                    content={skill?.tooltip}
                    className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-600/40 bg-slate-700/25 p-2 transition-[transform,background-color,border-color] duration-150 hover:scale-105 hover:border-slate-500/50 hover:bg-slate-700/55 focus-within:ring-2 focus-within:ring-slate-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
                  >
                    {skill?.icon}
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading>Let's Connect</SectionHeading>
            <Text variant="default" className="flex flex-col gap-2">
              <span>
                I started with nothing but a strong desire to learn and grow,
                and that drive continues to fuel everything I do.
              </span>

              <span>
                I'm committed to making meaningful progress, always focused on
                creating value and taking things to the next level.
              </span>

              <span>
                If you're working on something exciting or just want to bounce
                around ideas, let's connect and see where it can lead.
              </span>
            </Text>

            <nav
              className="mt-6 flex flex-wrap items-center gap-3"
              aria-label="Social links"
            >
              {socialLinks.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <Tooltip key={link.label} content={link.tooltip}>
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={link.label}
                      className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-600/40 bg-slate-700/25 p-2 transition-[transform,background-color,border-color] duration-150 hover:scale-105 hover:border-slate-500/50 hover:bg-slate-700/55 focus-within:ring-2 focus-within:ring-slate-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
                    >
                      {link.icon}
                    </a>
                  </Tooltip>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;