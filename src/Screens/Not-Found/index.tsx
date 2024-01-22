import React from "react";
import  NotFoundImage from "../../Assets/NotFoundImage.jpg";
import PrimaryButton from "../../Components/PrimaryButton";


export default function NotFound() {
  const Back = () => {
    window.history.back();
  };
  return (
    <div className="grid-cols-1 h-[80vh] flex items-center justify-center">
      <div className="grid grid-span-1 flex items-center justify-center text-center  gap-4 h-[65%]">
        <div>
          <img
            src={NotFoundImage}
            style={{
              height: "29rem",
            }}
          />
        </div>
        <div>
          <h1>Sorry! this page was not found</h1>
        </div>
        <PrimaryButton label="Back" onClick={Back} />
      </div>
    </div>
  );
}