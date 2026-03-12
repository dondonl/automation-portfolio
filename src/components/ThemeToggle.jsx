import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-dark-100 border border-gray-200 dark:border-dark-300 rounded-2xl shadow-soft dark:shadow-dark-soft hover:shadow-medium dark:hover:shadow-dark-medium transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun icon for light mode */}
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-0 rotate-180 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        
        {/* Moon icon for dark mode */}
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-600 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`} 
        />
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-blue-100 dark:from-amber-900/20 dark:to-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </button>
  )
}

export default ThemeToggle
