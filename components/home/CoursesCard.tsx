import { motion } from "framer-motion";
import { Play, Clock, User, Star, BookOpen, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Course } from "@/lib/types";


interface CourseCardProps {
  course: Course;
  variant?: "default" | "horizontal" | "compact";
  className?: string;
  onClick?: (courseId: string) => void;
}

const CourseCard = ({ course, variant = "default", onClick, className = "" }: CourseCardProps) => {
  const isHorizontal = variant === "horizontal";
  const isCompact = variant === "compact";
  const navigation = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`group bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 border border-border/50 hover:border-primary/30 ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={() => onClick ? onClick(course.id) : navigation.push(`courses/${course?.id}`)}
    >
      <div className={`${isHorizontal ? "flex" : ""}`}>
        {/* Course Image */}
        <div className={`relative overflow-hidden ${isHorizontal ? "w-48 flex-shrink-0" : "aspect-video"}`}>

          <img


            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />


          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
              <Play className="w-5 h-5 ml-0.5" />
            </Button>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {course.isNew && (
              <Badge variant="destructive">
                New
              </Badge>
            )}
            {course.isBestseller && (
              <Badge variant="secondary">
                <Star className="w-3 h-3 mr-1" />
                Bestseller
              </Badge>
            )}
          </div>

          {/* Duration */}
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {course.duration}
          </div>
        </div>

        {/* Course Content */}
        <div className="p-4 flex-1">
          {/* Category & Level */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
              {course.category}
            </span>
            <span className={`text-xs px-2 py-1 rounded ${course.level === "Beginner" ? "bg-success/10 text-success" :
              course.level === "Intermediate" ? "bg-warning/10 text-warning" :
                "bg-destructive/10 text-destructive"
              }`}>
              {course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2 ${isCompact ? "text-sm" : "text-base"
            }`}>
            {course.title}
          </h3>

          {/* Instructor */}
          <div className="flex items-center gap-1 mt-2 mb-3">
            <User className="w-3 h-3 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{course.instructor}</span>
          </div>

          {/* Description - Only for default variant */}
          {variant === "default" && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {course.description}
            </p>
          )}

          {/* Stats */}
          <div className={`flex items-center gap-4 mb-3 ${isCompact ? "text-xs" : "text-sm"}`}>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-warning fill-current" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">{course.chapters} chapters</span>
            </div>
            <div className="text-muted-foreground">{course.students} students</div>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">{course.price}</span>
              {course.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
              )}
            </div>

            {course.hasFreeTrial ? (
              <Button variant="default" size="sm">
                <Play className="w-3 h-3 mr-1" />
                Try Free
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="group">
                <Lock className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                Buy Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard