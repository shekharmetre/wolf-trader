import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Lock, Clock, ChevronDown } from "lucide-react";
import { Chapter } from "@/lib/types";



interface ChapterCardProps {
    chapter: Chapter;
    index: number;
    activeChapter: number | null;
    handleChapterClick: (chapter: Chapter) => void;
}

export default function ChapterCard({
    chapter,
    index,
    handleChapterClick,
}: ChapterCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card
            key={chapter.id}
            className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-card  bg-gradient-card hover:bg-gradient-primary/10 border-primary/20`}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div
                    className="flex items-center gap-4 flex-1"
                    onClick={() => { handleChapterClick(chapter); setIsExpanded(!isExpanded) }}
                >
                    <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground`}
                    >
                        {chapter.isFree ? (
                            <Play className="w-5 h-5" />
                        ) : (
                            <Lock className="w-5 h-5" />
                        )}
                    </div>

                    <div>
                        <h3
                            className={`font-semibold text-lg text-foreground`}
                        >
                            {index + 1}. {chapter.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {chapter.duration}
                            </span>
                            {chapter.isFree && (
                                <Badge
                                    variant="secondary"
                                    className="text-success border-success"
                                >
                                    FREE
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>

                {/* Chevron button */}
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="ml-2"
                >
                    <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Animated Description */}
            <AnimatePresence>
                {isExpanded && chapter.description && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 text-sm text-foreground"
                    >
                        {chapter.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde?
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
}
