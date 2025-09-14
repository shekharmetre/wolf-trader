

export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  chapters: number;
  rating: number;
  students: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  level: string;
  isNew?: boolean;
  isBestseller?: boolean;
  hasFreeTrial?: boolean;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  purchasedCourses: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}



export interface Chapter {
    id: number;
    title: string;
    duration: string;
    isFree: boolean;
    description?: string;
}

