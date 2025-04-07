import React from "react";
// import Image from "next/image";
import '../styles/About.css';

const AboutUs = () => {
  return (
    <div className="container">
      {/* About Us Title Section */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About HRDC Karnali Province</h1>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
      </div>

      {/* Introduction Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Extending Care to Nepal's Remote Regions</h2>
            <p className="text-gray-700 mb-4">
              The Hospital and Rehabilitation Centre for Disabled Children (HRDC) Karnali Province office was
              established to extend our specialized healthcare services to one of Nepal's most remote and underserved
              regions. As a vital extension of HRDC Nepal's mission, our Karnali office focuses on identifying,
              treating, and rehabilitating children with disabilities in this mountainous province.
            </p>
            <p className="text-gray-700">
              Operating since 2018, our provincial center serves as a lifeline for families who previously had to travel
              long distances to access specialized care for their children. We bring HRDC's expertise and compassionate
              approach directly to the communities that need it most.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="HRDC Karnali Province Office"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
