import React from "react";
import type { FormEvent } from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "51876399-ca9b-4820-ada2-9729b5aa883a"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully.");
        form.reset();
      } else {
        setResult(data.message);
      }
    } catch (err) {
      console.error(err);
      setResult("Something went wrong.");
    }

    setLoading(false);
  };
  return (
  <section
    id="contact"
    className="relative overflow-hidden bg-transparent py-28 text-white"
  >
    {/* Soft Background Glow */}

    <div className="absolute -top-32 -left-20 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[160px]" />

    <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-600/15 blur-[160px]" />

    <div className="relative z-10 mx-auto max-w-7xl px-6">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
          CONTACT
        </span>

        <h2 className="mt-6 text-5xl font-bold">

          Let's{" "}

          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Build Something Amazing
          </span>

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          I'm actively looking for AI/ML Engineer,
          Generative AI, Agentic AI and
          Full Stack Developer opportunities.

          Whether you have an exciting project,
          internship or full-time role,
          I'd love to connect.
        </p>

      </div>

      {/* Main Layout */}

      <div className="mt-20 grid gap-12 lg:grid-cols-2">

        {/* LEFT */}

        <div className="space-y-8">

          {/* Availability */}

          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-6 backdrop-blur-xl">

            <h3 className="text-2xl font-semibold text-emerald-400">
              🟢 Available for Opportunities
            </h3>

            <p className="mt-3 leading-7 text-zinc-300">
              Open to Full-Time, Internship,
              AI/ML Engineer,
              Generative AI,
              Agentic AI,
              and Full Stack Developer roles.
            </p>

          </div>

          {/* Contact Cards */}

          <div className="space-y-5">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <h4 className="text-lg font-semibold text-violet-400">
                📧 Email
              </h4>

              <p className="mt-2 text-zinc-300">
                shivanshsaxena108@gmail.com
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <h4 className="text-lg font-semibold text-violet-400">
                📱 Phone
              </h4>

              <p className="mt-2 text-zinc-300">
                +91 84330 55364
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

              <h4 className="text-lg font-semibold text-violet-400">
                📍 Location
              </h4>

              <p className="mt-2 text-zinc-300">
                Greater Noida, Uttar Pradesh, India
              </p>

            </div>

          </div>

          {/* Social Links */}

          <div className="flex flex-wrap gap-4">

            <a
              href="https://github.com/shivansh4565"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 transition-all duration-300 hover:border-violet-400/50 hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/s4565"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 transition-all duration-300 hover:border-violet-400/50 hover:bg-white/10"
            >
              LinkedIn
            </a>

          </div>

          {/* Resume Buttons */}

          <div className="flex flex-wrap gap-4">

            <a
              href="/Shivansh_Saxena_aiml.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              🤖 AI/ML Resume
            </a>

            <a
              href="/Shivansh_Saxena_Fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold transition-all duration-300 hover:border-violet-400/50 hover:bg-white/10"
            >
              💻 Full Stack Resume
            </a>

          </div>

        </div>

        {/* RIGHT */}

        {/* RIGHT */}

<div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

  <form
    onSubmit={onSubmit}
    className="space-y-6"
  >

    {/* Name */}

    <div>
      <label className="mb-2 block text-zinc-300">
        Full Name
      </label>

      <input
        type="text"
        name="name"
        required
        placeholder="John Doe"
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-zinc-900/60
          px-5
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-violet-400
          focus:ring-2
          focus:ring-violet-400/20
        "
      />
    </div>

    {/* Email */}

    <div>
      <label className="mb-2 block text-zinc-300">
        Email Address
      </label>

      <input
        type="email"
        name="email"
        required
        placeholder="john@example.com"
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-zinc-900/60
          px-5
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-violet-400
          focus:ring-2
          focus:ring-violet-400/20
        "
      />
    </div>

    {/* Subject */}

    <div>
      <label className="mb-2 block text-zinc-300">
        Subject
      </label>

      <input
        type="text"
        name="subject"
        placeholder="AI Project • Internship • Hiring"
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-zinc-900/60
          px-5
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-violet-400
          focus:ring-2
          focus:ring-violet-400/20
        "
      />
    </div>

    {/* Message */}

    <div>
      <label className="mb-2 block text-zinc-300">
        Message
      </label>

      <textarea
        name="message"
        rows={6}
        required
        placeholder="Tell me about your project, internship, collaboration or hiring opportunity..."
        className="
          w-full
          resize-none
          rounded-xl
          border
          border-white/10
          bg-zinc-900/60
          px-5
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-violet-400
          focus:ring-2
          focus:ring-violet-400/20
        "
      />
    </div>

    {/* Submit */}

    <button
      type="submit"
      disabled={loading}
      className="
        w-full
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        via-fuchsia-600
        to-pink-500
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_40px_rgba(139,92,246,.25)]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading ? "Sending Message..." : "Send Message 🚀"}
    </button>

    {/* Status */}

    {result && (
      <div
        className={`rounded-xl border p-4 text-center font-medium ${
          result.includes("success")
            ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-400"
            : "border-red-400/30 bg-red-500/10 text-red-400"
        }`}
      >
        {result}
      </div>
    )}

 </form>

</div>   {/* End RIGHT */}

</div>   {/* <-- ADD THIS (closes lg:grid-cols-2) */}

{/* Footer */}

<footer className="mt-24 border-t border-white/10 pt-12">

  <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

    {/* Left */}

    <div>

      <h3 className="text-3xl font-bold">

        Shivansh{" "}

        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">

          Saxena

        </span>

      </h3>

      <p className="mt-3 max-w-lg leading-7 text-zinc-400">

        AI/ML Engineer • Generative AI • Agentic AI • Full Stack Developer

        <br />

        Passionate about building intelligent AI systems,
        scalable web applications and production-ready software.

      </p>

    </div>

    {/* Right */}

    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="https://github.com/shivansh4565"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          px-6
          py-3
          transition-all
          duration-300
          hover:border-violet-400/50
          hover:bg-white/10
        "
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/s4565"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          px-6
          py-3
          transition-all
          duration-300
          hover:border-violet-400/50
          hover:bg-white/10
        "
      >
        LinkedIn
      </a>

      <a
        href="/Shivansh_Saxena_aiml.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          via-fuchsia-600
          to-pink-500
          px-6
          py-3
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
        "
      >
        🤖 AI/ML Resume
      </a>

      <a
        href="/Shivansh_Saxena_Fullstack.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          px-6
          py-3
          font-semibold
          transition-all
          duration-300
          hover:border-violet-400/50
          hover:bg-white/10
        "
      >
        💻 Full Stack Resume
      </a>

    </div>

  </div>

  {/* Bottom */}

  <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

    <p>
      © {new Date().getFullYear()} Shivansh Saxena. All Rights Reserved.
    </p>

    <p>
      Designed & Developed with ❤️ using React, TypeScript & Tailwind CSS
    </p>

  </div>

</footer>

    </div>

  </section>
);

};

export default Contact;
