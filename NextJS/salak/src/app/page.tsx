'use client'

import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/user-button";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useAuthActions } from "@convex-dev/auth/react";
import { useEffect, useMemo } from "react";


export default function Home() {
  const {signOut} = useAuthActions()

  const [open, setOpen] = useCreateWorkspaceModal()

  const {data, isLoading} = useGetWorkspaces()

  const workspaceId = useMemo(() => data?.[0]?._id, [data])

  useEffect(() => {

    if (isLoading) {
      return
    }

    if (workspaceId) {
      console.log(workspaceId)
    } else if(!open) {
      setOpen(true)
    }
  }, [workspaceId, isLoading, open, setOpen])


  return (
    <>
      <div>Homepage</div>
      <UserButton />
      <Button onClick={signOut}>Sign Out</Button>0
    </>
  );
}
