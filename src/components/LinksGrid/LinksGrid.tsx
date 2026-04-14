import { footerLinksGridContent } from "@/config/footerLinksGrid";
import styles from "./LinksGrid.module.css";

export const LinksGrid = () => {
  return (
    <div className={styles.linksGrid}>
      {footerLinksGridContent.cells.map(({ key, mod, label, links }) => (
        <div className={`${styles.cell} ${styles[mod]}`} key={key}>
          <div className={styles.label}>{label}</div>
          <ul className={styles.linksList}>
            {links.map(({ key, href, anchor }) => (
              <li key={key}>
                <a className={styles.link} href={href} target="_blank">
                  {anchor}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
