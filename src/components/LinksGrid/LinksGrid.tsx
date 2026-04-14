import { footerLinksGridContent } from "@/config/footerLinksGrid";
import styles from "./LinksGrid.module.css";

export const LinksGrid = () => {
  return (
    <div className={styles.linksGrid}>
      {footerLinksGridContent.cells.map(({ label, links }) => (
        <div className={styles.cell}>
          <div className={styles.label}>{label}</div>
          <ul className={styles.linksList}>
            {links.map(({ href, anchor }) => (
              <li>
                <a href={href}>{anchor}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
