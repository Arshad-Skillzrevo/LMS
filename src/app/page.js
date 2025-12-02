"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaQuoteLeft } from "react-icons/fa";



export default function LMSLandingPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 overflow-hidden">

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="w-full bg-white py-20 relative overflow-hidden">
        {/* Animated background circles */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          {/* LEFT TEXT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Welcome to <span className="text-blue-600">SkillzRevo Learning Portal</span>
            </motion.h1>

            <motion.p 
              className="mt-4 text-lg text-gray-600"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Access your courses, assignments, class recordings, certificates, and progress tracking.
            </motion.p>

            <motion.div 
              className="mt-8"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="https://tutor.skillzrevo.com/dashboard"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Go to Dashboard
              </motion.a>
            </motion.div>

            <motion.p 
              className="mt-4 text-gray-500 text-sm"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              New learner? Explore our courses at{" "}
              <a
                href="hhtps://academy.skillzrevo.com/courses"
                className="text-blue-600 underline"
              >
                SkillzRevo Academy →
              </a>
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="SkillzRevo LMS"
              className="w-full max-w-md rounded-xl shadow-xl object-cover"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ------------------ ABOUT SECTION ------------------ */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About SkillzRevo Academy
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SkillzRevo Academy delivers industry-ready programs in AI, Machine Learning, Data Science,
            Cyber Security, Cloud, DevOps, and emerging technologies. Our LMS provides 24×7 access to
            lessons, assignments, projects, certification downloads, and continuous progress tracking.
            Designed for both students and working professionals, we ensure a seamless learning experience.
          </motion.p>
        </div>
      </section>

      {/* ------------------ WHY SKILLZREVO SECTION ------------------ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Learn with SkillzRevo LMS?
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Track Live & Recorded Classes",
              "Access Assignments & Quizzes",
              "Download Learning Materials",
              "Earn Certificates",
              "Exclusive Industry Projects",
              "24×7 LMS Access"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 bg-gray-50 p-5 rounded-lg shadow-sm"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  backgroundColor: "#f0f9ff"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                >
                  <FaCheckCircle className="text-blue-600 text-xl" />
                </motion.div>
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------ POPULAR COURSES SECTION ------------------ */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Popular Courses
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "AI & Machine Learning", img: "photo-1677442136019-21780ecad995?w=600&q=80" },
              { name: "Data Science", img: "photo-1551288049-bebda4e38f71?w=600&q=80" },
              { name: "Cyber Security", img: "photo-1550751827-4bd374c3f58b?w=600&q=80" },
              { name: "Power BI", img: "photo-1460925895917-afdab827c52f?w=600&q=80" },
              { name: "DevOps", img: "photo-1618401471353-b98afee0b2eb?w=600&q=80" },
              { name: "Big Data Engineering", img: "photo-1558494949-ef010cbdcc31?w=600&q=80" }
            ].map((course, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow overflow-hidden"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="h-40 overflow-hidden">
                  <motion.img 
                    src={`https://images.unsplash.com/${course.img}`}
                    alt={course.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Explore modules, assignments and hands-on projects.
                  </p>
                  <motion.a
                    href="https://academy.skillzrevo.com/courses"
                    className="mt-4 inline-block text-blue-600 font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    View Course →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------ TESTIMONIALS SECTION ------------------ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Learners Say
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { id: 1, img: "photo-1573496359142-b8d87734a5a2?w=400&q=80", name: "Sarah Johnson" },
              { id: 2, img: "photo-1507003211169-0a1dd7228f2d?w=400&q=80", name: "Michael Chen" }
            ].map((review) => (
              <motion.div
                key={review.id}
                className="bg-gray-50 p-6 rounded-xl shadow"
                variants={scaleIn}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={`https://images.unsplash.com/${review.img}`}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1,2,3,4,5].map((s) => (
                        <motion.div
                          key={s}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: s * 0.1 }}
                        >
                          <FaStar className="text-yellow-500 text-sm" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaQuoteLeft className="text-blue-600 text-2xl mb-3" />
                </motion.div>
                <p className="text-gray-700">
                  "SkillzRevo LMS makes learning extremely easy. The course content,
                   projects, and assignments helped me upgrade my skills fast."
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------ FAQ SECTION ------------------ */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: "How do I log in to SkillzRevo LMS?",
                a: "Click the 'Go to Dashboard' button above. Log in using your registered email and password."
              },
              {
                q: "How do I access my course materials?",
                a: "After logging in, go to My Courses → Select your enrolled program → Start Learning."
              },
              {
                q: "Can I download my certificate?",
                a: "Yes. After completing your course, go to Dashboard → Certificates."
              },
              {
                q: "What if I forget my password?",
                a: "Use the 'Forgot Password' option on the login page to reset your credentials."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-5 rounded-lg shadow"
                variants={fadeInUp}
                whileHover={{ 
                  x: 10,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="font-semibold text-lg">{item.q}</h3>
                <p className="text-gray-600 mt-2">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}