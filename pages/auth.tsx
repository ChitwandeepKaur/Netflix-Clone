import axios                     from 'axios'
import Input                     from "@/components/input"
import router                    from 'next/router'
import { FcGoogle }              from 'react-icons/fc'
import { FaGithub }              from 'react-icons/fa'
import { signIn }                from 'next-auth/react'
import { useCallback, useState } from "react"

const Auth = () => {

  const [email, setEmail]       = useState(''),
        [name, setName]         = useState(''),
        [password, setPassword] = useState(''),
        [variant, setVariant]   = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  },[])

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email, 
        password,
        redirect: false,
        callbackUrl: '/'
      })
      router.push('/')
    } catch ( error ) {
      console.log(error)
    }
  }, [email, password])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email, name, password
      })
      login()
    } catch (error) {
      console.log(error)
    }
  },[email, name, password, login])

  return (
    <div className="relatice h-full w-full bg-[url('/images/landing_wallpaper.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav>
          <img src="/images/netflix_logo.png" alt="Logo " className="h-20 pt-5 pl-5"/>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-14 py-14 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold ">
              {variant === 'login'? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input 
                label="Username" 
                onChange={(e: any)=>{setName(e.target.value)}} 
                type="text" 
                value={name} 
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
            <button onClick={variant === 'login' ? login : register } 
                   className="bg-red-600 py-3 text-white mt-10 rounded-md w-full hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>  
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div onClick={()=>{
                signIn('google', { callbackUrl: '/'})
              }} className="w-30 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={30} className="ml-3"/><span className="text-xs p-2 text-center">Login with Google</span>
              </div>
              <div onClick={()=>{
                signIn('github', { callbackUrl: '/'})
              }} className="w-30 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FaGithub size={30} className="ml-3"/><span className="text-xs p-2 text-center">Login with Github</span>
              </div>
            </div>
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