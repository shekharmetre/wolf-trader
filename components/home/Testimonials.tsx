import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Johnson",
    role: "Day Trader",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The technical analysis course completely transformed my trading. I went from losing money to consistent 15% monthly returns. The instructors are world-class!",
    rating: 5,
    course: "Technical Analysis Mastery",
    profit: "+247% ROI"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Swing Trader",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
    content: "Amazing content and practical strategies. The risk management techniques alone saved me thousands of dollars. Highly recommend to anyone serious about trading.",
    rating: 5,
    course: "Risk Management Pro",
    profit: "+189% ROI"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Crypto Investor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The cryptocurrency course opened my eyes to DeFi opportunities I never knew existed. The instructors explain complex concepts in simple terms.",
    rating: 5,
    course: "Crypto Trading Strategies",
    profit: "+312% ROI"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Professional Trader",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Best investment I've ever made. The live trading sessions and community support are invaluable. I've learned more in 3 months than in 3 years on my own.",
    rating: 5,
    course: "Advanced Trading Strategies",
    profit: "+156% ROI"
  },
  {
    id: 5,
    name: "James Thompson",
    role: "Forex Trader",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "The psychology course was a game-changer. Learning to control emotions and stick to my strategy has been the key to consistent profitability.",
    rating: 5,
    course: "Trading Psychology",
    profit: "+203% ROI"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Part-time Trader",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "Perfect for working professionals. The flexible learning schedule allowed me to study at my own pace while working full-time. Now I have a profitable side income!",
    rating: 5,
    course: "Beginner to Pro Bundle",
    profit: "+98% ROI"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-success/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Student Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful traders who transformed their financial future with our courses
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-card to-card/80 rounded-2xl p-6 shadow-card hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 border border-border/50 hover:border-primary/30 h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Course & Profit */}
                <div className="mb-4 p-3 bg-success/5 rounded-lg border border-success/20">
                  <div className="text-sm text-success font-medium mb-1">
                    Course: {testimonial.course}
                  </div>
                  <div className="text-lg font-bold text-success">
                    {testimonial.profit}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2">$2M+</div>
              <div className="text-muted-foreground">Student Profits Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-warning mb-2">4.9★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials