// Web Audio API Synthesizer for Retro SFX

const AudioContext = (window.AudioContext || (window as any).webkitAudioContext);
const ctx = new AudioContext();

const createOscillator = (freq: number, type: OscillatorType, duration: number, vol = 0.1) => {
    if (ctx.state === 'suspended') {
        ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
};

export const playRetroSound = (type: 'click' | 'hover' | 'type' | 'error' | 'success') => {
    const vol = 0.05;

    switch (type) {
        case 'click':
            createOscillator(800, 'square', 0.05, vol);
            break;
        case 'hover':
            createOscillator(200, 'sine', 0.05, 0.02);
            break;
        case 'type':
            // Mechanical switch crude simulation: two tones
            createOscillator(600, 'triangle', 0.03, 0.03); // Click
            setTimeout(() => createOscillator(300, 'square', 0.05, 0.02), 10); // Clack
            break;
        case 'error':
            createOscillator(150, 'sawtooth', 0.2, 0.1);
            setTimeout(() => createOscillator(100, 'sawtooth', 0.2, 0.1), 50);
            break;
        case 'success':
            createOscillator(440, 'sine', 0.1, vol);
            setTimeout(() => createOscillator(880, 'sine', 0.1, vol), 100);
            break;
    }
};
