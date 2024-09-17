import { useState, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Icons } from '../icons'

export function ThemeToggler() {
    const [theme, setTheme] = useState('light') // Default to light theme
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Retrieve the saved theme from localStorage
        const savedTheme = localStorage.getItem('theme')

        // Check if a theme is saved, otherwise fallback to system preference
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.setAttribute('data-theme', savedTheme)
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const defaultTheme = prefersDark ? 'dark' : 'light'
            setTheme(defaultTheme)
            document.documentElement.setAttribute('data-theme', defaultTheme)
        }
    }, [])

    if (!mounted) {
        return null
    }

    const handleThemeToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const themeColor = theme === 'dark' ? '#0F172A' : '#F5F3FF'
    const capitalizedTheme = theme === 'dark' ? 'Light' : 'Dark'

    return (
        <HelmetProvider>
            <Helmet>
                <meta name="theme-color" content={themeColor} />
                <meta name="msapplication-navbutton-color" content={themeColor} />
                <meta name="msapplication-TileColor" content={themeColor} />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} />
            </Helmet>
            <button
                onClick={handleThemeToggle}
                title={`${capitalizedTheme} Theme`}
                className="group w-[32px] h-[32px] flex items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-white dark:hover:bg-opacity-20 transition-colors"
            >
                {theme === 'dark' ? (
                    <Icons.sun
                        data-custom="restrict-click-outside"
                        className="h-6 w-6 text-zinc-600 group-hover:text-primary dark:text-zinc-400 dark:group-hover:text-slate-300"
                    />
                ) : (
                    <Icons.moon
                        data-custom="restrict-click-outside"
                        className="h-6 w-6 text-zinc-600 group-hover:text-primary dark:text-zinc-400 dark:group-hover:text-slate-300"
                    />
                )}
            </button>
        </HelmetProvider>
    )
}
