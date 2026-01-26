// js/app.js
import { FREQS, LABELS, FINGERINGS } from './constants.js';
import { songLibrary } from './songs.js';

const { useState, useEffect, useRef, useMemo } = React;

// Componente de Ícones (Simplificado para o exemplo)
const Icon = ({ name, size = 24, className = "" }) => {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            {name === 'Play' && <polygon points="5 3 19 12 5 21 5 3" />}
            {name === 'RotateCcw' && <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />}
            {/* Adicione outros caminhos de ícones conforme necessário */}
        </svg>
    );
};

const App = () => {
    // Estados baseados na lógica original
    const [currentLevel, setCurrentLevel] = useState(0);
    const [activeNote, setActiveNote] = useState(null);
    const [isExerciseRunning, setIsExerciseRunning] = useState(false);
    const [mode, setMode] = useState('exercise'); // 'exercise' ou 'song'

    // Referência para o sintetizador de áudio
    const audioCtx = useRef(null);

    const levels = [
        { id: 'do', label: 'Nível Dó', notes: ['do_lat'] },
        { id: 're', label: 'Nível Ré', notes: ['do_lat', 're_lat'] },
        { id: 'mi', label: 'Nível Mi', notes: ['do_lat', 're_lat', 'mi_lat'] }
    ];

    const playNote = (noteId) => {
        if (!audioCtx.current) audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
        
        const osc = audioCtx.current.createOscillator();
        const gain = audioCtx.current.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(FREQS[noteId], audioCtx.current.currentTime);
        
        gain.gain.setValueAtTime(0, audioCtx.current.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, audioCtx.current.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 1.5);
        
        osc.connect(gain);
        gain.connect(audioCtx.current.destination);
        
        osc.start();
        osc.stop(audioCtx.current.currentTime + 1.5);
        setActiveNote(noteId);
        setTimeout(() => setActiveNote(null), 850);
    };

    // Função para renderizar partitura quando entrar no modo música
    useEffect(() => {
        if (mode === 'song' && songLibrary.nivelDo[0]) {
            ABCJS.renderAbc("notation", songLibrary.nivelDo[0].abc, {
                responsive: "resize",
                add_classes: true
            });
        }
    }, [mode]);

    return (
        <div className="scroll-container no-select p-6">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-black tracking-tighter mb-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    FLAUTA FÁCIL
                </h1>
                <div className="flex justify-center gap-4 mt-4">
                    <button 
                        onClick={() => setMode('exercise')}
                        className={`px-4 py-2 rounded-full font-bold transition ${mode === 'exercise' ? 'bg-blue-600' : 'bg-slate-800'}`}
                    >
                        Exercícios
                    </button>
                    <button 
                        onClick={() => setMode('song')}
                        className={`px-4 py-2 rounded-full font-bold transition ${mode === 'song' ? 'bg-emerald-600' : 'bg-slate-800'}`}
                    >
                        Biblioteca
                    </button>
                </div>
            </header>

            <main className="max-w-2xl mx-auto">
                {mode === 'song' && <div id="notation" className="shadow-2xl"></div>}
                
                <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800 backdrop-blur-sm">
                    {/* Renderização da Flauta e Notas (Mantenha sua lógica de SVG aqui) */}
                    <div className="flex justify-center mb-8">
                        <button 
                            onClick={() => playNote(levels[currentLevel].notes[0])}
                            className={`note-block w-24 h-24 rounded-3xl flex items-center justify-center text-2xl font-black ${activeNote ? 'active' : 'bg-slate-800'}`}
                        >
                            {LABELS[levels[currentLevel].notes[0]]}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
