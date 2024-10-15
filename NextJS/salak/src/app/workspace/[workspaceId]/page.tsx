'use client'

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace"
import { useWorkspaceId } from "@/hooks/use-workspace-id"


// type Props = {
//     params: {workspaceId: string}
// }

const WorkspaceIdPage = () => {

  const workspaceId = useWorkspaceId()

  const { data } = useGetWorkspace({ id: workspaceId })

  return (
    <div>ID: {workspaceId}</div>
  )
}

export default WorkspaceIdPage