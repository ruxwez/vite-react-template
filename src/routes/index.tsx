import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import HomePage from "@/pages/home.page"
import { PrivateRouteGuard, RestrictRouteGuard } from "./guards"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />

                <Route path="/account" element={<PrivateRouteGuard element={<Outlet/>}/>}>
                    <Route index element={<h1>Account</h1>} />
                </Route>

                <Route path="/login" element={<RestrictRouteGuard element={<h1>Login</h1>}/>} />

                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}