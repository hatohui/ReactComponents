import Draggable from "@/components/Draggable";
import Droppable from "@/components/Droppable";

const page = () => {
  return (
    <>
      <Droppable cols={2} rows={4}>
        <Draggable>Hello world</Draggable>
        <Draggable>What da fak</Draggable>
        <Draggable>third one</Draggable>
      </Droppable>
    </>
  );
};

export default page;
