import {type ReactNode, useEffect} from "react";
import {useAuth} from "@/context/constext.tsx";
import {Navigate} from "react-router-dom";
import api from "@/API/axios.ts";


const ProtectedRoute = ({children}: { children: ReactNode }) => {
    const {user , setUser , logout} = useAuth();
    const token = localStorage.getItem("token")
    const getUser = async () => {
        try {
            const res = await api.get("/profile");

            console.log(res);
            setUser(res.data);
        } catch (error) {
            console.log(error);
            logout()
        }
    }

    useEffect(() => {
        void getUser()
    }, [])

    console.log(user);
    if (!token) {
        // foydalanuvchi yo'q bo'lsa login sahifasiga yo'naltiradi
        return <Navigate to="/login" replace/>;
    }
    return children

}

export default ProtectedRoute;