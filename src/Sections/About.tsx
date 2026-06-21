const About = () => {
  return (
    <div className="mb-10">
      <div>
        <div className="flex items-center pb-6 md:py-3 md:p-6 gap-3">
          <span className="text-primary-500 font-normal">01. </span>
          <h3 className="">About me</h3>
          <div className="animate-wiggle duration-200 animate-infinite">👋</div>
        </div>
        <div className="border border-green-800 p-3 md:p-6 rounded-lg">
          <span className="">
            I'm a Full-stack Developer passionate about building fast, scalable,
            and user-friendly web applications. With experience in Laravel,
            React, Next.js, and modern cloud technologies, I enjoy turning ideas
            into real products that solve practical problems.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
