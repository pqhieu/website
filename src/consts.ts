import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "P | Q → H",
  EMAIL: "pqhieu1192@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Incoherent thoughts on embodied AI.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "A little bit about myself.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/pqhieu",
  },
  {
    NAME: "scholar",
    HREF: "https://scholar.google.com/citations?user=9aZhKxMAAAAJ&hl=en",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/pqhieu",
  },
];
