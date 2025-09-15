'use client'
import { use, useState } from "react";
import { Play, Star, Clock, Users, Award, CheckCircle, Target, BookOpen, Shield, Tag, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import { allCourses, chapters } from "@/lib/data";
import { Chapter, Course } from "@/lib/types";
import ChapterCard from "@/components/courses/Chapterard";
import { MobileCheckoutSheet } from "@/components/courses/CoupenSetup";



const learningOutcomes = [
    "Master advanced chart patterns and technical indicators",
    "Develop professional risk management strategies",
    "Learn to identify high-probability trading setups",
    "Understand market psychology and sentiment analysis",
    "Build a complete trading plan from scratch",
    "Analyze multiple timeframes effectively",
    "Use support and resistance levels like a pro",
    "Create your own trading strategy"
];

function getCourseById(id: string): Course | null {
    const course = allCourses.find((c) => c.id === id);
    return course || null;
}

const CourseDetail = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const [manualOpen, setManualOpen] = useState(false);
    // const [expanded, setExpanded] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
    const [activeChapter, setActiveChapter] = useState<number | null>(null);

    const handleChapterClick = (chapter: Chapter) => {
        // toggle description open/close
        setActiveChapter(activeChapter === chapter.id ? null : chapter.id);
    };

    const course = getCourseById(id || "1");

    if (!course) {
        return <div>Course not found</div>;
    }

    // const handleChapterClick = (chapter: Chapter) => {
    //     if (chapter.isFree) {
    //         setActiveChapter(chapter.id);
    //         console.log(`Playing chapter: ${chapter.title}`);
    //     } else {
    //         console.log(`Chapter "${chapter.title}" is locked. Please enroll to access.`);
    //     }
    // };

    const handleApplyCoupon = () => {
        if (couponCode.toLowerCase() === "save20") {
            setAppliedCoupon("SAVE20");
            console.log("Coupon applied: 20% additional discount!");
        } else if (couponCode) {
            console.log("Invalid coupon code");
        }
    };

    return (
        <div className="min-h-screen bg-background ">
            {/* Hero Section */}
            <section className="p-3 flex md:grid md:justify-center md:px-36 md:grid-cols-3  md:flex-row flex-col-reverse">

                <div className="mt-5 md:col-span-2">
                    <div className="flex gap-2 flex-wrap">
                        {!course.isNew && (
                            <Badge variant="secondary">NEW</Badge>
                        )}
                        {!course.isBestseller && (
                            <Badge variant="destructive">BESTSELLER</Badge>
                        )}
                        {!course.hasFreeTrial && (
                            <Badge variant="outline">FREE TRIAL</Badge>
                        )}
                    </div>

                    {/*  */}
                    <h1 className="md:text-4xl mt-5 text-[1.9rem] lg:text-5xl font-bold text-foreground leading-tight">
                        {course.title}
                    </h1>

                    <p className="md:text-xl text-md text-foreground/80 leading-relaxed">
                        {course.description}
                    </p>
                    <div className="flex mt-5 items-center gap-6 text-[16px] text-foreground/70">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 fill-warning text-warning" />
                            <span className="font-medium">14.6</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>{course.duration}</span>
                        </div>
                    </div>
                    <div className="flex mt-5 items-center gap-4">
                        <span className="text-3xl font-bold text-foreground">{course.price}</span>
                        <span className="text-xl text-foreground/50 line-through">{course.originalPrice}</span>
                        <Badge variant="secondary" className="text-success border-success">51% OFF</Badge>
                    </div>
                    <Button variant="secondary" onClick={() => setManualOpen(true)} className=" mt-5 bg-blue-400 sm:w-auto transition-all duration-300 text-lg py-6 px-8">
                        Enroll Now
                    </Button>
                </div>
                <div className="relative w-full shadow-xl">
                    <Image alt="sdf" src={course.image} width={200} height={200} className="w-full  h-48 md:h-[20rem] rounded-2xl object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute md:bottom-20 bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between text-foreground">
                            <div>
                                <p className="text-sm opacity-80">Instructor</p>
                                <p className="font-semibold">{course.instructor}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5" />
                                <span className="text-sm">{course.level}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Main Content */}
            <div className="container mx-auto px-4 md:py-20 py-10">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* What You'll Learn */}
                        <section>
                            <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
                                <Target className="w-8 h-8 text-primary" />
                                What You'll Learn
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {learningOutcomes.map((outcome, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-gradient-card rounded-lg border border-border">
                                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                        <span className="text-foreground">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Course Description */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                                <BookOpen className="w-8 h-8 text-primary" />
                                Course Description
                            </h2>
                            <div className="prose prose-invert max-w-none">
                                <div className="space-y-6 md:text-lg text-sm text-foreground/90 leading-relaxed">
                                    <p className="">
                                        This comprehensive technical analysis course is designed to transform you from a beginner to a professional trader.
                                        You'll master the essential skills used by successful traders in financial markets worldwide.
                                    </p>
                                    <p>
                                        Starting with fundamental concepts, you'll progress through advanced chart pattern recognition,
                                        technical indicator analysis, and develop robust risk management strategies. Our proven methodology
                                        has helped thousands of students achieve consistent trading results.
                                    </p>

                                </div>
                            </div>
                        </section>
                        {/* Course Content */}
                        <section>
                            <h2 className="text-3xl font-bold mb-8 text-foreground">Course Content</h2>
                            <div className="grid gap-4">
                                {chapters.map((chapter, index) => (
                                    <ChapterCard
                                        key={chapter.id}
                                        chapter={chapter}
                                        index={index}
                                        activeChapter={activeChapter}
                                        handleChapterClick={handleChapterClick}
                                    />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar - Payment Details */}
                    <div className="lg:col-span-1 md:block hidden">
                        <div className="sticky top-8 space-y-6">
                            {/* Course Preview Card */}
                            <Card className="overflow-hidden bg-gradient-card border-border shadow-elevated">
                                <div className="relative">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full aspect-video object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                    <Button
                                        variant="ghost"
                                        className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/40 text-white"
                                        onClick={() => handleChapterClick(chapters[0])}
                                    >
                                        <Play className="w-12 h-12" />
                                    </Button>
                                </div>

                                <div className="p-6 space-y-6">
                                    {/* Pricing */}
                                    <div className="text-center space-y-3">
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-3xl font-bold text-foreground">{course.price}</span>
                                            <span className="text-xl text-muted-foreground line-through">{course.originalPrice}</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <Badge className="bg-gradient-primary text-white">
                                                <Tag className="w-3 h-3 mr-1" />
                                                51% OFF
                                            </Badge>
                                            {appliedCoupon && (
                                                <Badge className="bg-success text-white">
                                                    <Gift className="w-3 h-3 mr-1" />
                                                    Extra 20% OFF
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    {/* Coupon Code */}
                                    <div className="space-y-6">
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="Enter coupon code"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                className="flex-1 bg-background border-border"
                                            />
                                            <Button
                                                variant="outline"
                                                onClick={handleApplyCoupon}
                                                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                            >
                                                Apply
                                            </Button>
                                        </div>
                                        {appliedCoupon && (
                                            <p className="text-sm text-success flex items-center gap-1">
                                                <CheckCircle className="w-4 h-4" />
                                                Coupon "{appliedCoupon}" applied successfully!
                                            </p>
                                        )}
                                        <p className="text-xs text-muted-foreground">
                                            💡 Try "SAVE20" for an extra 20% off!
                                        </p>
                                    </div>

                                    {/* Enroll Button */}
                                    <Button variant="secondary" className="w-full transition-all duration-300 text-lg py-6">
                                        Enroll Now
                                    </Button>

                                    {/* Course Features */}
                                    <div className="space-y-4 pt-4 border-t border-border">
                                        <h4 className="font-semibold text-foreground">This course includes:</h4>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Clock className="w-4 h-4" />
                                                <span>{course.duration} on-demand video</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <BookOpen className="w-4 h-4" />
                                                <span>{course.chapters} comprehensive chapters</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Award className="w-4 h-4" />
                                                <span>Certificate of completion</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Shield className="w-4 h-4" />
                                                <span>Lifetime access</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Users className="w-4 h-4" />
                                                <span>Community access</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Money Back Guarantee */}
                                    <div className="text-center p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                                        <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <p className="text-sm font-medium text-foreground">30-Day Money Back Guarantee</p>
                                        <p className="text-xs text-muted-foreground mt-1">Full refund if you're not satisfied</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* mobile view */}
                    <MobileCheckoutSheet course={course} onCheckout={console.log} manualOpen={manualOpen} />

                </div>
            </div>
        </div>
    );
};

export default CourseDetail
