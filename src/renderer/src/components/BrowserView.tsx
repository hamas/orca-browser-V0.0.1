import * as React from 'react'

interface BrowserViewProps {
    url: string
    onUrlChange: (url: string) => void
}

export const BrowserView: React.FC<BrowserViewProps> = ({ url, onUrlChange }) => {
    return (
        <div className="w-full h-full bg-white">
            <iframe
                src={url || 'https://www.google.com'}
                className="w-full h-full border-0"
                title="Browser Content"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
        </div>
    )
}
