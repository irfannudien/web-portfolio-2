import ScrambleText from "../../Elements/ScrambleText";

const ProjectHeader = () => (
  <div className="w-full text-center flex flex-col gap-4">
    <ScrambleText
      text="Project"
      className="text-2xl md:text-5xl tracking-widest text-white font-majorMono font-bold"
    />
    <p className="text-lg text-gray-300 max-w-2xl mx-auto tracking-wide">
      Some of my projects, I've worked on - simple, clean, and made with style.
      From landing pages to digital invites.
    </p>
  </div>
);

export default ProjectHeader;
