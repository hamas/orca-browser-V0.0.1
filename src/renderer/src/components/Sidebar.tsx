import * as React from 'react'
import { Plus, Download, Layers } from 'lucide-react'

const SidebarToolbar = () => {
    return (
        <div className="flex items-center p-2 space-x-2">
            <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1"></div>
            {/* Add toolbar items here */}
        </div>
    )
}

const TabList = () => {
    return (
        <div className="px-2">
            <div className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm mb-2">
                <span className="text-sm font-medium">New Tab</span>
            </div>
            {/* List of tabs will go here */}
        </div>
    )
}

const BottomControls = () => {
    return (
        <div className="flex items-center justify-between p-2">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                <Download size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                <Layers size={16} />
            </button>
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                <Plus size={16} />
            </button>
        </div>
    )
}

export const Sidebar = () => {
    return (
        <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900 w-64 border-r border-gray-200 dark:border-gray-800">
            <SidebarToolbar />
            <div className="flex-1 overflow-y-auto py-2">
                <TabList />
            </div>
            <BottomControls />
        </div>
    )
}
