
const Hero = () => {
  return (
<>
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
        <video
          src="/vid2.mp4" // video in public folder
          autoPlay
          loop
          muted
          className="w-80 h-48 rounded-lg mb-6 border-gray-800 object-cover"
        />


      <h1 className="text-5xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          I'm Shivansh Saxena ,
        </span>{' '}
        <span className="text-white">Fullstack developer & data Analyst.</span>
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mb-8">
        I am a Fullstack developer & data Analyst from Greater Noida, India with 1+ years of experience in building web applications and data analysis. I specialize in creating dynamic, responsive, and user-friendly websites that help businesses achieve their goals.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        {/* <Link to="/contact">
          <div className="bg-gradient-to-r from-purple-600 to-orange-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
            Connect with me
          </div>



        </Link> */}


          <a
            href="#contact"
          >
            <div className="bg-gradient-to-r from-purple-600 to-orange-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
              Connect with me
            </div>
          </a>

          <a
            href="/resume.pdf" 
            target="_blank" // Opens in new tab
            rel="noopener noreferrer"
          >
            <div className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition cursor-pointer">
              My Resume
            </div>
          </a>

      </div>
    </section>
  
    </>
  );
};

export default Hero;
