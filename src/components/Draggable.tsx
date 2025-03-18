"use client";

import React, { ReactNode } from "react";

export type DraggableProps = {
  children: ReactNode;
};

const Draggable = ({ children }: DraggableProps) => {
  return <div draggable>{children}</div>;
};

export default Draggable;
