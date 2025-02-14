import "./reset.css"
import "./index.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Layout } from "./layout/Layout"
import { Login } from "./auth/login/Login"
import { Register } from "./auth/register/Register"
import { CatalogPage } from "./pages/CatalogPage"
import { NotFound } from "./pages/NotFound"
import { Search } from "./components/search/Search"
import { Details } from "./pages/Details"
import { Verify } from "./auth/verify/Verify"
import { UserPage } from "./pages/UserPage"
import { useEffect } from "react"
import { getMe, refreshToken } from "./service/AuthService"

export const App = () => {

  useEffect(() => {
    const initAuth = async () => {
      try {
        const data = await refreshToken();
        if(data) {
          localStorage.setItem("accessToken", data.data.token.access);
          await getMe();
        }
      } catch (error) {
        console.error("Authentication failed", error);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    };

    initAuth();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/category/:id" element={<CatalogPage />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/user" element={<UserPage />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/verify" element={<Verify />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
