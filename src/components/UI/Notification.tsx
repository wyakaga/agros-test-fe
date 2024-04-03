"use client";

import { toast, ToastBar, Toaster } from "react-hot-toast";

function Notification() {
  return (
    <Toaster toastOptions={{ duration: 10000 }}>
      {(t) => (
        <ToastBar
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#459467",
          }}
          toast={t}
        >
          {({ icon, message }) => (
            <div className="flex items-center bg-secondary">
              {icon}
              <p className="text-white">{message}</p>
              {t.type !== "loading" && (
                <button
                  className="flex justify-center items-center"
                  onClick={() => toast.dismiss(t.id)}
                >
                  <div className="flex gap-x-2 items-center font-bold">
                    <div className="h-6 w-[2px] bg-[#E8E8E8]" />
                    <svg
                      fill="#ffffff"
                      className="w-5"
                      viewBox="0 0 200 200"
                      data-name="Layer 1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                  </div>
                </button>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}

export default Notification;
