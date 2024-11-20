import { useState, useEffect } from "react";

export function useDropZone() {
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragOver(true);
    }

    const handleDragLeave = (event) => {
        event.preventDefault();
        if (event.clientX === 0 && event.clientY === 0) {
            setIsDragOver(false);
        }
    }

    const handleDrop = (event, asyncCallback = Promise) => {
        event.preventDefault();
        setIsDragOver(false);
        if (event.dataTransfer.files) {
            handleFiles(event.dataTransfer.files, asyncCallback);
        }
    }

    const handleFiles = (files = FileList, asyncCallback = Promise) => {
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            if (file) {
                handleSaveFile(file, asyncCallback);
            }
        }
    }

    const handleSaveFile = (file = File, asyncCallback = Promise) => {
        const reader = new FileReader();
        reader.onload = async () => {
            await asyncCallback(reader.result);
        };
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        const events = {
            dragover: handleDragOver,
            dragleave: handleDragLeave,
            drop: handleDrop,
        }

        for (let eventName in events) {
            document.addEventListener(eventName, events[eventName]);
        }

        return () => {
            for (let eventName in events) {
                document.removeEventListener(eventName, events[eventName]);
            }
        }
    }, []);

    return {
        isDragOver,
        setIsDragOver,
        handleDragOver,
        handleDragLeave,
        handleDrop,
        handleFiles,
        handleSaveFile,
    }
}
