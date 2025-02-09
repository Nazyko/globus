import "./reset.css"
import "./index.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./layout/Layout"
import { Login } from "./auth/login/Login"
import { Register } from "./auth/register/Register"

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
