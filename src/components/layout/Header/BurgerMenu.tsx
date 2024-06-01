import { FC } from "react";
import scss from "./BurgerMenu.module.scss";

interface LinksType {
  name: string;
  href: string;
}

interface BurgerType {
  links: LinksType[];
  isOpen: boolean;
}

const BurgerMenu: FC<BurgerType> = ({ links, isOpen }) => {
  return (
    <div
      className={
        isOpen ? `${scss.burger_menu} ${scss.active} ` : `${scss.burder_menu}`
      }
    >
      <div className={scss.content}>
        <div className={scss.nav} style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <ul>
            {links.map((el, index) => (
              <li key={index}>
                <a style={{
                  color: "white",
                  
                }} href={el.href}>{el.name}</a>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
