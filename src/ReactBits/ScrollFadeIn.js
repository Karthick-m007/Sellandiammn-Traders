import { motion } from 'framer-motion';
import React from 'react'


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3, // delay between each child animation
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

function CategoriesMotionWrapper({ children }) {
    return (
        <motion.div
            className="md:flex md:flex-wrap md:mx-16 animate-fadeInUp"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {children &&
                // Wrap each child div with motion.div applying itemVariants
                React.Children.map(children, (child) => (
                    <motion.div
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {child}
                    </motion.div>
                ))}
        </motion.div>
    );
}

export default CategoriesMotionWrapper;




