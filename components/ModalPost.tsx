"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function ModalPost({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={onClose}>
            <div
                className="bg-[#2e2e2e] text-white/80 w-full max-w-lg max-h-[90vh] rounded-xl overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white/60 hover:text-white z-10"
                    aria-label="Fechar">
                    ✕
                </button>

                <div className="max-h-[90vh] overflow-y-auto p-6 scrollbar-custom">
                    {children}
                </div>
            </div>
        </div>
    );
}