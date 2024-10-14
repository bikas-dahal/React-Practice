import { useMutation } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { useCallback, useMemo, useState } from "react"
import { Doc, Id } from "../../../../convex/_generated/dataModel"


type RequestType = {
    name: string
};

type ResponseType = Id<'workspaces'> | null

type Options = {
    onSuccess?: (data: ResponseType) => void
    onError?: (error: Error) => void 
    onSettled?: () => void
    throwError?: boolean
}

export const useCreateWorkspace = () => {
    const mutation = useMutation(api.workspaces.create)

    const [data, setData] = useState<ResponseType>(null)
    const [error, setError] = useState<Error | null>(null)
    const [status, setStatus] = useState<'idle' | 'pending' | 'settled' | 'success' | 'error'>('idle')

    const isPending = useMemo(() => status === 'pending', [status])
    const isSuccess = useMemo(() => status === 'success', [status])
    const isError = useMemo(() => status === 'error', [status])
    const isSettled = useMemo(() => status === 'settled', [status])

    // const [isPending, setIsPending] = useState(false)
    // const [isSuccess, setIsSuccess] = useState(false)
    // const [isError, setIsError] = useState(false)
    // const [isSettled, setIsSettled] = useState(false)


    const mutate = useCallback( async (values: RequestType, options?: Options) => {
        try {

            setData(null)
            setError(null)
            setStatus('pending')

            // setIsPending(true)
            // setIsError(false)
            // setIsSuccess(false)
            // setIsSettled(false)

            const response = await mutation(values)
            options?.onSuccess?.(response)
            return response
        } catch (error) {
            options?.onError?.(error as Error)

            if (options?.throwError) {
                throw error
            }
        } finally {
            // setIsPending(false)
            // setIsSettled(true)

            setStatus('settled')
            options?.onSettled?.()
        }

    }, [mutation])

    return { mutate, data, error, isPending, isSuccess, isError, isSettled }

}