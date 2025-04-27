import { useMemo, useState } from "react";
import { FaFile } from "react-icons/fa";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";

const FileTree = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isFolder = item?.type === "folder";
  const hasChildren = isFolder && item.children.length > 0;

  const displayIcon = useMemo(() => {
    if (isFolder && !isOpen)
      return <FcFolder className="icon" />;
    if (isFolder && isOpen)
      return <FcOpenedFolder className="icon" />;
    return <FaFile className="icon" />;
  }, [isFolder, isOpen]);

  const handleFolderClick = () => {
    if (isFolder) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      style={{
        marginLeft: `${level * 10}px`,
        marginBlock: "10px",
      }}
    >
      <div
        className={`flex items-center gap-2 ${
          isFolder && "cursor-pointer"
        }`}
        onClick={handleFolderClick}
      >
        {displayIcon}
        {item?.name}
      </div>
      {isOpen && (
        <div>
          {hasChildren &&
            item.children.map((child, index) => {
              return (
                <FileTree
                  item={child}
                  level={level + 1}
                  key={index}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default FileTree;
