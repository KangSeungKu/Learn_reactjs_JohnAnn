'use client'

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react";

function ModalLogin() {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, [])
    

    return (
        <dialog
            ref={dialogRef}
            onClick={() => router.back()}
            className="border p-2 rounded backdrop:bg-slate-500/30"
        >
            <button
                onClick={() => dialogRef.current?.close()}
            >
                X
            </button>
            <h1>Modal Login Page</h1>
        </dialog>
    )
}

export default ModalLogin