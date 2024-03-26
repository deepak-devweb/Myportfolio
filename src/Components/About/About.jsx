import React from 'react'

function About() {
    return (
        
            <div className="about mt-24  p-4 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:mr-8 mb-4 md:mb-0">
                    <img src="/path/to/your/photo.jpg" alt="Team Photo" className="rounded-full w-48 h-48 md:w-64 md:h-64" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 gap-6 text-slate-400">About</h1>
                    <h2 className="text-lg md:text-xl font-bold mb-2">Our Story</h2>
                    <p className="mb-4">Welcome to our portfolio website! Here's a little bit about who we are and what we do.</p>
                    <p className=" mb-4">We are a team of passionate individuals dedicated to creating beautiful and functional websites.</p>
                    <p className=" mb-4">Our mission is to help businesses and individuals establish a strong online presence through stunning web design and innovative development solutions.</p>
                    <p className=" mb-4">With years of experience in the field, we strive to deliver high-quality results that exceed our clients' expectations.</p>
                    <p className="">Thank you for visiting our website. Feel free to reach out to us if you have any questions or inquiries!</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="text-lg md:text-xl font-bold mb-2">Frontend Developer</h2>
                  <p className=" mb-4">Are you a frontend developer looking to join our team? We are always on the lookout for talented individuals passionate about creating amazing user experiences. Reach out to us to learn more about potential opportunities!</p>
                </div>
              </div>
            </div>
          );
    
}

export default About
