import React from "react";
import Image from "next/image";

export default function About(){

    return(
        <>
        <section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About me</h2>
                <p className="mt-4 text-gray-600 text-lg">

                My goal is to bridge the gap between design and functionality,
              ensuring that users have a seamless experience while interacting
              with products.
                </p>
                <div className="mt-8">
                    <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Connect with me
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <Image
                 src="/about.jpg"
                 height={400}
                 width={400}
                 alt="About Us Image"
                 className="object-cover rounded-lg shadow-md" />
            </div>
        </div>
    </div>
</section>
<div className=" ms-2 w-1/2 h-1">

</div>
 {/* <section className="bg-slate-500 text-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/about.jpg"
              width={500}
              height={500}
              alt="About Tefo Tsiu"
              className="object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I'm a passionate UI/UX designer and frontend developer with a
              knack for crafting user-friendly and visually appealing digital
              experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My goal is to bridge the gap between design and functionality,
              ensuring that users have a seamless experience while interacting
              with products.
            </p>
          </div>
        </div>
      </section> */}
        
        </>
    );
}