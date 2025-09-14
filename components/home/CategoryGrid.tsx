import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  DollarSign,
  Target,
  Brain,
  BookOpen,
} from "lucide-react";

const categories = [
  {
    id: "technical-analysis",
    name: "Technical Analysis",
    description: "Chart patterns & indicators",
    icon: LineChart,
    count: 45,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "fundamental-analysis",
    name: "Fundamental Analysis",
    description: "Market research & valuation",
    icon: BarChart3,
    count: 32,
    gradient: "from-green-500 to-green-600",
  },
  {
    id: "day-trading",
    name: "Day Trading Strategies with Advanced Rules",
    description: "Intraday strategies",
    icon: TrendingUp,
    count: 28,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: "swing-trading",
    name: "Swing Trading",
    description: "Medium-term strategies",
    icon: PieChart,
    count: 24,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "risk-management",
    name: "Risk Management",
    description: "Portfolio protection",
    icon: Target,
    count: 18,
    gradient: "from-red-500 to-red-600",
  },
  {
    id: "cryptocurrency",
    name: "Cryptocurrency",
    description: "Digital asset trading",
    icon: DollarSign,
    count: 36,
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    id: "psychology",
    name: "Trading Psychology",
    description: "Mental game mastery",
    icon: Brain,
    count: 15,
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    id: "beginner",
    name: "Beginner Basics",
    description: "Start your journey",
    icon: BookOpen,
    count: 22,
    gradient: "from-teal-500 to-teal-600",
  },
];

interface CategoryGridProps {
  onCategorySelect: (categoryId: string) => void;
  variant?: "grid" | "horizontal";
  className?: string;
}

const CategoryGrid = ({
  onCategorySelect,
  variant = "grid",
  className = "",
}: CategoryGridProps) => {
  const isHorizontal = variant === "horizontal";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${isHorizontal
          ? "flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          : "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
          }`}
      >
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategorySelect(category.id)}
              className={`
                group cursor-pointer rounded-xl overflow-hidden 
                shadow-card hover:shadow-premium transition-all duration-300 
                border border-border/50 hover:border-primary/30
                ${isHorizontal ? "min-w-[180px] snap-center" : ""}
              `}
            >
              <div
                className={`bg-gradient-to-br ${category.gradient} p-6 text-white relative overflow-hidden min-h-[220px] flex flex-col md:justify-between`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-white rounded-full" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border border-white rounded-full" />
                </div>

                {/* Icon */}
                <div className="relative z-10 md:mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col justify-between flex-1">
                  {/* Title + Description */}
                  <div>
                    <h3
                      className="text-sm mt-2 md:text-lg font-semibold mb-1 group-hover:text-white/90 transition-colors duration-200 line-clamp-2"
                      title={category.name}
                    >
                      {category.name}
                    </h3>
                    <p
                      className="text-xs md:text-sm text-white/80 mb-3 line-clamp-2"
                      title={category.description}
                    >
                      {category.description}
                    </p>
                  </div>

                  {/* Courses Count (always at bottom) */}
                  <div className="text-xs font-medium bg-white/20 inline-block px-2 py-1 rounded self-start">
                    {category.count} courses
                  </div>
                </div>


                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CategoryGrid;
