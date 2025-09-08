export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      light: string;
    };
    button: {
      primary: string;
      primaryText: string;
      secondary: string;
      secondaryText: string;
    };
  };
  typography: {
    fontFamily: {
      primary: string;
      heading: string;
    };
    fontSize: Record<string, string>;
    sizes: {
      hero: string;
      section: string;
      card: string;
      body: string;
    };
  };
  spacing: {
    section: string;
    container: string;
  };
  borderRadius: {
    card: string;
    button: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  courseCount: number;
  duration?: string;
  slug: string;
  chapters?: Chapter[];
  instructor?: Instructor;
  price?: number;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed?: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
  trialDays?: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  addresses: {
    newYork: string;
    headquarters: string;
  };
}

export interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}