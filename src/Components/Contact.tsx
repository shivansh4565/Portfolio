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
      className="relative overflow-hidden bg-[#050505] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 -left-20 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            CONTACT
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Let's{" "}

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Build Something Amazing
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm actively looking for AI/ML Engineer, Generative AI,
            Agentic AI and Full Stack Developer opportunities.
            Whether you have an exciting project, internship,
            or simply want to connect, I'd love to hear from you.
          </p>

        </div>

        {/* Main Layout */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div className="space-y-8">

            {/* Availability */}

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6">

              <h3 className="text-2xl font-semibold text-green-400">
                🟢 Available
              </h3>

              <p className="mt-3 text-gray-300">
                Open to Full-Time, Internship,
                AI/ML Engineer, GenAI Engineer,
                Agentic AI and Full Stack roles.
              </p>

            </div>

            {/* Contact Cards */}

            <div className="space-y-5">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <h4 className="text-lg font-semibold text-purple-400">
                  📧 Email
                </h4>

                <p className="mt-2 text-gray-300">
                  shivanshsaxena108@gmail.com
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <h4 className="text-lg font-semibold text-purple-400">
                  📱 Phone
                </h4>

                <p className="mt-2 text-gray-300">
                  +91 84330 55364
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <h4 className="text-lg font-semibold text-purple-400">
                  📍 Location
                </h4>

                <p className="mt-2 text-gray-300">
                  Greater Noida, Uttar Pradesh, India
                </p>

              </div>

            </div>

            {/* Social Buttons */}

            <div className="flex flex-wrap gap-4">

              <a
                href="https://github.com/shivansh4565"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 hover:border-purple-500 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/s4565"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 hover:border-purple-500 transition"
              >
                LinkedIn
              </a>

              <a
                href="/Shivansh_Saxena_Resume.pdf"
                target="_blank"
                className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold"
              >
                Resume
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <form
              onSubmit={onSubmit}
              className="space-y-6"
            >

              <div>

                <label className="mb-2 block text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-purple-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-purple-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-purple-500"
                />

              </div>

                            <div>

                <label className="mb-2 block text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-purple-500 resize-none"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                via-pink-600
                to-orange-500
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_35px_rgba(168,85,247,.35)]
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <div
                  className={`
                  rounded-xl
                  border
                  p-4
                  text-center
                  ${
                    result.includes("success")
                      ? "border-green-500/30 bg-green-500/10 text-green-400"
                      : "border-red-500/30 bg-red-500/10 text-red-400"
                  }
                `}
                >
                  {result}
                </div>
              )}

            </form>

          </div>

        </div>

        {/* Footer */}

        <footer className="mt-24 border-t border-white/10 pt-10">

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>

              <h3 className="text-2xl font-bold">
                Shivansh{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Saxena
                </span>
              </h3>

              <p className="mt-2 text-gray-500">
                AI/ML Engineer • Generative AI • Agentic AI • Full Stack Developer
              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-5">

              <a
                href="https://github.com/shivansh4565"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:border-purple-500 hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/s4565"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:border-purple-500 hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="/Shivansh_Saxena_Resume.pdf"
                target="_blank"
                className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:border-purple-500 hover:bg-white/10"
              >
                Resume
              </a>

              <a
                href="mailto:shivanshsaxena108@gmail.com"
                className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:border-purple-500 hover:bg-white/10"
              >
                Email
              </a>

            </div>

          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Shivansh Saxena. All rights reserved.
            </p>

            <p>
              Built with React • TypeScript • Tailwind CSS
            </p>

          </div>

        </footer>

      </div>

    </section>
  );
};

export default Contact;
