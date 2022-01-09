export default function Draggable({ id, children }) {

  const dragStartHandler = e => {
    e.dataTransfer.setData("draggableId", e.target.id);
    setTimeout(() => e.target.style.display = "none", 0);
  };

  return (
    <div
      draggable={true}
      id={id}
      onDragEnd={e => e.target.style.display = "flex"}
      onDragStart={dragStartHandler}
      onDragOver={e => e.stopPropagation()}
      className="h-full w-full flex justify-center items-center cursor-pointer"
    >
      {children}
    </div >
  );
};