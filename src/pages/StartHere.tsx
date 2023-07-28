import React, { useState } from "react"
import Container from "../components/all/Container"
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
const StartHere = () => {

  const [form, setForm] = useState<React.ReactNode | null>(<LoginForm />)
  const [activeForm, setActiveForm] = useState<"LOGIN" | "REGISTER">("LOGIN")

  return (
    <Container>
      <div className="h-90vh w-full flex-col flex justify-center items-center">
        <div className="flex gap-5 py-3 ">
          <button onClick={() => { setForm(() => <LoginForm />), setActiveForm("LOGIN") }} className={`px-5 py-1 text-white bg-primary ${activeForm === "LOGIN" ? "opacity-100" : "opacity-50"} rounded-lg transition-all duration-150 lg:text-lg md:text-md text-sm font-bold`}>Login</button>
          <button onClick={() => { setForm(() => <RegisterForm />), setActiveForm("REGISTER") }} className={`px-5 py-1 text-white bg-primary rounded-lg ${activeForm === "REGISTER" ? "opacity-100" : "opacity-50"} rounded-lg transition-all duration-150 lg:text-lg md:text-md text-sm font-bold`}>Register</button>
        </div>
        <div className="lg:w-1/2 md:w-2/3 w-full h-2/3 border p-5 flex items-center justify-center">
          {form}
        </div>
      </div>
    </Container>
  )
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <form className="w-full h-auto flex flex-col items-start">
      <input className="border-2 font-semibold lg:text-xl md:text-md text-sm focus:outline-none shadow-md p-2 mb-3 w-full" type="email" placeholder="Email" />
      <input className="border-2 font-semibold lg:text-xl md:text-md text-sm focus:outline-none shadow-md p-2 mb-1 w-full" type={showPassword ? "text" : "password"} placeholder="Password" />
      <button type="button" onClick={() => setShowPassword((pre) => !pre)} className="w-auto lg:text-sm text-xs mt-1 mb-5 inline font-semibold text-slate-400">{showPassword ? "Hide password" : "Show password"}</button>
      <button className="w-full lg:text-lg md:text-md text-sm py-2 rounded-lg text-white bg-primary">Login</button>
      <p className="text-center lg:text-sm text-xs text-slate-400 mt-4 mb-2 w-full">or</p>
      <p className="text-center lg:text-sm text-xs text-slate-400 mb-4 mt-2 w-full">Login With</p>
      <div className="flex gap-2 items-center w-full">
        <button className="w-full border flex justify-center py-2 rounded-lg shadow">
          <FcGoogle className="lg:text-3xl md:text-2xl text-xl bg-white" />
        </button>
        <button className="w-full border flex justify-center  py-2 rounded-lg shadow">
          <FaFacebook className="lg:text-3xl md:text-2xl text-xl text-blue-500" />
        </button>
      </div>
    </form>
  )
}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <form className="w-full h-auto flex flex-col items-start">
      <input className="border-2 font-semibold lg:text-xl md:text-md text-sm focus:outline-none shadow-md p-2 mb-3 w-full" type="text" placeholder="Enter a User Name" />
      <input className="border-2 font-semibold lg:text-xl md:text-md text-sm focus:outline-none shadow-md p-2 mb-3 w-full" type="email" placeholder="Email a Valid Email" />
      <input className="border-2 font-semibold lg:text-xl md:text-md text-sm focus:outline-none shadow-md p-2 mb-3 w-full" type={showPassword ? "text" : "password"} placeholder="Create a Strong Password" />
      <input className="border-2 font-semibold lg:text-xl md:text-md text-sm focus:outline-none shadow-md p-2 mb-1 w-full" type={showPassword ? "text" : "password"} placeholder="Confirm Password" />
      <button type="button" onClick={() => setShowPassword((pre) => !pre)} className="w-auto lg:text-sm text-xs mt-1 mb-5 inline font-semibold text-slate-400">{showPassword ? "Hide password" : "Show password"}</button>
      <button className="w-full py-2 rounded-lg lg:text-lg md:text-md text-sm text-white bg-primary">Register</button>
      <p className="text-center lg:text-sm text-xs text-slate-400 mt-4 mb-2 w-full">or</p>
      <p className="text-center lg:text-sm text-xs text-slate-400 mb-4 mt-2 w-full">Register With</p>
      <div className="flex gap-2 items-center w-full">
        <button className="w-full border flex justify-center py-2 rounded-lg shadow">
          <FcGoogle className="lg:text-3xl md:text-2xl text-xl bg-white" />
        </button>
        <button className="w-full border flex justify-center  py-2 rounded-lg shadow">
          <FaFacebook className="lg:text-3xl md:text-2xl text-xl text-blue-500" />
        </button>
      </div>
    </form>
  )
}

export default StartHere