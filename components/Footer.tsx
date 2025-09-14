import { motion } from "framer-motion";
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/20 to-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-success/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-background/20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with Market Insights
              </h3>
              <p className="text-background/80 mb-8">
                Get weekly trading tips, market analysis, and exclusive course offers delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background/10 border-background/30 text-background placeholder:text-background/60 focus:border-primary"
                />
                <Button variant="ghost" className="whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-1"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">TradeMaster</span>
                </div>
                <p className="text-background/80 mb-6 leading-relaxed">
                  Empowering traders worldwide with expert education, proven strategies, and cutting-edge tools for financial success.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    "All Courses",
                    "Free Resources", 
                    "Live Sessions",
                    "Community",
                    "Success Stories",
                    "Become Instructor"
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-background/80 hover:text-primary transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Courses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
                <ul className="space-y-3">
                  {[
                    "Technical Analysis",
                    "Day Trading", 
                    "Cryptocurrency",
                    "Risk Management",
                    "Trading Psychology",
                    "Forex Trading"
                  ].map((course, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-background/80 hover:text-primary transition-colors duration-200"
                      >
                        {course}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-background/80">support@trademaster.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-background/80">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-background/80">
                      123 Trading Street<br />
                      New York, NY 10001
                    </span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-6 pt-6 border-t border-background/20">
                  <div className="text-sm text-background/60 mb-2">Certified by:</div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 bg-background/10 rounded text-xs">SEC</div>
                    <div className="px-2 py-1 bg-background/10 rounded text-xs">FINRA</div>
                    <div className="px-2 py-1 bg-background/10 rounded text-xs">CFTC</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-background/60 text-sm"
              >
                © 2024 TradeMaster. All rights reserved.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-6 text-sm"
              >
                <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                  Cookie Policy
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer