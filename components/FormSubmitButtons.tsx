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
    <div className="text-center mt-4">
      {!isDelete ? (
        <button
          type="submit"
          className="              
            hover:bg-green-300
            hover:text-gray-100
            bg-green-400
            text-green-600
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
            hover:bg-red-300
            hover:text-white
            bg-red-500
            text-white
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
