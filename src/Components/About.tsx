
const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      {/* Heading */}
      <h2 className="relative text-4xl font-bold text-center mb-12 transition-transform duration-300 ease-in-out hover:scale-105">
        About{' '}
        <span className="relative inline-block z-10 text-white">
          me
          {/* Animated Blob Behind "me" */}
          <span
            className="absolute -inset-2 -z-20 rounded-sm blur-md animate-blob bg-gradient-to-r from-purple-500 to-pink-500"
          ></span>
        </span>
      </h2>

      <div className="md:flex md:items-start md:gap-12">
        {/* Left: Image / Video */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="/img2.jpeg"
            // height={300}
            alt="Profile"
           
            className="w-full h-[94vh] rounded-xl object-cover border-4 border-gray-800"
          />
        </div>

        {/* Right: Text & Skills */}
        <div className=" md:w-2/3">
          <p className="mb-6 flex  text-gray-300 font-bold ">
            I am a skilled Full-Stack Developer and Data Analyst with extensive professional experience
            in building robust web applications and analyzing complex datasets. Throughout my career,
            I have collaborated with diverse organizations, delivering solutions that drive efficiency
            and actionable insights.
          </p>
          <p className="mb-6 text-gray-300 font-extrabold">
            My passion lies in bridging the gap between technology and data—crafting scalable
            applications while extracting meaningful insights to support informed decision-making.
            I approach every project with enthusiasm, precision, and a commitment to excellence.
          </p>

          {/* Skills */}
          <div className="space-y-4">
            <SkillBar skill="Python" level={90} />
            <SkillBar skill="React JS" level={95} />
            <SkillBar skill="JavaScript" level={85} />
            <SkillBar skill="Next JS" level={75} />
            <SkillBar skill="MongoDB" level={65} />
            <SkillBar skill="Express" level={87} />
            <SkillBar skill="Data visualization Libraries" level={75} />
          </div>

          {/* Stats */}
          <div className="flex mt-10  justify-between text-center">
            <div className="ml-[2vh]">
              <p className="text-5xl font-bold text-purple-500">1+</p>
              <p className="text-gray-400 uppercase">Years of Experience</p>
            </div >
            <div>
              <p className="text-5xl font-bold text-purple-500">10+</p>
              <p className="text-gray-400 uppercase">Projects Completed</p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};
type SkillBarProps = {
  skill: string;
  level: number;
};

const SkillBar = ({ skill, level }: SkillBarProps) => {
  return (
    <div className="group">
      <p className="mb-1">{skill}</p>
      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-90 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};


export default About;
