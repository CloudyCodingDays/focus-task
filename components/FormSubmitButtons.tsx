import { Dispatch, SetStateAction } from "react";

const FormSubmitButtons = ({
  cancelText = "Back",
  submitText = "Save",
  onBack,
  isDelete,
}: {
  cancelText?: string;
  submitText?: string;
  onBack: Dispatch<SetStateAction<boolean>>;
  isDelete?: boolean;
}) => {
  return (
    <div className="mb-4 text-center mt-4">
      <button
        className="
            hover:bg-green-200
            hover:text-gray-500
            bg-white
            border-green-300 
            border-2 
            rounded-lg 
            w-[7em]
            h-[3em]
            ml-4 
            mx-4"
        onClick={() => {
          onBack(false);
        }}
        type="button"
      >
        {cancelText}
      </button>
      {!isDelete ? (
        <button
          type="submit"
          className="              
            hover:bg-green-300
            hover:text-gray-100
            bg-green-400
            text-green-600
            rounded-lg               
            ml-4 
            w-[7em]
            h-[3em]
            mx-4"
        >
          {submitText}
        </button>
      ) : (
        <button
          type="submit"
          className="              
            hover:bg-red-300
            hover:text-white
            bg-red-500
            text-white
            rounded-lg               
            ml-4 
            w-[7em]
            h-[3em]
            mx-4"
        >
          {submitText}
        </button>
      )}
    </div>
  );
};

export default FormSubmitButtons;
