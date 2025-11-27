import * as React from 'react'
import { Sidebar } from './components/Sidebar'
import { URLBar } from './components/URLBar'
import { BrowserView } from './components/BrowserView'

function App(): JSX.Element {
    const [currentUrl, setCurrentUrl] = React.useState('https://www.google.com')

    const handleNavigate = (url: string) => {
        // Add https:// if no protocol specified
        let finalUrl = url
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            // Check if it's a search query or URL
            if (url.includes('.') && !url.includes(' ')) {
                finalUrl = 'https://' + url
            } else {
                // Treat as search query
                finalUrl = 'https://www.google.com/search?q=' + encodeURIComponent(url)
            }
        }
        setCurrentUrl(finalUrl)
    }

    const handleBack = () => {
        // Will be implemented with webview navigation
        console.log('Back')
    }

    const handleForward = () => {
        // Will be implemented with webview navigation
        console.log('Forward')
    }

    const handleReload = () => {
        // Will be implemented with webview reload
        console.log('Reload')
    }

    const handleHome = () => {
        setCurrentUrl('https://www.google.com')
    }

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-white dark:bg-black text-black dark:text-white">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <URLBar
                    url={currentUrl}
                    onNavigate={handleNavigate}
                    onBack={handleBack}
                    onForward={handleForward}
                    onReload={handleReload}
                    onHome={handleHome}
                />
                <div className="flex-1 bg-gray-50 dark:bg-gray-950">
                    <BrowserView url={currentUrl} onUrlChange={setCurrentUrl} />
                </div>
            </div>
        </div>
    )
}

export default App
