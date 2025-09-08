"use client";
import CourseCard from "@/components/shared/CourseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  BookOpen,
  Clock,
  Users,
  Code,
  X,
  SlidersHorizontal,
  ArrowRight,
  Star,
  Award,
  Zap,
  Globe,
  Palette,
  Database,
  Gamepad2,
  Sparkles,
} from "lucide-react";
import { siteContent } from "@/data/content";
import { useState, useMemo } from "react";
import type { Course } from "@/types";

export default function Courses() {
  const { courses } = siteContent;

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(courses.map((course) => course.category).filter(Boolean))
    );
    return uniqueCategories;
  }, [courses]);

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      // Search filter
      const matchesSearch =
        searchTerm === "" ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      // Level filter
      const matchesLevel =
        selectedLevel === "all" ||
        course.level?.toLowerCase() === selectedLevel;

      // Duration filter
      const matchesDuration =
        selectedDuration === "all" ||
        (() => {
          if (!course.duration) return false;
          const hours = parseInt(course.duration.replace(/\D/g, ""));
          switch (selectedDuration) {
            case "short":
              return hours < 20;
            case "medium":
              return hours >= 20 && hours <= 40;
            case "long":
              return hours > 40;
            default:
              return true;
          }
        })();

      return (
        matchesSearch && matchesCategory && matchesLevel && matchesDuration
      );
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.students || 0) - (a.students || 0);
        case "newest":
          return parseInt(b.id) - parseInt(a.id);
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "price-low":
          return (a.price || 0) - (b.price || 0);
        case "price-high":
          return (b.price || 0) - (a.price || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    courses,
    searchTerm,
    selectedCategory,
    selectedLevel,
    selectedDuration,
    sortBy,
  ]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSelectedDuration("all");
    setSortBy("popular");
  };

  // Check if any filters are active
  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "all" ||
    selectedLevel !== "all" ||
    selectedDuration !== "all" ||
    sortBy !== "popular";

  return (
    <>
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 mb-8 shadow-lg shadow-blue-500/10">
              <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">
                Premium Learning Experience
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
              Our Courses
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Choose from our comprehensive library of coding courses designed
              for all skill levels. From complete beginners to advanced
              developers, we have the perfect learning path for you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-lg shadow-blue-500/10">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                <span className="text-gray-700 font-medium">
                  {courses.length} Total Courses
                </span>
              </div>
              <div className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-green-100 shadow-lg shadow-green-500/10">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                <span className="text-gray-700 font-medium">
                  50,000+ Students
                </span>
              </div>
              <div className="flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-purple-100 shadow-lg shadow-purple-500/10">
                <Clock className="h-5 w-5 mr-2 text-purple-600" />
                <span className="text-gray-700 font-medium">
                  300+ Hours Content
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl shadow-gray-200/50">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <SlidersHorizontal className="h-6 w-6 mr-3 text-blue-600" />
                  Find Your Perfect Course
                </CardTitle>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-12 h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300">
                    <SelectValue placeholder="Difficulty Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={selectedDuration}
                  onValueChange={setSelectedDuration}
                >
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Durations</SelectItem>
                    <SelectItem value="short">Under 20 hours</SelectItem>
                    <SelectItem value="medium">20-40 hours</SelectItem>
                    <SelectItem value="long">40+ hours</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Categories - Hidden when filters are active */}
      {!hasActiveFilters && (
        <section className="py-12 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
                <span className="text-sm font-medium text-blue-600">
                  📚 Browse by Category
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our organized course categories to find exactly what
                you're looking for
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                className={`rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                    : "border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:scale-105"
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                All Courses
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={`rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                      : "border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:scale-105"
                  }`}
                  onClick={() => setSelectedCategory(category || "all")}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count - Always visible */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredCourses.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">
                {courses.length}
              </span>{" "}
              courses
            </p>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    {/* Course Image */}
                    <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-20">
                          <Code className="h-16 w-16" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      {course.level && (
                        <Badge className="absolute top-4 left-4 bg-white/90 text-blue-600 backdrop-blur-sm shadow-lg">
                          {course.level}
                        </Badge>
                      )}
                      {course.category && (
                        <Badge
                          variant="secondary"
                          className="absolute top-4 right-4 bg-white/90 text-purple-600 backdrop-blur-sm shadow-lg"
                        >
                          {course.category}
                        </Badge>
                      )}
                    </div>

                    {/* Course Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Course Meta */}
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
                          <span className="font-medium">
                            {course.courseCount} lessons
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-green-500" />
                          <span className="font-medium">
                            {course.students?.toLocaleString()}+
                          </span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-900">
                          {course.price === 0 ? "Free" : `$${course.price}`}
                        </div>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                          View Course
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms to find what you're
                looking for.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Course Stats */}
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                  <span className="text-sm font-medium text-white/90">
                    🏆 Why Choose Our Courses?
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Our Courses?
                </h3>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of students who have successfully launched
                  their coding careers with our comprehensive programs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">98%</div>
                  <div className="text-white/80 text-lg">
                    Course Completion Rate
                  </div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">50K+</div>
                  <div className="text-white/80 text-lg">Students Enrolled</div>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300 group-hover:scale-110">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">
                    4.9/5
                  </div>
                  <div className="text-white/80 text-lg">Average Rating</div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/20 px-8 py-4 text-lg font-semibold"
                >
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
