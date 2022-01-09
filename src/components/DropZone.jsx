export default function DropZone({ additionalStyles, children }) {

  const dropHandler = e => {
    e.preventDefault();
    const draggableId = e.dataTransfer.getData("draggableId");
    const draggable = document.getElementById(draggableId);
    e.target.appendChild(draggable);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={dropHandler}
      className={`flex justify-center items-center h-[10rem] w-[10rem] border-4 border-dotted ${additionalStyles}`}
    >
      {children}
    </div >
  );
};