'use client'
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import CategoryFilter from "@/components/courses/CategoryFilter";
import { allCourses, categories } from "@/lib/data";
import { CourseCard } from "@/components/home/CourCard";

// Mock course data - In a real app, this would come from an API

const Courses = () => {
    const location = usePathname();
    const navigate = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [filteredCourses, setFilteredCourses] = useState(allCourses);
    //       const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    //   const [showCourseDetail, setShowCourseDetail] = useState(false);
    //   const [showUserProfile, setShowUserProfile] = useState(false);
    //   const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);


    // Parse URL parameters on mount
    useEffect(() => {
        const params = new URLSearchParams(location);
        const searchParam = params.get("search") || "";
        const categoryParam = params.get("category") || "";

        setSearchQuery(searchParam);
        setSelectedCategory(categoryParam);
    }, [location]);

    // Filter courses when search query or category changes
    useEffect(() => {
        let filtered = allCourses;

        if (searchQuery) {
            filtered = filtered.filter(course =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(course =>
                course.category.toLowerCase().includes(selectedCategory.toLowerCase())
            );
        }

        setFilteredCourses(filtered);
    }, [searchQuery, selectedCategory]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const params = new URLSearchParams(location);
        if (query) {
            params.set("search", query);
        } else {
            params.delete("search");
        }
        navigate.push(`/courses?${params.toString()}`);
    };

    const handleCategorySelect = (categoryId: string) => {
        setSelectedCategory(categoryId === selectedCategory ? "" : categoryId);
        const params = new URLSearchParams(location);
        if (categoryId && categoryId !== selectedCategory) {
            params.set("category", categoryId);
        } else {
            params.delete("category");
        }
        navigate.push(`/courses?${params.toString()}`);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory("");
        navigate.push("/courses");
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <Header />

            {/* Header */}
            <section className="bg-gradient-to-b from-primary/10 to-background py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            All Trading <span className="bg-gradient-hero bg-clip-text text-transparent">Courses</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Discover comprehensive trading courses designed to accelerate your learning journey
                        </p>

                        {/* Search Bar */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target as HTMLFormElement);
                                const query = formData.get("search") as string;
                                handleSearch(query);
                            }}
                            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
                        >
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                                <Input
                                    name="search"
                                    placeholder="Search courses, instructors, or topics..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 h-12 text-base border-2 focus:border-primary shadow-card"
                                />
                            </div>
                            <Button type="submit" variant="ghost" size="lg" className="h-12">
                                Search
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar - Desktop */}
                    <div className="hidden lg:block w-80 flex-shrink-0">
                        <div className="sticky top-8">
                            <div className="bg-gradient-card rounded-2xl p-6 shadow-card border border-border/50">
                                <h3 className="font-semibold mb-4 flex items-center gap-2">
                                    <Filter className="w-5 h-5" />
                                    Categories
                                </h3>
                                <CategoryFilter
                                    categories={categories}
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={setSelectedCategory}
                                    isMobile={isMobile}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">


                        {/* Filters Bar */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-muted-foreground">
                                    {filteredCourses.length} courses found
                                </span>

                                {/* Active Filters */}
                                <div className="flex gap-2">
                                    {searchQuery && (
                                        <Badge variant="secondary" className="gap-1">
                                            Search: {searchQuery}
                                            <button
                                                onClick={() => handleSearch("")}
                                                className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                                            >
                                                ✕
                                            </button>
                                        </Badge>
                                    )}
                                    {selectedCategory && (
                                        <Badge variant="secondary" className="gap-1">
                                            Category: {selectedCategory}
                                            <button
                                                onClick={() => handleCategorySelect("")}
                                                className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                                            >
                                                ✕
                                            </button>
                                        </Badge>
                                    )}
                                    {(searchQuery || selectedCategory) && (
                                        <Button variant="ghost" size="sm" onClick={clearFilters}>
                                            Clear all
                                        </Button>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    variant={viewMode === "grid" ? "default" : "ghost"}
                                    size="icon"
                                    onClick={() => setViewMode("grid")}
                                >
                                    <Grid className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant={viewMode === "list" ? "default" : "ghost"}
                                    size="icon"
                                    onClick={() => setViewMode("list")}
                                >
                                    <List className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Courses Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`
                grid gap-6
                ${viewMode === "grid"
                                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                                    : "grid-cols-1"
                                }
              `}
                        >
                            {filteredCourses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <CourseCard
                                        course={course}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Empty State */}
                        {filteredCourses.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-16"
                            >
                                <div className="text-6xl mb-4">📚</div>
                                <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                                <p className="text-muted-foreground mb-6">
                                    Try adjusting your search terms or browse all categories
                                </p>
                                <Button variant="secondary" onClick={clearFilters}>
                                    View All Courses
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Courses
