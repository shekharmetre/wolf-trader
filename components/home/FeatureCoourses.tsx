import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import CourseCard from "./CoursesCard";
import { allCourses } from "@/lib/data";

interface FeaturedCoursesProps {
  title?: string;
  variant?: "default" | "horizontal";
}

const FeaturedCourses = ({ title = "Featured Courses", variant = "default" }: FeaturedCoursesProps) => {
  const isHorizontal = variant === "horizontal";
  const router = useRouter();

  const handleCourseClick = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Most Popular
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked courses from industry experts to accelerate your trading journey
          </p>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`
            ${isHorizontal
              ? "flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            }
          `}
        >
          {allCourses.slice(0, 6).map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={isHorizontal ? "min-w-[320px] snap-center" : ""}
            >
              <CourseCard
                course={course}
                onClick={handleCourseClick}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="premium" size="lg" className="group gap-2">
            View All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses