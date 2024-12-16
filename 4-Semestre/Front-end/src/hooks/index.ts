import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContexts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function useLogin() {
    const context = useContext(LoginContext);
    return context;
}