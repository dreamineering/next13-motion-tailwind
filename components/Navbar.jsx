"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    intial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01">
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `}
      >
        <img src="/search.svg" />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
