import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Please enter valid name"}),
    username: z.string().min(2, {message: "Please enter valid username"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "password must be at least 8 characters long"}),
  })