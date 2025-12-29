import { motion } from "motion/react";

export const NinetyFive = () => {
  return (
    <motion.div
      className="h-2 rounded-xl bg-linear-to-r from-white via-white-600 to-purple-800 w-[95%]"
      style={{
        backgroundSize: "300% 100%",
      }}
      initial={{ backgroundPosition: "0% 0%" }}
      whileInView={{ backgroundPosition: "100% 0%" }} 
      viewport={{ once: true }} 
      transition={{
        duration: 2.5,
        ease: "easeOut",
      }}
    />
  );
};


export const Ninety = () => {
  return (
    <motion.div className="h-2 rounded-xl bg-linear-to-r from-white via-white-600 to-purple-800 w-[90%]"
      style={{
        backgroundSize: "300% 100%",
      }}
      initial={{ backgroundPosition: "0% 0%" }}
      whileInView={{ backgroundPosition: "100% 0%" }} 
      viewport={{ once: true }} 
      transition={{
        duration: 2.5,
        ease: "easeOut",
      }}
    />
  );
}

export const NinetyTwo = () => {
  return (
    <motion.div className="h-2 rounded-xl bg-linear-to-r from-white via-white-600 to-purple-800 w-[92%]"
      style={{
        backgroundSize: "300% 100%",
      }}
      initial={{ backgroundPosition: "0% 0%" }}
      whileInView={{ backgroundPosition: "100% 0%" }} 
      viewport={{ once: true }} 
      transition={{
        duration: 2.5,
        ease: "easeOut",
      }}
    />
  );
}


export const EightyEight = () => {
  return (
    <motion.div className="h-2 rounded-xl bg-linear-to-r from-white via-white-600 to-purple-800 w-[88%]"
      style={{
        backgroundSize: "300% 100%",
      }}
      initial={{ backgroundPosition: "0% 0%" }}
      whileInView={{ backgroundPosition: "100% 0%" }} 
      viewport={{ once: true }} 
      transition={{
        duration: 2.5,
        ease: "easeOut",
      }}
    />
  );
}

export const EightyFive = () => {
  return (
    <motion.div className="h-2 rounded-xl bg-linear-to-r from-white via-white-600 to-purple-800 w-[85%]"
      style={{
        backgroundSize: "300% 100%",
      }}
      initial={{ backgroundPosition: "0% 0%" }}
      whileInView={{ backgroundPosition: "100% 0%" }} 
      viewport={{ once: true }} 
      transition={{
        duration: 2.5,
        ease: "easeOut",
      }}
    />
  );
}

export const EightySeven = () => {
  return (
    <motion.div className="h-2 rounded-xl bg-linear-to-r from-white via-white-600 to-purple-800 w-[87%]"
      style={{
        backgroundSize: "300% 100%",
      }}
      initial={{ backgroundPosition: "0% 0%" }}
      whileInView={{ backgroundPosition: "100% 0%" }} 
      viewport={{ once: true }} 
      transition={{
        duration: 2.5,
        ease: "easeOut",
      }}
    />
  );
}
