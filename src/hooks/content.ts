import { ContactDto, LinkDto, PeriodDto, SkillArticleDto } from "@/types";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

// As this is going to be simple static website I decided to keep whole page content in this hook
// to keep the "backend" organization in one place
export const useContent = () => {
  const { t } = useI18n();

  const links = computed((): LinkDto[] => {
    return [
      {
        href: "#about",
        label: t("navigation.about.label"),
        icon: "fa-solid fa-user",
        aria: t("navigation.about.aria"),
      },
      {
        href: "#experience",
        label: t("navigation.experience.label"),
        icon: "fa-solid fa-briefcase",
        aria: t("navigation.experience.aria"),
      },
      {
        href: "#education",
        label: t("navigation.education.label"),
        icon: "fa-solid fa-graduation-cap",
        aria: t("navigation.education.aria"),
      },
      {
        href: "#skills",
        label: t("navigation.skills.label"),
        icon: "fa-solid fa-code",
        aria: t("navigation.skills.aria"),
      },
    ];
  });

  const degrees = computed((): PeriodDto[] => {
    return [
      {
        id: "msc",
        period: t("education.msc.period"),
        heading: t("education.msc.university"),
        note: t("education.msc.faculty"),
        subheading: t("education.msc.field"),
        description: t("education.msc.thesis"),
        technologies: ["Python", "Keras", "Scikit-learn"],
      },
      {
        id: "bsc",
        period: t("education.bsc.period"),
        heading: t("education.bsc.university"),
        note: t("education.bsc.faculty"),
        subheading: t("education.bsc.field"),
        description: t("education.bsc.thesis"),
        technologies: [
          "Angular",
          "TypeScript",
          "Sass",
          "C#",
          "Entity Framework",
          ".NET Core",
          "MSSQL",
          "Git",
        ],
      },
    ];
  });

  const jobs = computed((): PeriodDto[] => {
    return [
      {
        id: "synergy",
        period: t("experience.synergy.period"),
        heading: t("experience.synergy.company"),
        note: t("experience.synergy.span"),
        subheading: t("experience.synergy.position"),
        description: t("experience.synergy.description"),
        technologies: [
          "Angular",
          "TypeScript",
          "Git",
          "CSS",
          "HTML",
          "Sass",
          "C#",
          ".NET Core",
          "SQL",
          "Storybook",
          "Windows",
        ],
      },
      {
        id: "linkfactory",
        period: t("experience.linkfactory.period"),
        heading: t("experience.linkfactory.company"),
        note: t("experience.linkfactory.span"),
        subheading: t("experience.linkfactory.position"),
        description: t("experience.linkfactory.description"),
        technologies: [
          "Angular",
          "TypeScript",
          "Git",
          "CSS",
          "HTML",
          "Sass",
          "Vue",
          "JavaScript",
          "React",
          "Linux",
          "Jira",
        ],
      },
      {
        id: "comarch",
        period: t("experience.comarch.period"),
        heading: t("experience.comarch.company"),
        note: t("experience.comarch.span"),
        subheading: t("experience.comarch.position"),
        description: t("experience.comarch.description"),
        technologies: [
          "JavaScript",
          "Node.js",
          "Git",
          "Microsoft Bot Framework",
          "Angular",
          "TypeScript",
          "Windows",
          "Jira",
        ],
      },
    ];
  });

  const contacts = computed((): ContactDto[] => {
    return [
      {
        id: "email",
        icon: "fa-solid fa-envelope",
        url: t("contact.email.url"),
        label: t("contact.email.label"),
        aria: t("contact.email.aria"),
      },
      {
        id: "linkedin",
        icon: "fa-brands fa-linkedin",
        url: t("contact.linkedin.url"),
        label: t("contact.linkedin.label"),
        aria: t("contact.linkedin.aria"),
      },
      {
        id: "github",
        icon: "fa-brands fa-github",
        url: t("contact.github.url"),
        label: t("contact.github.label"),
        aria: t("contact.github.aria"),
      },
    ];
  });

  const articles = computed((): SkillArticleDto[] => {
    return [
      {
        heading: t("skills.frontend.header"),
        subarticles: [
          {
            subheading: t("skills.frontend.frameworks"),
            skills: [
              {
                name: "Angular",
                icon: "fa-brands fa-angular",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
              {
                name: "Vue",
                icon: "fa-brands fa-vuejs",
                progress: 25,
                experience: t("skills.period.year", { number: "1+" }),
              },
              {
                name: "React",
                icon: "fa-brands fa-react",
                progress: 6.25,
                experience: t("skills.period.months-alt", { number: "3" }),
              },
            ],
          },
          {
            subheading: t("skills.frontend.basics"),
            skills: [
              {
                name: "JavaScript / TypeScript",
                icon: "fa-brands fa-js",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
              {
                name: "HTML",
                icon: "fa-brands fa-html5",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
              {
                name: "CSS",
                icon: "fa-brands fa-css3-alt",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
              {
                name: "Sass",
                icon: "fa-brands fa-sass",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
            ],
          },
          {
            subheading: t("skills.frontend.tools"),
            skills: [
              {
                name: "Npm",
                icon: "fa-brands fa-npm",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
              {
                name: "Yarn",
                icon: "fa-brands fa-yarn",
                progress: 75,
                experience: t("skills.period.years", { number: "3+" }),
              },
              {
                name: "Storybook",
                icon: "fa-solid fa-code",
                progress: 12.5,
                experience: t("skills.period.months", { number: "6+" }),
              },
            ],
          },
        ],
      },
      {
        heading: t("skills.other.header"),
        subarticles: [
          {
            subheading: t("skills.other.backend"),
            skills: [
              {
                name: "C#",
                icon: "fa-solid fa-code",
                progress: 12.5,
                experience: t("skills.period.months", { number: "6+" }),
              },
              {
                name: ".NET Core",
                icon: "fa-solid fa-code",
                progress: 12.5,
                experience: t("skills.period.months", { number: "6+" }),
              },
              {
                name: "Entity Framework",
                icon: "fa-solid fa-code",
                progress: 12.5,
                experience: t("skills.period.months", { number: "6+" }),
              },
              {
                name: "SQL / T-SQL",
                icon: "fa-solid fa-database",
                progress: 12.5,
                experience: t("skills.period.months", { number: "6+" }),
              },
              {
                name: "Node.js / Express.js",
                icon: "fa-brands fa-node-js",
                progress: 0,
                experience: "",
              },
            ],
          },
          {
            subheading: t("skills.other.tools"),
            skills: [
              {
                name: "Git",
                icon: "fa-brands fa-git-alt",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
              {
                name: "Jira",
                icon: "fa-brands fa-jira",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
              {
                name: "VS Code",
                icon: "fa-solid fa-code",
                progress: 100,
                experience: t("skills.period.years", { number: "4+" }),
              },
              {
                name: "Ubuntu Linux",
                icon: "fa-brands fa-ubuntu",
                progress: 50,
                experience: t("skills.period.years", { number: "2+" }),
              },
              {
                name: "Jenkins",
                icon: "fa-brands fa-jenkins",
                progress: 1.25,
                experience: t("skills.period.month", { number: "<1" }),
              },
            ],
          },
          {
            subheading: t("skills.other.hobby"),
            skills: [
              {
                name: "Unity",
                icon: "fa-brands fa-unity",
                progress: 0,
                experience: "",
              },
              {
                name: "Blender 3D",
                icon: "fa-solid fa-cube",
                progress: 0,
                experience: "",
              },
            ],
          },
        ],
      },
    ];
  });

  return { articles, contacts, degrees, jobs, links };
};
