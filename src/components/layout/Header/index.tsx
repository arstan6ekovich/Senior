import scss from "./Header.module.scss";
import logo from "../../image/Logo (1).png";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";



const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let links = [
    {
      href: "/",
      name: "Products",
    },
    {
      href: "/",
      name: "Developers",
    },
    {
      href: "/",
      name: "Company",
    },
    {
      href: "/",
      name: "Pricing",
    },
  ];

  useEffect(() => {
    const handleRezzise = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleRezzise);

    handleRezzise();

    return () => {
      window.addEventListener("resize", handleRezzise);
    };
  }, [isMobile]);
  
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          {/* {logo} */}
          <div className={scss.logo}>
            <img src={logo} alt="logo" />
          </div>
          {isMobile ? (
            <>
              <button className={scss.btn3} onClick={() => setIsOpen(!isOpen)}>Menu</button>
              <BurgerMenu links={links} isOpen={isOpen}/>
            </>
          ) : (
            <>
              {" "}
              {/* {nav} */}
              <div className={scss.nav}>
                <nav>
                  <ul>
                    {links.map((el, idx) => (
                      <li key={idx}>
                        <a href={el.href}>{el.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/* {buttons} */}
              <div className={scss.button}>
                <button className={scss.btn}>Support</button>
                <button className={scss.btn2}>Sigin in</button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
