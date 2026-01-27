// js/app.js
import { FREQS, LABELS, FINGERINGS } from './constants.js';
import { songLibrary } from './songs.js';

const { useState, useEffect, useRef, useMemo } = React;

// --- Subcomponentes Auxiliares ---

const Icon = ({ name, size = 24, className = "" }) => (
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
        {name === 'Check' && <polyline points="20 6 9 17 4 12" />}
        {name === 'Award' && <path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l2 5 2-11-11 4 5 2z" />}
    </svg>
);

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="modal-content bg-slate-900 border border-slate-800 p-8 rounded-[3rem] max-w-sm w-full shadow-2xl text-center">
                {children}
            </div>
        </div>
    );
};

// --- Componente Principal ---

const App = () => {
    // Estados de Navegação e Progresso
    const [currentLevel, setCurrentLevel] = useState(0);
    const [mode, setMode] = useState('exercise'); // 'exercise' ou 'song'
    const [activeNote, setActiveNote] = useState(null);
    const [isExerciseRunning, setIsExerciseRunning] = useState(false);
    const [lessonComplete, setLessonComplete] = useState(false);

    // Contexto de Áudio
    const audioCtx = useRef(null);

    // Definição dos Níveis (Baseado no index.html original)
    const levels = useMemo(() => [
        { id: 'do', label: 'Nível Dó', notes: ['do_lat'], songKey: 'nivelDo' },
        { id: 're', label: 'Nível Ré', notes: ['do_lat', 're_lat'], songKey: 'nivelRe' },
        { id: 'mi', label: 'Nível Mi', notes: ['do_lat', 're_lat', 'mi_lat'], songKey: 'nivelMi' }
    ], []);

    // Motor de Áudio
    const playNote = (noteId) => {
        if (!audioCtx.current) audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
        
        const osc = audioCtx.current.createOscillator();
        const gain = audioCtx.current.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(FREQS[noteId], audioCtx.current.currentTime);
        
        gain.gain.setValueAtTime(0, audioCtx.current.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, audioCtx.current.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 1.2);
        
        osc.connect(gain);
        gain.connect(audioCtx.current.destination);
        
        osc.start();
        osc.stop(audioCtx.current.currentTime + 1.2);
        
        setActiveNote(noteId);
        setTimeout(() => setActiveNote(null), 850);
    };

    // Renderização da Partitura (ABCJS)
    useEffect(() => {
        const levelKey = levels[currentLevel].songKey;
        if (mode === 'song' && songLibrary[levelKey]) {
            ABCJS.renderAbc("notation", songLibrary[levelKey][0].abc, {
                responsive: "resize",
                add_classes: true,
                paddingtop: 0,
                paddingbottom: 0
            });
        }
    }, [mode, currentLevel, levels]);

    const startExercise = () => {
        setIsExerciseRunning(true);
        const currentNotes = levels[currentLevel].notes;
        let delay = 0;
        
        currentNotes.forEach((noteId, index) => {
            setTimeout(() => {
                playNote(noteId);
                if (index === currentNotes.length - 1) {
                    setTimeout(() => {
                        setIsExerciseRunning(false);
                        setLessonComplete(true);
                    }, 1500);
                }
            }, delay);
            delay += 1000;
        });
    };

    const nextLesson = () => {
        if (currentLevel < levels.length - 1) {
            setCurrentLevel(prev => prev + 1);
            setLessonComplete(false);
            setMode('exercise');
        }
    };

    return (
        <div className="scroll-container no-select p-6">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-black tracking-tighter mb-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    FLAUTA FÁCIL
                </h1>
                
                {/* Seletor de Modo */}
                <div className="inline-flex bg-slate-900/80 p-1 rounded-2xl border border-slate-800 mt-4">
                    <button 
                        onClick={() => setMode('exercise')}
                        className={`px-6 py-2 rounded-xl font-bold transition-all ${mode === 'exercise' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        Treino
                    </button>
                    <button 
                        onClick={() => setMode('song')}
                        className={`px-6 py-2 rounded-xl font-bold transition-all ${mode === 'song' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        Músicas
                    </button>
                </div>
            </header>

            <main className="max-w-2xl mx-auto space-y-6">
                {/* Área da Partitura ou Desafio */}
                {mode === 'song' ? (
                    <div id="notation" className="shadow-2xl"></div>
                ) : (
                    <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800 text-center backdrop-blur-sm">
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Desafio Atual</span>
                        <h2 className="text-3xl font-black mt-1 mb-6">{levels[currentLevel].label}</h2>
                        <button 
                            onClick={startExercise}
                            disabled={isExerciseRunning}
                            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all ${isExerciseRunning ? 'bg-slate-800 scale-90' : 'bg-blue-600 hover:scale-110 shadow-xl shadow-blue-900/20'}`}
                        >
                            <Icon name={isExerciseRunning ? 'RotateCcw' : 'Play'} className="text-white" />
                        </button>
                    </div>
                )}

                {/* Diagrama da Flauta */}
                <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-slate-800 relative overflow-hidden">
                    <div className="flex flex-col items-center gap-4">
                        {FINGERINGS[activeNote || levels[currentLevel].notes[0]].map((isClosed, i) => (
                            <svg key={i} width="40" height="40">
                                <circle 
                                    cx="20" cy="20" r="16" 
                                    className={`flute-hole ${isClosed ? 'closed' : ''}`}
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </main>

            {/* Modal de Conclusão */}
            <Modal isOpen={lessonComplete}>
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Award" size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black mb-2 text-white">Excelente!</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                    Você dominou o {levels[currentLevel].label}. Pronto para o próximo?
                </p>
                <button 
                    onClick={nextLesson}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black py-4 rounded-2xl transition-all shadow-lg"
                >
                    AVANÇAR
                </button>
            </Modal>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
