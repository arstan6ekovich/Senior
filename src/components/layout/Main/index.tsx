import scss from "./Main.module.scss";
import vector from "../../image/Vector 1.png";
import tell from "../../image/image 7 (2).png";
import komp from "../../image/image 6.png";
import url from "../../image/Subtract.png";
import block1 from "../../image/accessibility-outline 1.png";
import block2 from "../../image/Vector.png";
import block3 from "../../image/cash-outline 1.png";
import block4 from "../../image/receipt-outline 1.png";
import url1 from "../../image/Frame 42.png";
import url2 from "../../image/Subtract.png";
import url3 from "../../image/image 14.png";
import url9 from "../../image/Group 429.png";
import url20 from "../../image/Mask Group.png";
import url21 from "../../image/Rectangle 5.png";

import url01 from "../../image/Ellipse 4.png";
import url02 from "../../image/Ellipse 4 (1).png";
import url03 from "../../image/Ellipse 4 (2).png";
import url04 from "../../image/Ellipse 4 (2).png";
import url05 from "../../image/Ellipse 4 (3).png";
import png from "../../image/Subtract.png";


const Main = () => {
  return (
    <div className={scss.main}>
      <img className={scss.mom} src={vector} alt="" />
      <div className={scss.content}>
        <div className={scss.nav}>
          <h1>
            Get Your <br />
            Payment Faster
          </h1>
          <p>
            Blinqpay helps businesses in Africa get paid by anyone, anywhere the
            world
          </p>
        </div>
        <div className={scss.buttons}>
          <button>Start Now</button>
        </div>
        <div className={scss.images}>
          <img src={komp} alt="" />
          <img src={tell} alt="" />
        </div>
        <section className={scss.section1}>
          <img className={scss.url10} src={url} alt="" />
          <h1>Make & Share Payment With Community</h1>
          <p>
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <h3>Learn more 🔜</h3>
        </section>
        <section className={scss.section2}>
          <div className={scss.block}>
            <div className={scss.block1}>
              <img src={block1} alt="" />
              <h4>Easy Access</h4>
              <p>Now track all of your transaction easily.</p>
            </div>
            <div className={scss.block2}>
              <img src={block2} alt="" />
              <h4>Easy Access</h4>
              <p>Now track all of your transaction easily.</p>
            </div>
          </div>

          <div className={scss.compot}>
            <div className={scss.block3}>
              <img src={block3} alt="" />
              <h4>Easy Access</h4>
              <p>Now track all of your transaction easily.</p>
            </div>
            <div className={scss.block4}>
              <img src={block4} alt="" />
              <h4>Easy Access</h4>
              <p>Now track all of your transaction easily.</p>
            </div>
          </div>
        </section>
        <img className={scss.imges} src={url1} alt="" />
        <div className={scss.bg}></div>
        <section className={scss.section3}>
          <img className={scss.url3} src={url2} alt="" />
          <h3>CREDIT CARD</h3>
          <h1>
            Payment <br /> Gets Easier
          </h1>
          <p>
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <h2>Learn more ➡️</h2>
        </section>
        <img className={scss.url4} src={url3} alt="" />
        <section className={scss.section4}>
          <img className={scss.url3} src={url2} alt="" />
          <h3>CREDIT CARD</h3>
          <h1>
            Payment <br /> Gets Easier
          </h1>
          <p>
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <h2>Learn more ➡️</h2>
        </section>

        <section className={scss.section5}>
          <img className={scss.url3} src={url2} alt="" />
          <h3>MOBILE TRANSACTION</h3>
          <h1>
            Smart Mobile <br /> Banking
          </h1>
          <p>
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <h2>Learn more ➡️</h2>
        </section>

        <img className={scss.url9} src={url9} alt="" />

        <section className={scss.section6}>
          <img className={scss.url3} src={url2} alt="" />
          <h3>SECURE TRANSACTION</h3>
          <h1>
            Safe Yours <br /> Savings
          </h1>
          <p>
            Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
            adipiscing inw
          </p>
          <h2>Learn more ➡️</h2>
        </section>

        <img className={scss.url20} src={url20} alt="" />

        <section className={scss.section7}>
          <img className={scss.url21} src={url21} alt="" />
          <div className={scss.text}>
            <img src={png} alt="" />
            <h1>
              What Our Customer <br /> Are saying
            </h1>
            <p>
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
              lacus a, interdum nulla sem adipiscing inw
            </p>
          </div>
          <div className={scss.contact}>
            <img className={scss.url01} src={url01} alt="" />
            <img className={scss.url02} src={url02} alt="" />
            <img className={scss.url03} src={url03} alt="" />
            <img className={scss.url04} src={url04} alt="" />
            <img className={scss.url05} src={url05} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
