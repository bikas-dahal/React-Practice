import { Button } from '@/components/ui/button'
import { useGetWorkspace } from '@/features/workspaces/api/use-get-workspace'
import { useWorkspaceId } from '@/hooks/use-workspace-id'
import { Info, Search } from 'lucide-react'
import React from 'react'

const ToolBar = () => {

    const workspaceId = useWorkspaceId()

    const { data } = useGetWorkspace({ id: workspaceId })

  return (
    <nav className='bg-[#f5f5f5] flex items-center justify-between h-10 p-1.5'>
      <div className="flex-1" />

      <div className='min-w-[280px] max-[642px] grow-[2] shrink'>
        <Button variant={'transparent'} size={'iconSm'}>
            <Search className='size-4 text-white mr-2 ' />
            <span className='text-white text-xs'>Search {data?.name}</span>
        </Button>
      </div>

      <div className='ml-auto flex-1 flex items-center justify-end '>
        <Button>
            <Info className='size-5 text-white' />
        </Button>
      </div>
    </nav>
  )
}

export default ToolBar
