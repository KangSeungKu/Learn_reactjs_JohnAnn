import wait from "@/lib/wait";
import { ReactNode, Suspense } from "react"

export default function BoardLayout({ children }: {
    children: ReactNode
}) {
    return (
        <>
            {children}
            <Suspense fallback={<h2>Loading BoardList...</h2>}>
                <BoardList />
            </Suspense>
            <Suspense fallback={<h2>Loading Comments...</h2>}>
                <Comments />    
            </Suspense>
        </>
    )
}

async function BoardList() {
    await wait(3000);
    return (
        <h2>BoardList</h2>
    )
}

async function Comments() {
    await wait(4000);
    return (
        <h2>Comments</h2>
    )
}