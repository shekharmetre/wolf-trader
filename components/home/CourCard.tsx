import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, User, Lock, Play, CarTaxiFront, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Course } from "@/lib/types";

export function CourseCard({ course }: { course: Course }) {
    const navigation = useRouter()
    return (
        <div className="flex-shrink-0 m-2 w-[75%] md:w-[280px] lg:w-[300px] border-1 rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-neutral-900 snap-start">
            {/* Course Image */}
            <div className="relative w-full h-40 " onClick={() => { navigation.push(`courses/${course.id}`) }}>
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                />
                {/* Lock or Play overlay */}
                <div className="absolute bottom-2 right-2 bg-black/70 p-2 rounded-full">
                    <Play size={18} className="text-white" />
                </div>
            </div>

            {/* Content */}
            <CardContent className="md:p-4 space-y-2 py-2 mt-2">
                {/* Title */}
                <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                    {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-muted-foreground">{course.instructor}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {course.isNew && <Badge className="bg-green-500">New</Badge>}
                    {course.isBestseller && (
                        <Badge className="bg-yellow-500">Bestseller</Badge>
                    )}
                    <Badge variant="outline">{course.level}</Badge>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                        <Clock size={14} /> {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" /> {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                        <User size={14} /> {course.students}
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline justify-between gap-2 mt-2">
                    <div>
                        <span className="text-lg font-bold">{course.price}</span>
                        {course.originalPrice && (
                            <span className="text-sm line-through text-muted-foreground">
                                {course.originalPrice}
                            </span>
                        )}
                    </div>
                    <Button variant="outline"><ShoppingCart /></Button>
                </div>
            </CardContent>
        </div>
    );
}
