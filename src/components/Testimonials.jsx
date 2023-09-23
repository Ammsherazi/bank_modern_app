import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import { motion as m } from 'framer-motion'
import { textVariant } from "../utils/motion";

const Testimonials = () => {
  return (
    <section
      id="client"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <m.h1
        variants={textVariant(.25)}
        initial="hidden"
        whileInView="show"
         className={styles.heading2}>
          What people are
          <br className="sm:block hidden" /> saying about us
        </m.h1>
        <div className="w-full md:mt-0 mt-6">
          <m.p
        variants={textVariant(.3)}
        initial="hidden"
        whileInView="show"
         className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments
            <br className="sm:block hidden" /> and grow your business anywhere
            on the planet.
          </m.p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key="card.id" {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
