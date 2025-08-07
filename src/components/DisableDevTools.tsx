'use client';

import { useEffect } from 'react';

export default function DisableDevTools() {
    useEffect(() => {
        const disableContextMenu = (e: MouseEvent) => e.preventDefault();

        const disableShortcuts = (e: KeyboardEvent) => {
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
                (e.ctrlKey && e.key === 'U')
            ) {
                e.preventDefault();
            }
        };

        // Detect DevTools opening using console.log timing
        const detectDevTools = () => {
            const threshold = 160; // adjust if needed

            const check = () => {
                const start = performance.now();
                debugger; // pauses if DevTools is open
                const duration = performance.now() - start;

                if (duration > threshold) {
                    // Detected DevTools — you can do something here
                    console.warn('DevTools opened!');
                    // Optional: Trigger debugger again or redirect/hide page
                    // debugger;
                    // window.location.href = "/warning";
                }
            };

            let interval = setInterval(check, 1000);
            return () => clearInterval(interval);
        };

        document.addEventListener('contextmenu', disableContextMenu);
        document.addEventListener('keydown', disableShortcuts);
        const cleanup = detectDevTools();

        return () => {
            document.removeEventListener('contextmenu', disableContextMenu);
            document.removeEventListener('keydown', disableShortcuts);
            cleanup();
        };
    }, []);

    return null;
}
