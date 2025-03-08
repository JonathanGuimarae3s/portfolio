import { Knowledge } from "./knowledge";

export interface Projects {
  src: string,
  alt: string,
  title: string,
  width: string,
  height: string,
  periodo: string,
  description: string,
  tecnologies: string,
  knowledge: Knowledge[],
  links: [
    {
      name: string,
      href: string
    },
    {
      name: string,
      href: string
    },
  ]
}
