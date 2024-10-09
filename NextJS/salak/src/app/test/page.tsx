'use client'

import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

const page = () => {

    const tasks = useQuery(api.tasks.get)

  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default page
