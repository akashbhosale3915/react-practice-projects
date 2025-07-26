import { useToast } from "../hooks/useToast";

const Toastify = () => {
  const { groupedToasts } = useToast();

  return (
    <div>
      <div className="toast-container">
        {Object.entries(groupedToasts || {}).map(
          ([position, toasts]) =>
            toasts.map((toast, index) => (
              <Toast
                index={index}
                position={position}
                text={toast.text}
                type={toast.type}
                key={toast.id}
              />
            ))
        )}
      </div>
    </div>
  );
};

const Toast = ({
  type,
  text,
  position,
  index,
  removing,
}) => {
  const { positions } = useToast();
  const successClass = "bg-green-300";
  const errorClass = "bg-red-300";
  const sideDistance = 10;

  const positionClass = (() => {
    const formula = index * 50 + 10;
    switch (position) {
      case positions.bottomRight:
        return {
          right: sideDistance,
          bottom: formula,
        };
      case positions.bottomLeft:
        return {
          left: sideDistance,
          bottom: formula,
        };
      case positions.topLeft:
        return { left: sideDistance, top: formula };
      case positions.topRight:
        return { right: sideDistance, top: formula };
    }
  })();

  return (
    <div
      className={`fixed border w-96 rounded-sm text-white p-2.5 ${
        type === "success" ? successClass : errorClass
      } ${removing ? "toast-exit" : ""}`}
      style={{
        top: positionClass?.top,
        bottom: positionClass?.bottom,
        left: positionClass?.left,
        right: positionClass?.right,
      }}
    >
      {text + index}
    </div>
  );
};

export default Toastify;
