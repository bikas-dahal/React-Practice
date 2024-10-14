'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCreateWorkspace } from "../api/use-create-workspace"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal()
    const [name, setName] = useState<string>("")

    const router = useRouter()

    const { mutate, isPending, isError, isSuccess, data, error } = useCreateWorkspace()
    const handleClose = () => {
        setOpen(false)
        setName("")
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        console.log('check');
        

        mutate({ name }, {
            onSuccess(id) {
                toast.success("Workspace created successfully")
                router.push(`/workspace/${id}`)
                handleClose()
            },
        })

        try {
            const data = await mutate({
                name: 'check workspace'
            }, {
                onSuccess: (data) => {
                    setOpen(false)
                },  
                onError: () => {
                    setOpen(false)
                },
                onSettled: () => {
                    setOpen(false)
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a workspace</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} action="" className="space-y-4">
                    <Input value={name} onChange={(e) => setName(e.target.value)} disabled={isPending} required autoFocus minLength={3} placeholder="Workspace name e.g. 'Work', 'Personal', 'Home" />
                    <div className="flex justify-end">
                        <Button disabled={isPending} type="submit" onClick={handleClose}>Create</Button>

                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}