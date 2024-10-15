'use client'

import ToolBar from "./toolbar";

interface WorkspaceIdLayoutProps {
    children: React.ReactNode
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
    return (
        <div className="h-screen flex">
            <ToolBar />
            {children}
        </div>
    );
}
 
export default WorkspaceIdLayout;