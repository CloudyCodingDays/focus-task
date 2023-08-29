import { Dispatch, SetStateAction } from "react";

const FormSubmitButtons = ({
  cancelText = "Back",
  submitText = "Save",
  onBack,
  onClose,
  isDelete,
}: {
  cancelText?: string;
  submitText?: string;
  onBack: Dispatch<SetStateAction<boolean>>;
  onClose?: Dispatch<SetStateAction<boolean>>;
  isDelete?: boolean;
}) => {
  return (
    <div className="text-center mt-4">
      <button
        className="
            hover:bg-green-200
            bg-white
            border-green-300
            text-gray-500 
            border-2 
            rounded-lg 
            w-[7em]
            h-[3em]
            ml-4 
            mx-4"
        onClick={() => {
          onBack(false);
          if (onClose !== undefined) onClose(false);
        }}
        type="button"
      >
        {cancelText}
      </button>
      {!isDelete ? (
        <button
          type="submit"
          className="              
          hover:bg-green-200
          hover:text-green-500 
          bg-green-500 
          text-green-100
            rounded-lg               
            w-[7em]
            h-[3em]
            drop-shadow-md
            mx-4"
        >
          {submitText}
        </button>
      ) : (
        <button
          type="submit"
          className="              
            hover:bg-red-200
            hover:text-red-500
            bg-red-500
            text-red-100
            rounded-lg               
            w-[7em]
            h-[3em]
            drop-shadow-md
            mx-4"
        >
          {submitText}
        </button>
      )}
    </div>
  );
};

export default FormSubmitButtons;
