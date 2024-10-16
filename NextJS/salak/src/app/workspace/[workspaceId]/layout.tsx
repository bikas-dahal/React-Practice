'use client'

import { Sidebar } from "./sidebar";
import ToolBar from "./toolbar";

interface WorkspaceIdLayoutProps {
    children: React.ReactNode
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
    return (
        <div className="h-screen flex">
            <ToolBar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                {children}

            </div>
        </div>
    );
}
 
export default WorkspaceIdLayout;