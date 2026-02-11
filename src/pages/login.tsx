import { Button } from "@/components/ui/button"
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import api from "@/API/axios.ts";
import {useState} from "react";
import {useAuth} from "@/context/constext.tsx";
import {useNavigate} from "react-router-dom";

const LoginPage =()=> {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()
    const {login} = useAuth()
    console.log('ishladi')

    const loginUser = async () => {

        try{
            const res = await api.post('/login' , userData)
            console.log(res)
            localStorage.setItem("token", res.data.token)
            const obj = {
                token: res.data.token,
                user:{
                    name: res.data.user.name,
                    email: res.data.user.email,
                    role_id: res.data.user.role_id,
                    id: res.data.user.id,
                },
            }
            login(obj)
            navigate("/")

        }catch(err){
            console.log(err)
        }

    }
  return (
      <div className={'w-full h-screen flex items-center justify-center'}>

          <Card className="w-full max-w-sm">
              <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                      Enter your email below to login to your account
                  </CardDescription>
                  {/*<CardAction>*/}
                  {/*  <Button variant="link">Sign Up</Button>*/}
                  {/*</CardAction>*/}
              </CardHeader>
              <CardContent>
                  <form>
                      <div className="flex flex-col gap-6">
                          <div className="grid gap-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                  onChange={(e)=>setUserData({...userData , email: e.target.value})}
                                  id="email"
                                  type="email"
                                  placeholder="m@example.com"
                                  required
                              />
                          </div>
                          <div className="grid gap-2">
                              <div className="flex items-center">
                                  <Label htmlFor="password">Password</Label>
                                  <a
                                      href="#"
                                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                  >
                                      Forgot your password?
                                  </a>
                              </div>
                              <Input onChange={(e)=>setUserData({...userData , password: e.target.value})} id="password" type="password" required />
                          </div>
                      </div>
                  </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                  <Button onClick={()=> loginUser()} type="submit" className="w-full">
                      Login
                  </Button>
                  <Button variant="outline" className="w-full">
                      Login with Google
                  </Button>
              </CardFooter>
          </Card>

      </div>
  )
}


export default LoginPage