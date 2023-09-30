import React, { useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-toastify";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

const fileTypes = ["JPG", "PNG"];

function FileUpload({ name = "avatar", required = false, defaultValue }) {
  const [file, setFile] = useState(defaultValue);

  const handleChange = (file) => {
    const url = URL.createObjectURL(file);
    setFile(url);
  };

  const handleTypeError = () => {
    toast.error("Iltimos faqat JPG yoki PNG formatdagi rasmlarni tanlang", {
      theme: "colored",
      position: "top-center",
    });
  };

  const handleDelete = () => {
    setFile(null);
  };

  return (
    <div className="relative w-fit  ">
      <FileUploader
        handleChange={handleChange}
        name={name}
        types={fileTypes}
        dropMessageStyle={{
          backgroundColor: "white",
          color: "#303972",
          fontWeight: "700",
        }}
        fileOrFiles={file}
        required={required}
        onTypeError={handleTypeError}
        classes="upload-file w-fit h-fit"
        children={
          <div className="cursor-pointer w-[175px] h-[175px] rounded-[5px] border border-dashed border-lightColor flex items-center justify-center">
            {file ? (
              <img className="w-full h-full object-cover" src={file} alt="" />
            ) : (
              <p className="text-center !text-lightGrey text-[14px]">
                Drag and drop or click here to select file
              </p>
            )}
          </div>
        }
      />
      {file ? (
        <div className="absolute top-0 right-0 bg-red-500 translate-x-[50%] translate-y-[-50%] rounded-full border-[5px] border-white">
          <DeleteIcon
            onClick={() => {
              handleDelete();
            }}
            height={40}
            className="file-delete-icon cursor-pointer"
            width={40}
            fill="transparent"
            stroke="white"
            path={{ stroke: "white" }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default FileUpload;
