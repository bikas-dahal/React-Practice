'use client'

import { TooltipContent } from "@radix-ui/react-tooltip"
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

interface HintProps {
    label: string
    children: React.ReactNode
    side?: 'top' | 'bottom' | 'left' | 'right'
    align?: 'start' | 'center' | 'end'
}


export const Hint = ({ label, children, side = 'top', align = 'center' }: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align} className="bg-black text-white border border-white/5">
                <p className="font-medium text-xs">
                    {label}
                </p>

                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}