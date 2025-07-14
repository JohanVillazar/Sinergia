import React from 'react';
import { motion } from 'framer-motion';

const ModernCard = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 ${hover ? 'hover:scale-105' : ''} transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default ModernCard;