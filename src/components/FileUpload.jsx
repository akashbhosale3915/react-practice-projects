import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { MdCloudUpload } from "react-icons/md";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadLocation, setUploadLocation] = useState("");

  const handleFileSelect = (e) => {
    setErrors([]);
    setUploadLocation("");
    const files = Array.from(e.target.files);
    const finalFiles = [];
    const maxSize = 5 * 1024 * 1024; //5MB
    const validTypes = ["image/jpeg", "image/png"];
    for (const file of files) {
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => [
          ...prev,
          `${file.name} is not of valid type`,
        ]);
        continue;
      }
      if (file.size > maxSize) {
        setErrors((prev) => [
          ...prev,
          `${file.name} exceeds 5MB limit`,
        ]);
        continue;
      }
      finalFiles.push(file);
    }
    setFiles(finalFiles);
  };

  const handleFileUpload = async () => {
    try {
      setUploading(true);
      const formData = new FormData();
      files?.forEach((file) => {
        formData.append("file", file);
      });

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        setUploading(false);
        setErrors((prev) => [
          ...prev,
          "Failed to upload files. Please try again.",
        ]);
      }
      const result = await response.json();
      console.log(result);
      if (result?.location) {
        setUploadLocation(result.location);
      }
      setUploading(false);
    } catch (error) {
      setUploading(false);
      setErrors((prev) => [...prev, error.message]);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <label
          htmlFor="file"
          className="flex flex-col items-center cursor-pointer"
        >
          <MdCloudUpload size={30} />
          <p>Select Files</p>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
        <button
          className="border border-gray-300 flex items-center justify-center w-20 p-2 rounded-md my-2 disabled:cursor-not-allowed"
          onClick={handleFileUpload}
          disabled={uploadLocation || files.length === 0}
        >
          {uploading ? (
            <ImSpinner2 className="animate-spin" />
          ) : (
            "Upload"
          )}
        </button>
        {files.length > 0 && (
          <div className="space-y-2 my-4 self-start">
            <h3 className="font-bold">Selected Files</h3>
            {files.map((file, index) => (
              <div
                key={file.name}
                className="text-xs text-green-600"
              >
                {file.name}
              </div>
            ))}
          </div>
        )}
        {errors.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-bold">Errors</h3>
            {errors.map((error, index) => (
              <div
                key={index}
                className="text-xs text-red-400"
              >
                {error}
              </div>
            ))}
          </div>
        )}
        {uploadLocation && (
          <div>
            <h3 className="font-bold mb-2">File URL</h3>
            <a
              className="text-xs underline text-blue-700"
              href={uploadLocation}
              target="_blank"
            >
              {uploadLocation}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
