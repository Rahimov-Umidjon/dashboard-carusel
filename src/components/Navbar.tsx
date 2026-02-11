import { motion } from "framer-motion";
import { LogOut, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface NavbarProps {
    name: string;
    email: string;
    phone: string;
    profileImage?: string;
    onLogout: () => void;
}
 const Navbar =({
                                               name,
                                               email,
                                               phone,
                                               onLogout,
                                           }: NavbarProps)=> {
    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-white   border-b"
        >
            <div className=" px-20 mx-auto  py-2 flex items-center justify-between  ">
                {/* Left Side - Logo */}
                <div className="text-2xl font-semibold tracking-tight">
                    MyCompany
                </div>

                {/* Right Side - Profile Card */}
                <Card className="flex items-center gap-4 px-4 py-2 rounded-2xl shadow-sm">
                    {/* Profile Image */}
                    <img
                        src={'../../public/vite.svg'}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border"
                    />

                    {/* User Info */}
                    <div className="flex flex-col">
                        <span className="font-semibold text-base">{name}</span>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail size={14} />
                            <span>{email}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone size={14} />
                            <span>{phone}</span>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <Button
                        variant="destructive"
                        className="ml-4 rounded-xl flex items-center gap-2"
                        onClick={onLogout}
                    >
                        <LogOut size={16} />
                        Chiqish
                    </Button>
                </Card>
            </div>
        </motion.nav>
    );
}


export default Navbar;