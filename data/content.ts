import type { 
  NavigationItem, 
  Course, 
  BlogPost, 
  PricingPlan, 
  ContactInfo, 
  SocialLinks, 
  FAQ, 
  Feature, 
  Testimonial, 
  TeamMember,
  Chapter
} from '@/types';

export const siteContent = {
  global: {
    siteName: "Divi Coding Academy",
    tagline: "Learn to Code Websites, Apps & Games",
    logo: "/images/logo.png",
    contact: {
      email: "info@codingacademy.com",
      phone: "+1 (555) 123-4567",
      addresses: {
        newYork: "2923 Extra Ave., New York, NY 39456",
        headquarters: "1235 Divi Street, Floor 3, San Francisco, CA 92021"
      }
    } as ContactInfo,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    } as SocialLinks
  },
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Marketing", href: "/marketing" },
      { label: "Courses", href: "/courses" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ] as NavigationItem[],
    auth: [
      { label: "Login", href: "/login" },
      { label: "Sign Up", href: "/signup" }
    ] as NavigationItem[]
  },
  home: {
    hero: {
      headline: "A better way to learn to code websites, apps, and games",
      subheadline: "Master coding skills through interactive courses, hands-on projects, and expert guidance. Start your coding journey today with our comprehensive learning platform.",
      primaryCTA: "Start Learning Now",
      secondaryCTA: "Watch Demo",
      heroImage: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    coursesSection: {
      title: "100's of Courses",
      subtitle: "Choose from our extensive library of programming courses designed for all skill levels"
    },
    learningProcess: {
      title: "Easy As 1…2…3…",
      subtitle: "Our streamlined learning process gets you coding in no time",
      steps: [
        {
          step: "1",
          title: "Choose Your Path",
          description: "Select from beginner-friendly to advanced courses in web development, mobile apps, and game development."
        },
        {
          step: "2",
          title: "Learn by Doing",
          description: "Follow along with interactive tutorials and build real projects with our cloud-based IDE."
        },
        {
          step: "3",
          title: "Build Your Portfolio",
          description: "Create impressive projects and earn certificates to showcase your new skills to employers."
        }
      ]
    },
    pricingPreview: {
      freeSection: {
        title: "Free Courses",
        description: "Start learning with our free courses and get a taste of our teaching style.",
        cta: "Browse Free Courses"
      },
      premiumSection: {
        title: "Premium Courses",
        description: "Unlock unlimited access to all courses, projects, and premium features.",
        cta: "Go Premium"
      }
    }
  },
  marketing: {
    hero: {
      headline: "Supercharge Your Classroom with a Free Trial",
      subheadline: "Transform your computer science curriculum with engaging, interactive coding courses designed specifically for educators and students.",
      primaryCTA: "Start Free Trial",
      secondaryCTA: "Schedule Demo",
      heroImage: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    features: [
      {
        id: "1",
        title: "Beginner Courses",
        description: "Structured lessons that take students from zero to coding confident, with no prior experience required.",
        icon: "BookOpen"
      },
      {
        id: "2", 
        title: "Gamified Learning",
        description: "Engage students with interactive challenges, progress tracking, and achievement badges.",
        icon: "Gamepad2"
      },
      {
        id: "3",
        title: "Real-world Projects", 
        description: "Students build actual websites, apps, and games they can showcase in their portfolios.",
        icon: "Code2"
      },
      {
        id: "4",
        title: "Progress Tracking",
        description: "Monitor student progress with detailed analytics and automated grading systems.",
        icon: "BarChart3"
      },
      {
        id: "5",
        title: "Lesson Plans",
        description: "Ready-to-use curriculum guides and teaching resources to streamline your instruction.",
        icon: "FileText"
      },
      {
        id: "6",
        title: "Teacher Training",
        description: "Professional development resources to help educators master the latest coding technologies.",
        icon: "GraduationCap"
      }
    ] as Feature[],
    testimonials: [
      {
        id: "1",
        name: "Sarah Johnson",
        role: "Computer Science Teacher",
        content: "My students are more engaged than ever! The interactive projects and gamified approach has completely transformed my classroom.",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 5
      },
      {
        id: "2",
        name: "Mike Chen",
        role: "Coding Bootcamp Instructor",
        content: "The curriculum is comprehensive and the cloud IDE makes it easy for students to code from anywhere. Highly recommended!",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 5
      }
    ] as Testimonial[],
    finalCTA: {
      title: "Elevate Your Classroom",
      subtitle: "Join thousands of educators who are already transforming how they teach coding",
      freeOption: "Start Free Trial",
      premiumOption: "View Premium Plans"
    }
  },
  courses: [
    {
      id: "1",
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive websites and web applications.",
      icon: "Globe",
      courseCount: 17,
      duration: "40+ hours",
      slug: "web-development",
      level: "Beginner",
      chapters: [
        {
          id: "1",
          title: "HTML Fundamentals",
          duration: "3hrs 15min",
          lessons: [
            { id: "1", title: "Introduction to HTML", duration: "25min" },
            { id: "2", title: "HTML Elements and Structure", duration: "35min" },
            { id: "3", title: "Forms and Input Elements", duration: "45min" }
          ]
        },
        {
          id: "2", 
          title: "CSS Styling",
          duration: "4hrs 30min",
          lessons: [
            { id: "1", title: "CSS Selectors and Properties", duration: "40min" },
            { id: "2", title: "Flexbox and Grid", duration: "55min" },
            { id: "3", title: "Responsive Design", duration: "50min" }
          ]
        }
      ] as Chapter[],
      instructor: {
        id: "1",
        name: "Alex Rodriguez",
        bio: "Senior Full-Stack Developer with 8 years of experience building web applications for Fortune 500 companies.",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
        specialties: ["React", "Node.js", "TypeScript"]
      },
      price: 79
    },
    {
      id: "2",
      title: "Python",
      description: "Master Python programming from basics to advanced topics including data science and machine learning.",
      icon: "Code",
      courseCount: 8,
      duration: "25+ hours", 
      slug: "python",
      level: "Beginner",
      price: 69
    },
    {
      id: "3",
      title: "UX Design",
      description: "Design user-friendly interfaces and create amazing user experiences with industry-standard tools.",
      icon: "Palette",
      courseCount: 16,
      duration: "30+ hours",
      slug: "ux-design", 
      level: "Intermediate",
      price: 89
    },
    {
      id: "4",
      title: "Database Design",
      description: "Learn database fundamentals, SQL, and modern database technologies for scalable applications.",
      icon: "Database",
      courseCount: 7,
      duration: "20+ hours",
      slug: "database-design",
      level: "Intermediate", 
      price: 59
    },
    {
      id: "5",
      title: "JavaScript",
      description: "Deep dive into JavaScript, ES6+ features, and modern development practices.",
      icon: "Braces",
      courseCount: 22,
      duration: "35+ hours",
      slug: "javascript",
      level: "Beginner",
      price: 75
    },
    {
      id: "6",
      title: "HTML & CSS", 
      description: "Master the building blocks of web development with comprehensive HTML and CSS training.",
      icon: "FileCode",
      courseCount: 36,
      duration: "45+ hours",
      slug: "html-css",
      level: "Beginner",
      price: 49
    },
    {
      id: "7",
      title: "Intro to Coding",
      description: "Perfect for complete beginners - learn programming concepts and problem-solving skills.",
      icon: "Play",
      courseCount: 2,
      duration: "10+ hours", 
      slug: "intro-to-coding",
      level: "Beginner",
      price: 29
    },
    {
      id: "8",
      title: "Apps & Games",
      description: "Build mobile applications and interactive games using modern development frameworks.",
      icon: "Smartphone",
      courseCount: 19,
      duration: "50+ hours",
      slug: "apps-games",
      level: "Advanced",
      price: 99
    }
  ] as Course[],
  pricing: {
    hero: {
      title: "Choose a Plan that Works for You",
      subtitle: "Start with our free trial or go premium for unlimited access to all courses and features."
    },
    plans: [
      {
        id: "trial",
        name: "7 Day Trial",
        price: 0,
        duration: "7 days",
        trialDays: 7,
        features: [
          "Try 5 lessons in each course",
          "No credit card required", 
          "You can upgrade anytime",
          "Projects with Cloud IDE",
          "Course completion certificates",
          "Exclusive Slack channel"
        ]
      },
      {
        id: "monthly", 
        name: "Premium Account",
        price: 29,
        duration: "monthly",
        popular: true,
        features: [
          "Get unlimited access",
          "Test your knowledge",
          "100+ guided projects", 
          "Projects with Cloud IDE",
          "Course completion certificates",
          "Exclusive Slack channel",
          "Priority support"
        ]
      },
      {
        id: "yearly",
        name: "Premium Account", 
        price: 19,
        duration: "monthly (billed yearly)",
        features: [
          "Get unlimited access",
          "Test your knowledge", 
          "100+ guided projects",
          "Projects with Cloud IDE",
          "Course completion certificates",
          "Exclusive Slack channel", 
          "Priority support",
          "2 months free"
        ]
      }
    ] as PricingPlan[],
    benefits: [
      {
        id: "1",
        title: "100+ Interactive Courses",
        description: "Access our complete library of coding courses covering all major programming languages and frameworks.",
        icon: "BookOpen"
      },
      {
        id: "2",
        title: "Video Tutorials", 
        description: "High-quality video lessons with screen recordings and step-by-step explanations.",
        icon: "Video"
      },
      {
        id: "3",
        title: "Coding Challenges",
        description: "Practice your skills with interactive coding challenges and automated testing.", 
        icon: "Zap"
      },
      {
        id: "4",
        title: "New Monthly Content",
        description: "Fresh courses and updates added every month to keep up with the latest technologies.",
        icon: "Calendar"
      },
      {
        id: "5", 
        title: "Mobile App",
        description: "Learn on the go with our mobile app available for iOS and Android devices.",
        icon: "Smartphone"
      },
      {
        id: "6",
        title: "Coding Community", 
        description: "Connect with fellow learners, get help, and share your projects in our community.",
        icon: "Users"
      }
    ] as Feature[]
  },
  blog: {
    hero: {
      title: "Blog",
      subtitle: "Latest news, tutorials, and insights from the world of coding and technology."
    },
    posts: [
      {
        id: "1",
        title: "Nunc Volutpat Venenatis",
        excerpt: "Discover the latest trends in web development and how they're shaping the future of digital experiences.",
        image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800",
        author: "Sarah Wilson",
        date: "2024-01-15",
        category: "Web Development",
        slug: "nunc-volutpat-venenatis"
      },
      {
        id: "2", 
        title: "Vestibulum Nisl Felis",
        excerpt: "Learn how to build responsive layouts that work perfectly across all devices and screen sizes.",
        image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
        author: "Mike Johnson",
        date: "2024-01-12", 
        category: "CSS",
        slug: "vestibulum-nisl-felis"
      },
      {
        id: "3",
        title: "Proin Eu Augue Efficitur", 
        excerpt: "A comprehensive guide to JavaScript ES6+ features and modern development practices.",
        image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800",
        author: "Alex Chen",
        date: "2024-01-10",
        category: "JavaScript", 
        slug: "proin-eu-augue-efficitur"
      },
      {
        id: "4",
        title: "Nam Vulputate Tempus",
        excerpt: "Best practices for database design and optimization in modern web applications.",
        image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
        author: "Emma Davis", 
        date: "2024-01-08",
        category: "Database",
        slug: "nam-vulputate-tempus"
      },
      {
        id: "5",
        title: "Donec Sit Amet Nibh",
        excerpt: "Mobile app development trends and the future of cross-platform development frameworks.",
        image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800", 
        author: "Ryan Martinez",
        date: "2024-01-05",
        category: "Mobile Development",
        slug: "donec-sit-amet-nibh"
      },
      {
        id: "6",
        title: "Maecenas Fringilla Augue",
        excerpt: "UX design principles that every developer should know to create better user experiences.",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        author: "Lisa Taylor",
        date: "2024-01-03", 
        category: "UX Design",
        slug: "maecenas-fringilla-augue"
      }
    ] as BlogPost[]
  },
  about: {
    hero: {
      title: "We are Passionate About Building Tools for the Classroom",
      subtitle: "Our mission is to make coding education accessible, engaging, and effective for students and educators worldwide."
    },
    learningMethods: [
      {
        id: "1",
        title: "Individual Online Learning",
        description: "Self-paced courses designed for independent learners who want to study at their own schedule and pace.",
        icon: "User"
      },
      {
        id: "2",
        title: "Classroom Lessons", 
        description: "Structured curriculum and teaching resources designed specifically for classroom environments and group learning.",
        icon: "Users"
      },
      {
        id: "3", 
        title: "Coding Camps",
        description: "Intensive, immersive programs that teach coding skills through hands-on projects and collaborative learning.",
        icon: "Mountain"
      }
    ] as Feature[],
    story: {
      title: "Education is in Our Blood", 
      content: "Founded in 2018 by a team of educators and developers, Divi Coding Academy was born from the belief that everyone should have access to quality coding education. Our founders noticed a gap between traditional computer science education and the practical skills needed in today's tech industry. We set out to bridge that gap with hands-on, project-based learning that prepares students for real-world coding challenges."
    },
    team: [
      {
        id: "1",
        name: "Sarah Rodriguez",
        role: "CEO & Co-Founder", 
        bio: "Former computer science professor with 15 years of teaching experience. Sarah leads our educational strategy and curriculum development.",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
        specialties: ["Education Strategy", "Curriculum Design", "Leadership"]
      },
      {
        id: "2",
        name: "Michael Chen",
        role: "CTO & Co-Founder",
        bio: "Senior software engineer with experience at Google and Microsoft. Michael oversees our technical platform and course development.",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400", 
        specialties: ["Full-Stack Development", "Cloud Architecture", "EdTech"]
      },
      {
        id: "3",
        name: "Emily Johnson",
        role: "Head of Content",
        bio: "Award-winning technical writer and former coding bootcamp instructor. Emily ensures our content is engaging and accessible.",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
        specialties: ["Technical Writing", "Instructional Design", "Content Strategy"]
      },
      {
        id: "4", 
        name: "David Kim",
        role: "Lead Developer",
        bio: "Full-stack developer with expertise in modern web technologies. David builds the interactive tools that power our learning platform.",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
        specialties: ["React", "Node.js", "Cloud Infrastructure"]
      }
    ] as TeamMember[]
  },
  contact: {
    hero: {
      title: "Contact Us",
      subtitle: "Have questions about our courses or need help getting started? We're here to help!"
    },
    form: {
      title: "Send us a Message",
      subtitle: "Fill out the form below and we'll get back to you within 24 hours."
    }
  },
  faqs: [
    {
      id: "1",
      question: "How does the free trial work?",
      answer: "Our 7-day free trial gives you access to sample lessons from each course category. You can explore our teaching style, try the cloud IDE, and get a feel for the platform before committing to a paid plan. No credit card required!"
    },
    {
      id: "2", 
      question: "How often do you release new content?",
      answer: "We add new courses and update existing content monthly. Our team is constantly working on fresh material to keep up with the latest technologies and industry trends. Premium members get early access to new releases."
    },
    {
      id: "3",
      question: "Do you offer Virtual Reality Development?", 
      answer: "Yes! Our Apps & Games course category includes VR development using Unity and other popular VR frameworks. We cover everything from basic 3D concepts to advanced VR interaction design."
    },
    {
      id: "4",
      question: "Can I cancel at any time?",
      answer: "Absolutely! You can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees. You'll continue to have access until the end of your current billing period."
    },
    {
      id: "5",
      question: "What age groups do you support?", 
      answer: "Our courses are designed primarily for ages 13 and up, though younger students can succeed with parental guidance. We offer beginner-friendly content that assumes no prior coding experience, making it accessible to learners of all backgrounds."
    },
    {
      id: "6",
      question: "What if I get stuck on a lesson?",
      answer: "We provide multiple support channels! You can ask questions in our exclusive Slack community, check our comprehensive FAQ, or contact our support team directly. Premium members also get priority support with faster response times."
    }
  ] as FAQ[]
};