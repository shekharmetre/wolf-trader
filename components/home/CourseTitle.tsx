interface CoursesTitleProps {
    title: string;
    subtitle?: string;
}

export function CoursesTitle({ title, subtitle }: CoursesTitleProps) {
    return (
        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white relative inline-block">
                {title}
                {/* Decorative underline with circle */}
                <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 flex items-center gap-1">
                    {/* Circle */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 h-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="12" r="12" />
                    </svg>

                    {/* Line */}
                    <span className="w-16 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full"></span>

                    {/* Circle */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2 h-2 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="12" r="12" />
                    </svg>
                </span>
            </h2>

            {subtitle && (
                <p className="text-sm md:text-base text-muted-foreground mt-6 max-w-xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
