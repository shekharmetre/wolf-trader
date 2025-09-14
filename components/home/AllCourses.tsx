// 'use client'
// import {motion} from "framer-motion"
// export function AllCourses() {
//     return (
//         <section id="courses-section" className="py-20 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-12"
//                 >
//                     <h2 className="text-4xl font-bold text-gray-800 mb-4">All Courses</h2>
//                     <p className="text-xl text-gray-600">
//                         {searchQuery ? `Search results for "${searchQuery}"` : 'Discover the perfect course for your trading journey'}
//                     </p>
//                 </motion.div>

//                 <div className={`${isMobile ? 'block' : 'lg:grid lg:grid-cols-4 gap-8'}`}>
//                     {/* Category Filter */}
//                     <div className={`${isMobile ? 'mb-8' : 'lg:col-span-1'}`}>
//                         <CategoryFilter
//                             categories={categories}
//                             selectedCategory={selectedCategory}
//                             onCategoryChange={setSelectedCategory}
//                             isMobile={isMobile}
//                         />
//                     </div>

//                     {/* Courses Grid */}
//                     <div className={`${isMobile ? '' : 'lg:col-span-3'}`}>
//                         <div className={`grid ${getGridCols()} gap-6`}>
//                             {filteredCourses.map((course) => (
//                                 <CourseCard
//                                     key={course.id}
//                                     course={course}
//                                     onClick={handleCourseClick}
//                                 />
//                             ))}
//                         </div>

//                         {filteredCourses.length === 0 && (
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 className="text-center py-20"
//                             >
//                                 <div className="text-6xl mb-4">😔</div>
//                                 <h3 className="text-2xl font-bold text-gray-700 mb-2">No courses found</h3>
//                                 <p className="text-gray-500">Try adjusting your search or category filter</p>
//                             </motion.div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }