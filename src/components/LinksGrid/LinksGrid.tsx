import { footerLinksGridContent } from "@/config/footerLinksGrid";
import styles from "./LinksGrid.module.css";

export const LinksGrid = () => {
  return (
    <div className={styles.linksGrid}>
      {footerLinksGridContent.cells.map(({ key, mod, label, links }) => (
        <div className={`${styles.cell} ${styles[mod]}`} key={key}>
          <div className={styles.label}>{label}</div>
          <ul className={styles.linksList}>
            {links.map((link) => {
              const mod = "mod" in link ? link.mod : "";
              const { key, href, anchor } = link;

              return (
                <li className={styles.linksListItem} key={key}>
                  <a
                    className={`${styles.link} ${styles[mod] ? styles[mod] : ""}`}
                    href={href}
                    target="_blank"
                  >
                    {anchor}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};
