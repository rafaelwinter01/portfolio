"use client";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

function ProjectCardMock({ reversed = false }) {
  const techs = new Array(4);
  return (
    <div
      className={cn(
        "border border-slate-600 bg-slate-800 rounded-lg w-full max-w-4xl h-96 md:h-72 flex items-center justify-center md:p-6 parent shadow-md shadow-slate-600",
        reversed && "flex-row-reverse"
      )}
    >
      <div className="h-full flex flex-col justify-between gap-2 items-center p-4">
        <h1 className="text-2xl font-semibold">
          <Skeleton className="w-[200px] h-8 rounded-full" />
        </h1>
        <Separator orientation="horizontal" className="w-full bg-slate-700" />
        <div className="w-full flex flex-col flex-grow justify-center items-center gap-2 transition-all child">
          <div className="flex flex-col w-full h-full justify-center items-center gap-2">
            <Skeleton className="w-full h-3 rounded" />
            <Skeleton className="w-full h-3 rounded" />
            <Skeleton className="w-full h-3 rounded" />
          </div>
          <div className="max-w-lg flex gap-1 flex-wrap items-center justify-center">
            {techs.map((_, key) => (
              <Badge
                key={key}
                variant="outline"
                className="dark bg-slate-600"
              ></Badge>
            ))}
          </div>
          <Separator orientation="horizontal" className="w-full bg-slate-700" />
        </div>
        <div className="flex-grow-0 flex gap-2">
          <Skeleton className="w-32 md:w-40 h-6 rounded-full" />
          <Skeleton className="w-32 md:w-40 h-6 rounded-full" />
        </div>
      </div>
      <div className="absolute md:relative h-full flex-shrink-0 flex items-center justify-center p-1 opacity-25 md:opacity-100 transition-all image">
        <div className="w-full md:w-max p-1 md:p-3 border border-slate-500 rounded transition-all">
          <Skeleton className="w-[270px] h-[210px] rounded" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCardMock;
