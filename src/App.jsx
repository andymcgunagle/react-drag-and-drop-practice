import Circle from "./components/Circle.jsx";
import Draggable from "./components/Draggable.jsx";
import DropZone from "./components/DropZone.jsx";

export default function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold">
        React Drag and Drop Practice
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <DropZone additionalStyles="border-red-500">
          <Draggable id="green-circle">
            <Circle additionalStyles="bg-green-500">
              Green
            </Circle>
          </Draggable>
        </DropZone>

        <DropZone additionalStyles="border-blue-500">
          <Draggable id="blue-circle">
            <Circle additionalStyles="bg-blue-500">
              Blue
            </Circle>
          </Draggable>
        </DropZone>

        <DropZone additionalStyles="border-yellow-500">
          <Draggable id="red-circle">
            <Circle additionalStyles="bg-red-500">
              Red
            </Circle>
          </Draggable>
        </DropZone>

        <DropZone additionalStyles="border-purple-500">
          <Draggable id="yellow-circle">
            <Circle additionalStyles="bg-yellow-500">
              Yellow
            </Circle>
          </Draggable>
        </DropZone>

        <DropZone additionalStyles="border-green-500"></DropZone>

        <DropZone additionalStyles="border-orange-500"></DropZone>
      </div>
    </div>
  );
};