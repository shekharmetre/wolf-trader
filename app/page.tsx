'use client'
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import CategoryGrid from "@/components/home/CategoryGrid";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCourses from "@/components/home/FeatureCoourses";
import Testimonials from "@/components/home/Testimonials";
import TradingCourseCarousel from "@/components/home/TradingCourse";

const Landing = () => {
    const navigate = useRouter()

    const handleSearch = (query: string) => {
        console.log(query, "search query")
        // Navigate to courses page with search query
        navigate.push(`/courses?search=${encodeURIComponent(query)}`);
    };

    const handleCategorySelect = (categoryId: string) => {
        // Navigate to courses page with category filter
        navigate.push(`/courses?category=${categoryId}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            {/* Navigation */}
            <Header />

            {/* Hero Section */}
            <HeroSection onSearch={handleSearch} />

            {/* Categories Section */}
            <section className="md:py-20 py-6 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold md:mb-4 ">
                            Explore Trading <span className="bg-gradient-hero bg-clip-text text-transparent">Categories</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Discover specialized courses tailored to your trading style and experience level
                        </p>
                    </motion.div>

                    {/* Desktop/Tablet Categories Grid */}
                    <div className="hidden md:block">
                        <CategoryGrid onCategorySelect={handleCategorySelect} variant="grid" />
                    </div>

                    {/* Mobile Categories - Horizontal Scroll */}
                    <div className="md:hidden">
                        <CategoryGrid onCategorySelect={handleCategorySelect} variant="horizontal" />
                    </div>
                </div>
            </section>

            <TradingCourseCarousel />

            {/* Featured Courses */}
            <FeaturedCourses />

            {/* Mobile Featured Courses - Different Design */}
            {/* <FeaturedCourses variant="horizontal" /> */}

            {/* How It Works */}

            {/* Additional Features Section - Mobile Focused */}
            <section className="py-16 bg-gradient-to-b from-background to-success/5 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            Why Choose <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">TradeMaster</span>?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center p-6 rounded-2xl bg-gradient-card shadow-card border border-border/50"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Mobile Optimized</h3>
                            <p className="text-sm text-muted-foreground">
                                Learn anywhere, anytime with our fully responsive mobile experience
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center p-6 rounded-2xl bg-gradient-card shadow-card border border-border/50"
                        >
                            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                            <p className="text-sm text-muted-foreground">
                                Join 50,000+ successful traders who improved their performance
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center p-6 rounded-2xl bg-gradient-card shadow-card border border-border/50"
                        >
                            <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💡</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                            <p className="text-sm text-muted-foreground">
                                Get help from professional traders and our community 24/7
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Landing;