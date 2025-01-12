import { useState, useEffect } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function AddedAlert({ onDismiss }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically dismiss the alert after 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      if (onDismiss) onDismiss();
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [onDismiss]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 mx-auto mt-4 w-full max-w-lg rounded-md bg-green-50 p-4 shadow-md">
      <div className="flex items-center">
        <div className="shrink-0">
          <CheckCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-green-400"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            Product added to the Cart
          </p>
        </div>
        <div className="ml-auto pl-3">
          <button
            type="button"
            onClick={() => {
              setVisible(false);
              if (onDismiss) onDismiss();
            }}
            className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
