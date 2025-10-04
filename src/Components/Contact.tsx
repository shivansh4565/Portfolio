import React from 'react';
import type { FormEvent } from 'react';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "51876399-ca9b-4820-ada2-9729b5aa883a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-5xl font-extrabold mb-6">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              talk
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            I'm currently available to take on new projects, so feel free to send me a message
            about anything that you want me to work on. You can contact anytime.
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📧</span>
              <span>codewithshivansh27@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <span>+91 84330 55364</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <span>Greater Noida, India</span>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label className="block text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full bg-gray-900 text-white text-lg rounded-xl px-6 py-4 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full bg-gray-900 text-white text-lg rounded-xl px-6 py-4 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Write your message here</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              required
              className="w-full bg-gray-900 text-white text-lg rounded-xl px-6 py-4 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-orange-400 text-white text-lg font-semibold px-8 py-4 rounded-full transition-transform hover:scale-105"
          >
            Submit now
          </button>

          {result && (
            <p className="mt-4 text-center text-sm text-green-400">{result}</p>
          )}
        </form>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-24 border-t border-white/20 pt-10 flex flex-col md:flex-row items-center justify-between text-base text-white/80 gap-4">
        <p>© 2025 Shivansh Saxena. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Term of Services</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Connect with me</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
