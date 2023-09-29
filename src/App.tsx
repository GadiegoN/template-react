import { useEffect, useState } from "react"
import { Button } from "./components/ui/button"
import { Moon, Sun } from "lucide-react"

export function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  useEffect(() => {   
    if(darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
   <div className="h-screen">
    <Button variant="default" className="hover:bg-ring" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Sun /> : <Moon />}
    </Button>
   </div>
  )
}