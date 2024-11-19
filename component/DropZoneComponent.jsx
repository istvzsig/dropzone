import { useDropZone } from "./hook";
import "./drop-zone.css";

export default function DropZoneComponent() {
  const {
    isDragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop
  } = useDropZone();

  return (
    isDragOver && (
      <div
        className="drop-zone"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        // Add asyncCallback function to process the result 
        onDrop={(e) => handleDrop(e, async (params) => {
          console.log({ e, params });
        })}
      >
        <input type="file" multiple hidden />
      </div>
    )
  );
}
