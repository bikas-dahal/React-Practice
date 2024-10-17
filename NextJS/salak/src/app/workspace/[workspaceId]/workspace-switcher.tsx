import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace"
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces"
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal"
import { useWorkspaceId } from "@/hooks/use-workspace-id"
import { Loader, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export const WorkspaceSwitcher = () => {
    const router = useRouter()

    const workspaceId = useWorkspaceId()
    const [_open, setOpen] = useCreateWorkspaceModal()

    const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({ id: workspaceId })

    const {data: workspaces, isLoading: workspacesLoading} = useGetWorkspaces()

    const filteredWorkspaces = workspaces?.filter((workspace) => workspace._id !== workspaceId)



    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className="size-9 overflow-hidden relative bg-[#ABABAD] hover:bg-[#ABABAD]/20 font-semibold text-slate-800 text-xl">
                    {workspaceLoading ? <Loader className="size-5 shrink-0 animate-spin" /> : workspace?.name.charAt(0).toUpperCase()}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="center" className="w-64">
                <DropdownMenuItem onClick={() => router.push(`/workspace/${workspaceId}`)} className="cursor-pointer flex-col justify-start items-start capitalize">
                    {workspace?.name}
                    <span className="text-xs text-muted-foreground">Active workspace</span>
                </DropdownMenuItem>
                {filteredWorkspaces?.map((workspace) => (
                    <DropdownMenuItem
                        key={workspace._id}
                        onClick={() => router.push(`/workspace/${workspace._id}`)}
                        className="cursor-pointer flex-col justify-start items-start capitalize overflow-hidden"
                    >
                        <div className="shrink-0 size-9 overflow-hidden relative bg-[#616061] text-white font-semibold text-lg rounded-md flex items-center justify-center mr-2">
                            {workspace.name.charAt(0).toUpperCase()}
                            <p className="truncate">{workspace.name}</p>
                        </div>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="cursor-pointer" onClick={() => setOpen(true)}>
                    <div className="size-9 overflow-hidden relative bg-[#F2F2F2] text-slate-800 font-semibold text-lg rounded-md flex items-center justify-center mr-2">
                        <Plus className="size-5 shrink-0" />
                    </div>
                    Create a new workspace
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}