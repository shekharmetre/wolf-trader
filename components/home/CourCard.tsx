import { Badge } from "@/components/ui/badge";
import { Star, Clock, User, Play, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Course } from "@/lib/types";

export function CourseCard({ course,keyid,trending }: { course: Course,keyid:string,trending?:boolean }) {
    const navigation = useRouter()
    return (
        <div key={keyid} className={`flex-shrink-0 md:h-full h-[17rem] md:m-2 ${trending ? "w-[60%]" : "w-full"} md:w-[280px] lg:w-[300px] border-1 rounded-md shadow-lg overflow-hidden bg-white dark:bg-neutral-900 snap-start`}>
            {/* Course Image */}
            <div className="relative w-full md:h-40 h-28" onClick={() => { navigation.push(`courses/${course.id}`) }}>
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
            <div className="md:p-4 px-2 space-y-2 md:py-2 mt-2">
                {/* Title */}
                <h3 className="md:text-lg text-sm font-semibold leading-tight line-clamp-2">
                    {course.title}
                </h3>

                {/* Instructor */}
                <p className="hidden md:block md:text-sm text-xs text-muted-foreground">{course.instructor}</p>

                {/* Badges */}
                <div className="flex md:flex-wrap overflow-auto gap-2 mt-1">
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
                    <div className="md:flex hidden items-center gap-1">
                        <Star size={14} className="text-yellow-500" /> {course.rating}
                    </div>
                    <div className="flex items-center gap-1">
                        <User size={14} /> {course.students}
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline justify-between gap-2 md:mt-2">
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
            </div>
        </div>
    );
}