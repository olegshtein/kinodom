import { nanoid } from "nanoid";

export const navigationMenuItems = [
  { key: nanoid(), href: "/movies", anchor: "Фильмы" },
  { key: nanoid(), href: "/series", anchor: "Сериалы" },
  { key: nanoid(), href: "/selections", anchor: "Подборки" },
];
