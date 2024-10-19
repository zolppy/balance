import { Variants } from "framer-motion";

const transition = { type: "spring", duration: 0.8 };

const variants: Variants = {
  hidden: { top: "150%", translateY: "-50%", opacity: 0 },
  visible: { top: "50%", translateY: "-50%", opacity: 1 },
};

export { transition, variants };
