import { auth } from "@clerk/nextjs/server";

const { userId, sessionClaims } = auth();
export const role = (sessionClaims?.metadata as { role: string})?.role

export const currentUserId = userId

const currentWorkWeek = () => {
    const today = new Date();

    const dayOfWeek = today.getDay();

    const startOfWeek = new Date(today)

    if (dayOfWeek === 0){
        startOfWeek.setDate(today.getDate() + 1)
    }

    if (dayOfWeek === 6){
        startOfWeek.setDate(today.getDate() + 2)
    } else {
        startOfWeek.setDate(today.getDate() - (dayOfWeek - 1))
    }

    startOfWeek.setHours(0, 0, 0, 0)

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + 4)
    endOfWeek.setHours(23, 59, 59, 999)

    return { startOfWeek, endOfWeek }
}

export const adjustScheduleToCurrentWeek = (lessons: {title: string, start: Date, end: Date}[]): {title: string, start: Date, end: Date}[] => {
    const { startOfWeek, endOfWeek } = currentWorkWeek()

    return lessons.map((lesson) => {
        const lessonDayOfWeek = lesson.start.getDay()
    })
}