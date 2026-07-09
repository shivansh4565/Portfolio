const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">

      {/* Left Aurora */}
      <div className="absolute -top-52 -left-56 h-[750px] w-[750px] rounded-full bg-violet-600/12 blur-[220px]" />

      {/* Right Aurora */}
      <div className="absolute top-40 -right-56 h-[750px] w-[750px] rounded-full bg-fuchsia-600/12 blur-[220px]" />

      {/* Bottom Center */}
      <div className="absolute bottom-[-250px] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[240px]" />

      {/* Small Accent */}
      <div className="absolute top-[35%] left-[22%] h-72 w-72 rounded-full bg-pink-500/8 blur-[170px]" />

      {/* Small Accent */}
      <div className="absolute bottom-[20%] right-[18%] h-80 w-80 rounded-full bg-violet-500/8 blur-[180px]" />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.12) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

    </div>
  );
};

export default Background;
