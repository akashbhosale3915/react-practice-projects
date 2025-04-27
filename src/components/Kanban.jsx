import { useState } from "react";

const kanbanData = {
  Todo: [
    {
      id: 1,
      title: "Design Homepage",
      description:
        "Create a wireframe and mockup for the homepage.",
    },
    {
      id: 2,
      title: "Write API Documentation",
      description:
        "Document all endpoints for the user authentication API.",
    },
    {
      id: 7,
      title: "Research UI Libraries",
      description:
        "Explore popular UI libraries for React projects.",
    },
    {
      id: 8,
      title: "Plan Sprint Tasks",
      description:
        "Define tasks and goals for the next sprint.",
    },
    {
      id: 9,
      title: "Set Up Project Repository",
      description:
        "Initialize a Git repository and set up branch rules.",
    },
  ],
  InProgress: [
    {
      id: 3,
      title: "Develop Login Feature",
      description:
        "Implement the login functionality with JWT authentication.",
    },
    {
      id: 4,
      title: "Set Up CI/CD Pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
    },
    {
      id: 10,
      title: "Create User Profile Page",
      description:
        "Develop the user profile page with editable fields.",
    },
    {
      id: 11,
      title: "Integrate Payment Gateway",
      description:
        "Add support for Stripe payment processing.",
    },
    {
      id: 12,
      title: "Write Unit Tests",
      description:
        "Write unit tests for the authentication module.",
    },
  ],
  Done: [
    {
      id: 5,
      title: "Fix Navbar Bug",
      description:
        "Resolve the issue where the navbar overlaps with content on scroll.",
    },
    {
      id: 6,
      title: "Optimize Images",
      description:
        "Compress and optimize images for faster page load times.",
    },
    {
      id: 13,
      title: "Deploy Initial Version",
      description:
        "Deploy the first version of the application to production.",
    },
    {
      id: 14,
      title: "Set Up Analytics",
      description:
        "Integrate Google Analytics for tracking user behavior.",
    },
    {
      id: 15,
      title: "Update README",
      description:
        "Add setup instructions and project details to the README file.",
    },
  ],
};

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
