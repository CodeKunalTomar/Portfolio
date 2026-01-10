import { useEffect, useState } from 'react';

export const useKonamiCode = (callback: () => void) => {
    const [input, setInput] = useState<string[]>([]);
    const sequence = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const { key } = e;

            const newInput = [...input, key];

            // Keep only the last n keys where n is sequence length
            if (newInput.length > sequence.length) {
                newInput.shift();
            }

            setInput(newInput);

            // check match
            if (newInput.join('') === sequence.join('')) {
                callback();
                setInput([]); // reset
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [input, callback, sequence]);
};
