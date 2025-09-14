import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '@/lib/types';


interface CategoryFilterProps {
    categories: Category[];
    selectedCategory: string;
    onCategoryChange: (categoryId: string) => void;
    isMobile?: boolean;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    selectedCategory,
    onCategoryChange,
    isMobile = false,
}) => {
    if (isMobile) {
        return (
            <div className="mb-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3 pb-4 overflow-x-auto scrollbar-hide"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onCategoryChange(category.id)}
                            className={`cursor-pointer flex-shrink-0 px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                                }`}
                        >
                            <span>{category.icon}</span>
                            <span className="whitespace-nowrap">{category.name}</span>
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full ml-1">
                                {category.count}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg">
            <div className="space-y-3">
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onCategoryChange(category.id)}
                        className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between ${selectedCategory === category.id
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-xl">{category.icon}</span>
                            <span>{category.name}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category.id
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-gray-600'
                            }`}>
                            {category.count}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;