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
import { useAuth } from "./hooks/useAuth"

export const App = () => {
  const { isAuth, refetch } = useAuth()

  useEffect(() => {
    if(isAuth) {
      refetch()
    }
  }, [isAuth, refetch])

  useEffect(() => {
    const initAuth = async () => {
      try {
        const data = await refreshToken();
        if(data) {
          localStorage.setItem("access", data.data.token.access);
          await getMe();
        }
      } catch (error) {
        console.error("Authentication failed", error);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
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
            <Route path="/register" element={<Register />}/>
            <Route path="/verify" element={<Verify />}/>
            <Route path="*" element={<NotFound />}/>
            <Route>
              <Route path="/user/*" element={<UserPage />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
