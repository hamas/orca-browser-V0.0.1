import * as React from 'react'
import { ArrowLeft, ArrowRight, RotateCw, Home } from 'lucide-react'

interface URLBarProps {
    url: string
    onNavigate: (url: string) => void
    onBack: () => void
    onForward: () => void
    onReload: () => void
    onHome: () => void
}

export const URLBar: React.FC<URLBarProps> = ({
    url,
    onNavigate,
    onBack,
    onForward,
    onReload,
    onHome
}) => {
    const [inputValue, setInputValue] = React.useState(url)

    React.useEffect(() => {
        setInputValue(url)
    }, [url])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onNavigate(inputValue)
    }

    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="flex gap-1">
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    title="Back"
                >
                    <ArrowLeft size={16} />
                </button>
                <button
                    onClick={onForward}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    title="Forward"
                >
                    <ArrowRight size={16} />
                </button>
                <button
                    onClick={onReload}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    title="Reload"
                >
                    <RotateCw size={16} />
                </button>
                <button
                    onClick={onHome}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    title="Home"
                >
                    <Home size={16} />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter URL or search..."
                />
            </form>
        </div>
    )
}
