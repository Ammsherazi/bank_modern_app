import { clients } from "../constants";
import styles from "../style";
import {motion as m } from 'framer-motion';
import { textVariant } from "../utils/motion";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}
        >
          <m.img
          
        variants={textVariant(client.index*.25)}
        initial="hidden"
        whileInView="show"
        
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
