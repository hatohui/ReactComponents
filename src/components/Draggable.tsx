"use client";

import React, { ReactNode } from "react";

export type DraggableProps<T> = {
  children: ReactNode;
  data?: T | unknown;
};

const Draggable = <T,>({ children, data }: DraggableProps<T>) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("application/json", JSON.stringify(data));
  };

  return (
    <div draggable onDragStart={handleDragStart}>
      {children}
    </div>
  );
};

export default Draggable;
