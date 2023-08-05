import { BrowserRouter, Route, Routes } from "react-router-dom"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </BrowserRouter>
    )
}