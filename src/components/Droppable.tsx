"use client";
import React, { ReactNode } from "react";

export type DroppableHandlerProps<T> = {
  event?: React.DragEvent<HTMLDivElement>;
  data?: T;
};

export type DroppableProps<T> = {
  className?: string;
  children?: ReactNode;
  onDrop?: (params: DroppableHandlerProps<T>) => void;
  onDragOver?: (params: DroppableHandlerProps<T>) => void;
  onDragEnter?: (params: DroppableHandlerProps<T>) => void;
  onDragLeave?: (params: DroppableHandlerProps<T>) => void;
};

const Droppable = <T,>({
  className = "",
  children,
  onDrop,
  onDragOver,
  onDragEnter,
  onDragLeave,
}: DroppableProps<T>) => {
  const handleEvent = (
    event: React.DragEvent<HTMLDivElement>,
    callBack?: (params: DroppableHandlerProps<T>) => void
  ) => {
    event.preventDefault();
    const jsonData = event.dataTransfer.getData("application/json");
    if (jsonData) {
      const data: T = JSON.parse(jsonData);
      callBack?.({ event, data });
    }
  };

  return (
    <div
      className={`${className}`}
      onDragOver={(event) => handleEvent(event, onDragOver)}
      onDrop={(event) => handleEvent(event, onDrop)}
      onDragEnter={(event) => handleEvent(event, onDragEnter)}
      onDragLeave={(event) => handleEvent(event, onDragLeave)}
    >
      {children}
    </div>
  );
};

export default Droppable;
