import {useTheme} from "@/hooks"

export default function HomePage() {

    const {theme, toggleTheme} = useTheme()
    

    return (
        <div>
            <h1>{theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}