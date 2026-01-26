// js/constants.js

export const FREQS = { 
    'do_lat': 261.63, 're_lat': 293.66, 'mi_lat': 329.63, 
    'fa_lat': 349.23, 'sol_lat': 392.00, 'la_lat': 440.00, 
    'si_lat': 493.88 
};

export const LABELS = { 
    'do_lat': 'Dó', 're_lat': 'Ré', 'mi_lat': 'Mi', 
    'fa_lat': 'Fá', 'sol_lat': 'Sol', 'la_lat': 'Lá', 
    'si_lat': 'Si' 
};

export const FINGERINGS = {
    'do_lat': [true, true, true, true, true, true, true, true],
    're_lat': [true, true, true, true, true, true, true, false],
    'mi_lat': [true, true, true, true, true, true, false, false],
    'fa_lat': [true, true, true, true, true, false, true, true],
    'sol_lat': [true, true, true, true, false, false, false, false],
    'la_lat': [true, true, true, false, false, false, false, false],
    'si_lat': [true, true, false, false, false, false, false, false]
};
