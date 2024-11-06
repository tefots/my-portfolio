"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import About from "@/app/components/About";

const skillAnimations = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 50 },
  }),
};

export default function Welcome() {
  return (
    <>
      <section>
        <div className="bg-gray-900 py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                  Hi, <br className="hidden md:block" />
                  <span className="text-indigo-500">I</span> Am
                  <span className="text-green-600"> Tefo Tsiu</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                  UI/UX Designer and Frontend Developer
                </p>
                <div className="flex gap-2">
                  <button
                    className="mt-8 md:mt-12 py-3 px-8 bg-purple-700 text-white rounded-2xl text-lg md:text-xl font-bold hover:bg-purple-600 transition-all duration-300 ease-in-out animate-bounce"
                    aria-label="Download my CV"
                  >
                    Download My CV
                  </button>
                  <button
                    className="mt-8 md:mt-12 py-3 px-8 bg-slate-600 text-white rounded-2xl text-lg md:text-xl font-bold hover:bg-purple-600 transition-opacity duration-300 ease-in-out animate-pulse"
                    aria-label="View CV"
                  >
                    View CV
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <Image
                  src="/me.png"
                  height={500}
                  width={500}
                  alt="Hero Image"
                  objectFit="cover"
                  className="rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
    
<section className="bg-white text-gray-900 py-16 px-6 md:px-12">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
    <p className="text-lg text-gray-700 mb-12 leading-relaxed">
      Some of the technologies and programming languages I am familiar with:
    </p>

    {/* Skills Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      {[
        { skill: "HTML5", percentage: 95 },
        { skill: "CSS", percentage: 95 },
        { skill: "JavaScript", percentage: 90 },
        { skill: "Next.js",  percentage: 88 },
        { skill: "React", percentage: 80 },
        { skill: "C++",  percentage: 60 },
        { skill: "TypeScript",  percentage: 78 },
      ].map((skillItem, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={skillAnimations}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-100 p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold mb-2">{skillItem.skill}</h3>
          <div className="w-full bg-gray-200 rounded-full mt-2">
            <div
              className={`bg-indigo-600 text-xs font-medium text-center text-white rounded-full h-4`}
              style={{ width: `${skillItem.percentage}%` }}
            >
              {skillItem.percentage}%
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* About Section */}
      <About />

      {/* What I Do Section */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-green-700"> What I</span> Do
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            I specialize in a variety of digital solutions, offering services that include web design, mobile app development, poster designs, and more.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Web Design",
              "Web Development",
              "Mobile App Development",
              "More Services",
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p className="text-gray-700">Description for {service}.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white text-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-green-700">My Work</span>
          </h2>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "NewHorizone Website",
                description:
                  "A website for a Norwegian company focused on delivering tech solutions globally.",
                image: "/special/code11.jpg",
                link: "https://newhorizone.com",
              },
              {
                title: "Shared Service Facility Website",
                description:
                  "A platform designed for a company based in Maseru, Lesotho, offering a shared service facility.",
                image: "/special/code2.jpg",
                link: "https://sharedservicefacility.com",
              },
              {
                title: "To-do List Mobile App",
                description:
                  "A mobile app designed to help users manage their daily tasks efficiently.",
                image: "/special/code3.jpg",
                link: "https://github.com/tefo-tsiu/todo-app",
              },
              {
                title: "Doctor Appointment Web App",
                description:
                  "A web application for scheduling and managing doctor appointments.",
                image: "/special/code4.jpg",
                link: "https://github.com/tefo-tsiu/doctor-appointment",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 p-6 shadow-lg rounded-xl"
              >
                <Image
                  src={project.image}
                  width={500}
                  height={300}
                  alt={project.title}
                  className="object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 font-bold hover:underline"
                >
                  View Project
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
