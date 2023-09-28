import React from "react";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-toastify";

const fileTypes = ["JPG", "PNG"];

function FileUpload({ name = "avatar", required = false }) {
  const handleChange = (file) => {
    console.log(file);
  };

  const handleTypeError = () => {
    toast.error("Iltimos faqat JPG yoki PNG formatdagi rasmlarni tanlang", {
      theme: "colored",
      position: "top-center",
    });
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name={name}
      types={fileTypes}
      dropMessageStyle={{
        backgroundColor: "white",
        color: "#303972",
        fontWeight: "700",
      }}
      required={required}
      onTypeError={handleTypeError}
      classes="upload-file w-fit h-fit"
      children={
        <div className="cursor-pointer w-[175px] h-[175px] rounded-[5px] border border-dashed border-lightColor flex items-center justify-center">
          <p className="text-center !text-lightGrey text-[14px]">
            Drag and drop or click here to select file
          </p>
        </div>
      }
    />
  );
}

export default FileUpload;
