
import { motion as m } from "framer-motion";
import styles from "../style";
import Button from "./Button";
import { slideIn, textVariant, zoomIn } from "../utils/motion";

const CTA = () => (
  <m.section
  variants={slideIn('left','tween',0.2,1)}
  initial="hidden"
  whileInView="show"
   
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div 
      className="flex-1 flex flex-col">
      <m.h2
      variants={textVariant(0.6)}
      initial="hidden"
      whileInView="show"
       className={`${styles.heading2}`}>Let’s try our service now!</m.h2>
      <m.p 
      variants={textVariant(0.7)}
      initial="hidden"
      whileInView="show"
      className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </m.p>
    </div>
    <m.div
    variants={zoomIn(.8,1)}
      initial="hidden"
      whileInView="show"
         className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </m.div>
  </m.section>
);

export default CTA;
