import { ToastOptions, toast } from "react-toastify";

interface ToastProps {
    type: string;
    message: string;
}

const params : ToastOptions= {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined
}


const showToast = ({type, message} : ToastProps) => {
    if (type === "success") {
        toast.success(message, {
            ...params
        })
    } else if (type === "error") {
        toast.error(message, {
            ...params
        })
    }
}

export default showToast