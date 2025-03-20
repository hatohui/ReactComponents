"use client";
import Draggable from "@/components/Draggable";
import Droppable, { DroppableHandlerProps } from "@/components/Droppable";
import { useState } from "react";

type ExampleData = {
  label: string;
  description: string;
};

const exampleData: ExampleData[] = [
  { label: "Hello", description: "I hate everyone" },
  { label: "World", description: "Nothing matters anyway" },
  { label: "Sunshine", description: "I love staying indoors" },
  { label: "Moonlight", description: "Darkness is my comfort" },
  { label: "Coffee", description: "Bitterness fuels my soul" },
  { label: "Monday", description: "The worst day of the week" },
  { label: "Friday", description: "Still not enough for happiness" },
  { label: "Music", description: "A distraction from reality" },
  { label: "Silence", description: "The loudest sound of all" },
  { label: "Dreams", description: "Fantasies that never come true" },
];

const Page = () => {
  const [loadedData, setLoadedData] = useState<ExampleData[]>(exampleData);

  const handleOnDrop = ({ data }: DroppableHandlerProps<ExampleData>) => {
    if (data)
      setLoadedData(loadedData.filter((each) => each.label != data.label));
  };

  const handleDropOverExisting = ({
    data,
  }: DroppableHandlerProps<ExampleData>) => {
    console.log(data);
  };

  return (
    <>
      <Droppable<ExampleData>
        className="h-5 w-12 border-2 m-2"
        onDrop={handleOnDrop}
        onDragOver={() => console.log("hovered over!")}
      />
      {loadedData.map((each, i) => (
        <Droppable<ExampleData> key={i} onDrop={handleDropOverExisting}>
          <Draggable data={each}>
            <div>{each.label}</div>
          </Draggable>
        </Droppable>
      ))}
    </>
  );
};

export default Page;
