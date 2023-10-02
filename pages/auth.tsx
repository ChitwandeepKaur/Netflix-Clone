import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail]       = useState(''),
        [username, setUsername] = useState(''),
        [password, setPassword] = useState(''),
        [variant, setVariant]   = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
},[])
  return (
    // Refine the setting of this page - the main div is not centered
    <div className="relatice h-full w-full bg-[url('/images/landing_wallpaper.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav>
          <img src="/images/netflix_logo.png" alt="Logo " className="h-20 pt-5 pl-5"/>
          {/* Adress the Image tag warning */}
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold ">
              {variant === 'login'? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input 
                label="Username" 
                onChange={(e: any)=>{setUsername(e.target.value)}} 
                type="text" 
                value={username} 
                id="Username"/>
              )}
              <Input 
                    label="Email or Phone Number" 
                    onChange={(e: any)=>{setEmail(e.target.value)}} 
                    type="text" 
                    value={email} 
                    id="Email"/>
              <Input 
                    label="Password" 
                    onChange={(e: any)=>{setPassword(e.target.value)}} 
                    type="password" 
                    value={password} 
                    id="Password"/>
            </div>
            <button className="bg-red-600 py-3 text-white mt-10 rounded-md w-full hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>  
            <p className="text-neutral-500 mt-10 text-sm">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span onClick={toggleVariant} className="ml-1 text-white hover:underline cursor-pointer">
              {variant === 'login' ? 'Create an account' : 'Login'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;