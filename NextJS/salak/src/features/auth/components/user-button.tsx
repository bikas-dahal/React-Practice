'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCurrentUser } from "../api/use-current-user"
import { Loader2, LogOut } from "lucide-react"
import { useAuthActions } from "@convex-dev/auth/react"

export const UserButton = () => {

    const {data, isLoading} = useCurrentUser()
    const {signOut} = useAuthActions()

    if (isLoading) {
        return <Loader2 className="w-4 h-4 animate-spin text-muted-foreground"/>
    }

    if (!data) {
        return null
    }

    const { name, image, email } = data

    const avatarFallback = name?.charAt(0).toUpperCase()

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage alt={name} src={image} />
                    <AvatarFallback className="bg-sky-500 text-white">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="right" className="w-56">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut() } className="cursor-pointer text-red-500 hover:text-red-600 ">
                    <LogOut className="w-4 h-4 mr-2"/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}