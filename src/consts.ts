import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Pham Quang Hieu",
  EMAIL: "pqhieu1192@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About me.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/pqhieu",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/pqhieu",
  },
];
