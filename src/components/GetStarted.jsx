import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";
const GetStarted = () => {
  return (
    <motion.div
        style={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    backgroundColor: "transparent",
                }}
                whileHover={{ scale: 0.8 }}
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="h-[23px] w-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </motion.div>
  );
};

export default GetStarted;
