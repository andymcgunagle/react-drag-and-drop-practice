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
            <p className="h-[75%] w-[75%] flex justify-center items-center text-gray-50 bg-green-500 rounded-full">
              Green
            </p>
          </Draggable>
        </DropZone>

        <DropZone additionalStyles="border-blue-500">
          <Draggable id="blue-circle">
            <p className="h-[75%] w-[75%] flex justify-center items-center text-gray-50 bg-blue-500 rounded-full">
              Blue
            </p>
          </Draggable>
        </DropZone>

        <DropZone additionalStyles="border-yellow-500">
          <Draggable id="red-circle">
            <p className="h-[75%] w-[75%] flex justify-center items-center text-gray-50 bg-red-500 rounded-full">
              Red
            </p>
          </Draggable>
        </DropZone>

        <DropZone additionalStyles="border-purple-500">
          <Draggable id="yellow-circle">
            <p className="h-[75%] w-[75%] flex justify-center items-center text-gray-50 bg-yellow-500 rounded-full">
              Yellow
            </p>
          </Draggable>
        </DropZone>

        <DropZone additionalStyles="border-green-500"></DropZone>

        <DropZone additionalStyles="border-orange-500"></DropZone>
      </div>
    </div>
  );
};