import React, { ReactNode } from "react";

export type DroppableProps = {
  cols?: number;
  rows?: number;
  bordered?: boolean;
  className?: string;
  children?: ReactNode;
};

const Droppable = ({
  cols = 1,
  rows,
  bordered = false,
  className = "",
  children,
}: DroppableProps) => {
  return (
    <div
      className={`grid ${className} ${bordered ? "border" : ""}`}
      style={{
        ...(cols && {
          gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
        }),
        ...(rows && { gridTemplateRows: `repeat(${rows}, minmax(0,1fr))` }),
      }}
    >
      {children}
    </div>
  );
};

export default Droppable;
