import { useState } from "react";
import { kanbanData } from "../data/kanbanData";

const Kanban = () => {
  const [data, setData] = useState(kanbanData);

  const [dragging, setDragging] = useState(null);
  const [draggingOver, setDraggingOver] = useState(null);

  const onDrag = (column, task) => {
    setDragging({ column, task });
  };

  const onDragOver = (e, column) => {
    e.preventDefault();
    setDraggingOver(column);
  };

  const onDrop = (destinationColumn) => {
    if (dragging.column === destinationColumn) {
      return;
    }

    setData({
      ...data,
      // Remove task from source column
      [dragging.column]: data[dragging.column].filter(
        (task) => task.id !== dragging.task.id
      ),
      // Add task to destination column
      [destinationColumn]: [
        ...data[destinationColumn],
        dragging.task,
      ],
    });
    setDragging(null);
    setDraggingOver(null);
  };

  const onDragLeave = (e) => {
    // Check if we're leaving the column and not entering a child element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDraggingOver(null);
    }
  };

  const onDragEnd = () => {
    // Reset dragging state if drag ends without a drop
    setDraggingOver(null);
  };

  return (
    <div className="flex gap-3 max-h-screen">
      {Object.entries(data).map(([column, tasks]) => (
        <div
          className={`flex flex-col gap-4 border border-gray-300 p-2 rounded w-60 ${
            draggingOver === column
              ? "bg-blue-50"
              : "bg-gray-50"
          }`}
          key={column}
          onDragOver={(e) => onDragOver(e, column)}
          onDrop={() => onDrop(column)}
          onDragLeave={onDragLeave}
        >
          <div className="bg-white border border-gray-300 p-2 rounded font-semibold">
            {column}
          </div>
          <div className="bg-white flex flex-col gap-2 overflow-y-auto">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="border border-gray-300 rounded shadow p-4 flex flex-col gap-2 cursor-move h-30"
                draggable
                onDrag={() => onDrag(column, task)}
                onDragEnd={onDragEnd}
              >
                <div className="text-sm flex-1 overflow-hidden line-clamp-3 text-ellipsis">
                  {task.description}
                </div>
                <div className="border-t truncate border-gray-200 text-xs font-bold pt-1">
                  {task.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kanban;
