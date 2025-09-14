import { motion } from "framer-motion";
import { Search, Play, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { useState } from "react";

interface HeroSectionProps {
    onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("search") as string;
        if (query) {
            onSearch(query);
        }
    };

    return (
        <section className="relative  flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-success/10">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-success/20 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                        >
                            <Star className="w-4 h-4" />
                            #1 Trading Education Platform
                            <TrendingUp className="w-4 h-4" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl md:text-center text-start md:text-5xl lg:text-6xl font-bold leading-tight md:mb-6 mb-2"
                        >
                            Master Trading with
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Expert Courses</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-sm text-start  md:text-xl text-muted-foreground md:mb-8 mb-4 max-w-2xl"
                        >
                            Learn from professional traders and transform your financial future. Access premium courses,
                            live sessions, and proven strategies that deliver results.
                        </motion.p>
                        {/* Search Bar */}
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            onSubmit={handleSearch}
                            className="flex flex-col sm:flex-row gap-3 mb-8"
                        >
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <Input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    name="search"
                                    placeholder="Search courses, topics, or instructors..."
                                    className="pl-12 h-12 text-base border-2 focus:border-primary shadow-card"
                                />
                                {/* <Search className="absolute gradient-hero text-white p-1 rounded-full  right-4 top-1/2 transform -translate-y-1/2" /> */}
                            </div>
                            <Button type="submit" variant="default" size="lg" className="h-12 min-w-[120px] md:block hidden">
                                Search Courses
                            </Button>
                        </motion.form>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="grid md:grid-cols-1 grid-cols-2 gap-4"
                        >
                            <button className="group gradient-primary flex items-center  gap-2 px-2 md:p-4 justify-center rounded-md">
                                <Play className="w-5 h-5  group-hover:scale-110 transition-transform" />
                                Start Learning
                            </button>
                            <Button variant="ghost" size="lg" className="border border-border">
                                Watch Free Preview
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="grid grid-cols-3 md:gap-8 gap-2 pt-4 mt-2 border-t border-border"
                        >
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
                                <div className="text-sm text-muted-foreground">Active Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-success">200+</div>
                                <div className="text-sm text-muted-foreground">Expert Courses</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-warning">4.9★</div>
                                <div className="text-sm text-muted-foreground">Average Rating</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-premium">
                            <Image
                                src='/home/hero-trading.jpeg'
                                alt="Professional trading setup with multiple monitors showing financial charts"
                                className="w-full h-auto object-cover"
                                width={200} height={200}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                            {/* Floating Play Button */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <Button variant="ghost" size="lg" className="rounded-full w-20 h-20 animate-pulse-glow">
                                    <Play className="w-8 h-8 ml-1" />
                                </Button>
                            </motion.div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-premium"
                        >
                            <div className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                                <span className="text-success font-medium">Live Trading Session</span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">2,450 students watching</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-premium"
                        >
                            <div className="flex items-center gap-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-success" />
                                <span className="font-medium">+127% Average Return</span>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">From our students</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection

