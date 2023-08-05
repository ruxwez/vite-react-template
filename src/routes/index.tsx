import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "@/pages/home.page"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}