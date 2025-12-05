import React from "react";

const RowLine = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={"w-full relative h-10" + className}>
      <div className="w-full h-px bg-neutral-700 absolute top-1/2 -translate-y-1/2"></div>
      <p className="text-center font-semibold text-neutral-700 bg-background px-2 absolute left-1/2 -translate-x-1/2 translate-y-2">
        {title}
      </p>
    </div>
  );
};

export default RowLine;
