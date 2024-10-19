'use client'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Sidebar } from "./sidebar";
import ToolBar from "./toolbar";
import { WorkspaceSidebar } from "./workspace-sidebar";

interface WorkspaceIdLayoutProps {
    children: React.ReactNode
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
    return (
        <div className="h-screen flex">
            <ToolBar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                <ResizablePanelGroup direction="horizontal" autoSaveId={'salak-workspace-layout'}>
                    <ResizablePanel defaultSize={20} minSize={11} className="bg-[#5e2c5F] ">
                        <WorkspaceSidebar />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel minSize={20}>
                        {children}
                        Tomorrow is my license exam, will contribute in better way after tommorrow ok,
                    </ResizablePanel>
                </ResizablePanelGroup>

            </div>
        </div>
    );
}
 
export default WorkspaceIdLayout;