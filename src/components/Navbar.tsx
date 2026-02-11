import { motion } from "framer-motion";
import { LogOut,  Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {useAuth} from "@/context/constext.tsx";


 const Navbar =()=> {

    const {logout , user} = useAuth();
    console.log(user , 'scbsjbcsbjdc shsdg g sgh shd');

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
                        src={user?.user?.avatar_url || '../../public/vite.svg'}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border"
                    />

                    {/* User Info */}
                    <div className="flex flex-col">
                        <span className="font-semibold text-base">{user?.user?.name}</span>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail size={14} />
                            <span>{user?.user?.email}</span>
                        </div>


                    </div>

                    {/* Logout Button */}
                    <Button
                        variant="destructive"
                        className="ml-4 rounded-xl flex items-center gap-2"
                        onClick={()=>logout()}
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