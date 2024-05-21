import React from "react";
import ProjectCardMock from "../../skeletons/ProjectCardMock";

function Projects() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl text-slate-100 font-semibold">PROJECTS</h1>
      <div className="p-10 w-full max-w-6xl flex flex-col items-center justify-center gap-6 text-white">
        <ProjectCardMock reversed={true} />
        <ProjectCardMock reversed={false} />
        <ProjectCardMock reversed={true} />
        <ProjectCardMock reversed={false} />
      </div>
    </main>
  );
}

export default Projects;
