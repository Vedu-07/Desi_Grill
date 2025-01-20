import { REVIEW } from "../constants";
import john from "../assets/john.jpg";
import customer1 from "../assets/customer1.jpg"
import customer2 from "../assets/customer2.jpg"
import customer4 from "../assets/customer4.jpeg"
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8, // Delay between child animations
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
}

const Review = () => {
  return (
    <>
      <section className="container mx-auto mb-8 mt-12" id="review">
        {/* Correctly use motion.div with variants */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {/* Apply motion.p for the text with animation */}
          <motion.p
            variants={itemVariants}
            className="mb-16 text-3xl font-light leading-normal text-center tracking-tighter lg:mx-40 lg:text-[3.5rem]"
          >
            {REVIEW.content}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <img
              src={john}
              width={80}
              height={80}
              alt={REVIEW.name}
              className="rounded-full border"
            />
            <div className="tracking-tighter">
              <h6>{REVIEW.name}</h6>
              <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Correctly animate the customer images */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center gap-2 md:flex-row"
        >
          {[customer2, customer1, customer4].map((customer, index) => (
            <motion.img
              variants={itemVariants}
              key={index}
              src={customer}
              alt="customer"
              className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl p-2 object-cover"
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Review;
