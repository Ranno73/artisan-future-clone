import { motion } from "framer-motion";

interface FloatingChipProps {
  color?: "cyan" | "purple" | "pink" | "magenta";
  duration?: number;
  delay?: number;
  className?: string;
}

const FloatingChip = ({ 
  color = "cyan", 
  duration = 3, 
  delay = 0,
  className = "" 
}: FloatingChipProps) => {
  const colorMap = {
    cyan: "hsl(var(--cyan))",
    purple: "hsl(var(--purple))",
    pink: "hsl(var(--pink))",
    magenta: "hsl(var(--magenta))"
  };

  return (
    <motion.div
      className={`absolute w-12 h-12 rounded-lg ${className}`}
      style={{
        border: `1px solid ${colorMap[color]}`,
        boxShadow: `0 0 20px ${colorMap[color]}40`,
        background: "transparent",
      }}
      animate={{
        y: [0, -8, 0],
        x: [0, 3, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default FloatingChip;
