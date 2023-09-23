import { card } from "../assets";
import styles, { layout } from "../style";
import { textVariant, zoomIn } from "../utils/motion";
import Button from "./Button";
import {motion as m} from 'framer-motion'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <m.h2
        variants={textVariant(.25)}
        initial="hidden"
        whileInView="show"
         className={styles.heading2}>
          Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
        </m.h2>
        <m.p
        variants={textVariant(.4)}
        initial="hidden"
        whileInView="show" className={`${styles.paragraph} maxx-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </m.p>
        <m.div
        variants={textVariant(.5)}
        initial="hidden"
        whileInView="show"
        ><Button styles="mt-10" /></m.div>
        
      </div>
      <div className={layout.sectionImg}>
        <m.img 
         variants={zoomIn(.5,1)}
        initial="hidden"
        whileInView="show"
        src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
