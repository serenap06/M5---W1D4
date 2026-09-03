import { Button } from "react-bootstrap"
import { Moon, Sun } from "lucide-react"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const DarkThemeMode = () => {
    const { isDark, setIsDark, switchThemeMode } = useContext(ThemeContext)

    return (
        <>
            <Button
                variant={isDark ? 'dark' : 'info'}
                onClick={switchThemeMode}>{isDark ? <Moon /> : <Sun />}
            </Button>
        </>
    )

}
export default DarkThemeMode;