/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { textVariant, textVariant2, zoomIn } from "../utils/motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <m.div
   variants={zoomIn((index+1)*0.25,1)}
          initial="hidden"
          whileInView="show"
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </m.div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <m.h2 
        variants={textVariant(.3)}
        initial="hidden"
        whileInView="show"
        className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" />
          we’ll handle the money.
        </m.h2>
        <m.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
         className={`${styles.paragraph}  max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </m.p>
        <m.div
        variants={zoomIn(.3,1)}
          initial="hidden"
          whileInView="show"
        ><Button styles="mt-10" /></m.div>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard  key={feature.key} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
