import { DISHES } from "../constants";
import DishCard from "./DishCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animation for each card
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Dishes = () => {
  return (
    <>
      <section className="container mx-auto py-16 px-4 lg:px-16" id="dishes">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
          Our Dishes
        </h2>

        {/* Container animation for the grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {DISHES.map((project, index) => {
            return (
              <motion.div key={index} variants={itemVariants}>
                {/* Pass project as prop to DishCard */}
                <DishCard project={project} />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default Dishes;
