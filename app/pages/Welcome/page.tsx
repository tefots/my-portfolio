import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      {/* First Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="relative w-full h-screen">
          <Image
            src="/me2.jpg"
            layout="fill"
            alt="Full-Screen Header"
            className="w-full h-full object-cover opacity-80"
            priority // Optimizes image loading
          />

          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="max-w-3xl">
            <h1 className="text-white font-poppins text-4xl md:text-6xl font-light text-opacity-90 leading-tight fade-in">
            Hi, I am Tefo Tsiu <br />
            UI/UX Designer and Frontend Developer
            </h1>


              <button
                className="mt-8 md:mt-12 py-3 px-8 bg-purple-700 text-white rounded-2xl text-lg md:text-xl font-bold hover:bg-purple-600 transition-all duration-300 ease-in-out animate-bounce"
                aria-label="Download my CV"
                >
                Download My CV
                </button>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center">
            <Image
              src="/about.jpg"
              width={500}
              height={500}
              alt="About Tefo Tsiu"
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I'm a passionate UI/UX designer and frontend developer with a knack for crafting user-friendly and visually appealing digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My goal is to bridge the gap between design and functionality, ensuring that users have a seamless experience while interacting with products.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What I Do</h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            I specialize in a variety of digital solutions, offering services that include web design, mobile app development, poster designs, and more.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Web Design</h3>
              <p className="text-gray-700">
                Crafting visually appealing and user-friendly website designs.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Website Development</h3>
              <p className="text-gray-700">
                Developing responsive and functional websites to meet your business needs.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Mobile App Development</h3>
              <p className="text-gray-700">
                Creating intuitive mobile applications that provide great user experiences.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Poster Design</h3>
              <p className="text-gray-700">
                Designing eye-catching posters that effectively communicate your message.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Program Design</h3>
              <p className="text-gray-700">
                Developing structured and efficient program designs for your projects.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">More Services</h3>
              <p className="text-gray-700">
                I offer a wide range of digital services tailored to meet your needs.
              </p>
              <Link href="/services"  className="text-purple-700 font-bold hover:underline" passHref>
                 View More..
                
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white text-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My Work / Portfolio
          </h2>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-100 p-6 shadow-lg rounded-xl">
              <h3 className="text-2xl font-bold mb-4">NewHorizone Website</h3>
              <p className="text-gray-700 mb-4">
                A website for a Norwegian company focused on delivering tech solutions globally.
              </p>
              <Link
                href="https://newhorizone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 font-bold hover:underline"
              >
                View Project
              </Link>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-100 p-6 shadow-lg rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Shared Service Facility Website</h3>
              <p className="text-gray-700 mb-4">
                A platform designed for a company based in Maseru, Lesotho, offering a shared service facility.
              </p>
              <Link
                href="https://sharedservicefacility.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 font-bold hover:underline"
              >
                View Project
              </Link>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-100 p-6 shadow-lg rounded-xl">
              <h3 className="text-2xl font-bold mb-4">To-do List Mobile App</h3>
              <p className="text-gray-700 mb-4">
                A mobile app designed to help users manage their daily tasks efficiently.
              </p>
              <Link
                href="https://github.com/tefo-tsiu/todo-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 font-bold hover:underline"
              >
                View Project
              </Link>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-100 p-6 shadow-lg rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Doctor Appointment Web App</h3>
              <p className="text-gray-700 mb-4">
                A web application for scheduling and managing doctor appointments.
              </p>
              <Link
                href="https://github.com/tefo-tsiu/doctor-appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 font-bold hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </>
    
  );
}
