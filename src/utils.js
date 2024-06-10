import { toast } from "react-toastify";

export const showToast = (message, type = "info", options = {}) => {
  const defaultOptions = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
  };

  const toastType = {
    info: toast.info,
    success: toast.success,
    warning: toast.warning,
    error: toast.error,
  }[type];

  if (!toastType) {
    console.error("Invalid toast type.");
    return;
  }

  const toastOptions = { ...defaultOptions, ...options };

  toastType(message, toastOptions);
};
