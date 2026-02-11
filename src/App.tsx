import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "@/pages/login.tsx";
import Home from "@/pages/home.tsx";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home/>
                        </ProtectedRoute>
                    }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App