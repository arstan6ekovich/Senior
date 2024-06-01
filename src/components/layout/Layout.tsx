import Footer from "./Footer";
import Header from "./Header";
import scss from "./Layout.module.scss";
import Main from "./Main";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
