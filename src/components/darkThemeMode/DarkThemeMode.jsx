import { Button } from "react-bootstrap";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const DarkThemeMode = () => {
  const { isDark, switchThemeMode } = useContext(ThemeContext);

  return (
    <Button
      variant={isDark ? "dark" : "info"}
      onClick={switchThemeMode}
      aria-label={isDark ? "Attiva tema chiaro" : "Attiva tema scuro"}
      title={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      className="d-flex align-items-center justify-content-center"
    >
      {isDark ? <Moon /> : <Sun />}
    </Button>
  );
};
export default DarkThemeMode;
