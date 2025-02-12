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

export const App = () => {

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
