import { Category, Chapter, Course } from "./types";

export const allCourses: Course[] = [
    {
        id: "1",
        title: "Master Technical Analysis: From Beginner to Pro",
        instructor: "Sarah Chen",
        duration: "12h 30m",
        chapters: 24,
        rating: 4.9,
        students: "15.2K",
        price: "$97",
        originalPrice: "$197",
        image: "/home/course-technical.jpg",
        category: "Technical Analysis",
        level: "Intermediate",
        isNew: true,
        isBestseller: true,
        hasFreeTrial: true,
        description: "Learn advanced chart patterns, indicators, and trading strategies used by professional traders worldwide."
    },
    {
        id: "2",
        title: "Day Trading Mastery: Scalping & Intraday Strategies",
        instructor: "Michael Rodriguez",
        duration: "8h 45m",
        chapters: 18,
        rating: 4.8,
        students: "8.7K",
        price: "$127",
        originalPrice: "$247",
        image: "/home/course-daytrading.jpeg",
        category: "Day Trading",
        level: "Advanced",
        isBestseller: true,
        hasFreeTrial: false,
        description: "Master profitable day trading techniques including scalping, momentum trading, and risk management."
    },
    {
        id: "3",
        title: "Cryptocurrency Trading: DeFi & Altcoin Strategies",
        instructor: "Alex Thompson",
        duration: "10h 15m",
        chapters: 20,
        rating: 4.7,
        students: "12.1K",
        price: "$87",
        originalPrice: "$167",
        image: "/home/course-crypto.jpeg",
        category: "Cryptocurrency",
        level: "Beginner",
        isNew: true,
        hasFreeTrial: true,
        description: "Navigate the crypto markets with confidence. Learn DeFi protocols, altcoin analysis, and portfolio strategies."
    },
    // Add more mock courses to fill out the grid
    ...Array.from({ length: 9 }, (_, i) => ({
        id: `${i + 4}`,
        title: `Advanced Trading Course ${i + 1}`,
        instructor: `Instructor ${i + 1}`,
        duration: `${6 + i}h ${Math.floor(Math.random() * 60)}m`,
        chapters: 12 + i * 2,
        rating: 4.5 + Math.random() * 0.5,
        students: `${Math.floor(Math.random() * 20)}K`,
        price: `$${87 + i * 20}`,
        originalPrice: `$${150 + i * 30}`,
        image: ["/home/course-crypto.jpeg", "/home/course-daytrading.jpeg", "/home/course-technical.jpg"][i % 3],
        category: ["Technical Analysis", "Day Trading", "Cryptocurrency", "Risk Management", "Psychology"][i % 5],
        level: ["Beginner", "Intermediate", "Advanced"][i % 3] as "Beginner" | "Intermediate" | "Advanced",
        isNew: i % 3 === 0,
        isBestseller: i % 4 === 0,
        hasFreeTrial: i % 2 === 0,
        description: `Learn comprehensive trading strategies and techniques in this advanced course designed for ${["beginners", "intermediate", "advanced"][i % 3]} traders.`
    }))
];


export const chapters: Chapter[] = [
    { 
        id: 1, 
        title: "Introduction to Trading", 
        duration: "12:30", 
        isFree: true, 
        description: "Learn the basics of trading, including key concepts, terminology, and market structure." 
    },
    { 
        id: 2, 
        title: "Market Analysis Basics", 
        duration: "18:45", 
        isFree: false, 
        description: "Understand fundamental and technical market analysis techniques to interpret market trends." 
    },
    { 
        id: 3, 
        title: "Risk Management", 
        duration: "22:15", 
        isFree: false, 
        description: "Learn strategies to minimize losses and manage risk effectively while trading." 
    },
    { 
        id: 4, 
        title: "Trading Strategies", 
        duration: "28:30", 
        isFree: false, 
        description: "Explore different trading strategies and learn how to apply them in real market conditions." 
    },
    { 
        id: 5, 
        title: "Advanced Techniques", 
        duration: "35:20", 
        isFree: false, 
        description: "Master advanced trading techniques, including leverage, hedging, and position sizing." 
    },
    { 
        id: 6, 
        title: "Chart Patterns", 
        duration: "41:10", 
        isFree: false, 
        description: "Identify and interpret popular chart patterns for predicting price movements." 
    },
    { 
        id: 7, 
        title: "Technical Indicators", 
        duration: "29:55", 
        isFree: false, 
        description: "Learn to use indicators like RSI, MACD, and moving averages to make informed trading decisions." 
    },
    { 
        id: 8, 
        title: "Support & Resistance", 
        duration: "33:40", 
        isFree: false, 
        description: "Understand how to identify key support and resistance levels to improve entry and exit points." 
    },
];


export const categories: Category[] = [
    { id: 'forex', name: 'Forex Trading', icon: '💱', count: 24 },
    { id: 'crypto', name: 'Cryptocurrency', icon: '₿', count: 18 },
    { id: 'stocks', name: 'Stock Trading', icon: '📈', count: 32 },
    { id: 'options', name: 'Options Trading', icon: '📊', count: 16 },
    { id: 'futures', name: 'Futures Trading', icon: '🔮', count: 12 },
    { id: 'technical', name: 'Technical Analysis', icon: '📉', count: 28 },
    { id: 'fundamental', name: 'Fundamental Analysis', icon: '📰', count: 20 },
    { id: 'psychology', name: 'Trading Psychology', icon: '🧠', count: 14 },
];

