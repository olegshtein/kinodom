import { nanoid } from "nanoid";

export const footerLinksGridContent = {
  cells: [
    {
      key: nanoid(),
      mod: "menu",
      label: "Меню",
      links: [
        { key: nanoid(), href: "", anchor: "Фильмы" },
        { key: nanoid(), href: "", anchor: "Сериалы" },
        { key: nanoid(), href: "", anchor: "Подборки" },
      ],
    },
    {
      key: nanoid(),
      mod: "moviesAndSeries",
      label: "Кино и сериалы",
      links: [
        { key: nanoid(), href: "", anchor: "Весь каталог" },
        { key: nanoid(), href: "", anchor: "Комедии" },
        { key: nanoid(), href: "", anchor: "Драмы" },
        { key: nanoid(), href: "", anchor: "Фэнтези" },
        { key: nanoid(), href: "", anchor: "Триллеры" },
        { key: nanoid(), href: "", anchor: "Детективы" },
      ],
    },
    {
      key: nanoid(),
      mod: "cooperation",
      label: "Сотруднечество",
      links: [
        { key: nanoid(), href: "", anchor: "Размещение рекламы" },
        { key: nanoid(), href: "", anchor: "Партнерам" },
        { key: nanoid(), href: "", anchor: "Партнерская программы" },
        { key: nanoid(), href: "", anchor: "Пользовательское соглашение" },
        { key: nanoid(), href: "", anchor: "Политика конфиденциальности" },
      ],
    },
    {
      key: nanoid(),
      mod: "support",
      label: "Техническая поддержка",
      links: [
        { key: nanoid(), href: "", anchor: "8 800 800 80 80" },
        { key: nanoid(), href: "", anchor: "support@main.ru" },
      ],
    },
    {
      key: nanoid(),
      mod: "subscribe",
      label: "Подписывайтесь на нас",
      links: [
        { key: nanoid(), href: "", anchor: "facebook" },
        { key: nanoid(), href: "", anchor: "vk" },
        { key: nanoid(), href: "", anchor: "instagram" },
      ],
    },
  ],
};
