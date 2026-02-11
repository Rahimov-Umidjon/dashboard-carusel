import {
    createContext,
    type ReactNode,
    useContext,
    useState,
} from "react";

// interface User {
//     token:string;
//     user:{
//         name: string;
//         email: string;
//         id:number;
//         role_id:number;
//     }
// }


export interface Catalog {
    id?: number;
    user_id?: number;
    user_phone_id?: number | null;
    title?: string;
    is_global?: boolean;
    timer_minutes?: number | null;
    peers?: string[];
    created_at?: string; // yoki Date agar stringni Date ga parse qilsangiz
    updated_at?: string;
}

export interface User {
    id: number;
    name: string;
    role_id: number;
    email: string;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string;
    phones?: []; // agar phone objekti bo‘lsa, alohida interface qilishingiz mumkin
    catalogs?: Catalog[];
}

export interface UserData {
    token: string;
    user: User;
}



interface AuthContextType {
    user: UserData | null;
    setUser: (user: UserData) => void;
    login: (user: UserData,) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserData | null>(null);

    // 🔁 Page refresh bo‘lganda user saqlanib qolishi uchun
    // useEffect(() => {
    //     const storedUser = localStorage.getItem("user");
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //     }
    // }, []);

    const login = (userData: UserData) => {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login,
                logout,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within UserProvider");
    }

    return context;
};
