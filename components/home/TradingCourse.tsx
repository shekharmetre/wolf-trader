"use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
// import { Star, Users, Clock, BookOpen } from "lucide-react";
import { CourseCard } from "./CourCard";
import { CoursesTitle } from "./CourseTitle";

const tradingCourses = [
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description:
            "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide.",
    },
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description:
            "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide.",
    },
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description:
            "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide.",
    },
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description:
            "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide.",
    },
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description:
            "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide.",
    },
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description:
            "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide.",
    },
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description:
            "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide.",
    },
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description:
            "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide.",
    },

];

export default function TradingCourseCarousel() {
    return (
        <div className="w-full px-2 md:px-8 lg:max-w-7xl mx-auto">
            <CoursesTitle
                title="Trending Courses"
                subtitle="Explore our curated collection of top-rated trading courses, designed to help you grow from beginner to pro."
            />
            <motion.div
                className="flex md:gap-6 gap-1 py-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                whileTap={{ cursor: "grabbing" }}
            >
                {tradingCourses.map((course,index) => (
                    <CourseCard trending={true} course={course} key={course.id+index} keyid={course.id+index} />
                ))}
            </motion.div>

        </div>

    );
}
