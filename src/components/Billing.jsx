
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion as m } from "framer-motion";
import { fadeIn, textVariant, textVariant2 } from "../utils/motion";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <m.div
    variants={fadeIn('right',"ease-in-out",.2,1)}
    initial="hidden"
    whileInView="show"
     className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink __gradient" />{" "}
    </m.div>
    <div className={layout.sectionInfo}>
      <m.h2 
      variants={textVariant2}
      initial="hidden"
    whileInView="show"
      className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </m.h2>
      <m.p 
      variants={textVariant2}
      initial="hidden"
    whileInView="show"
    className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </m.p>
      <div className="flex flex-wrap flex-row sm:mt-10 mt-6">
        <m.img
        variants={textVariant(.3)}
      initial="hidden"
    whileInView="show"
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />{" "}
        <m.img
       variants={textVariant(.5)}
      initial="hidden"
    whileInView="show"
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
