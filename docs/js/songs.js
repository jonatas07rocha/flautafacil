// js/songs.js
// Removido o 'export' para que o navegador reconheça a variável globalmente
const songLibrary = {
    nivelDo: [
        { title: "Mary Had a Little Lamb", abc: "X:1\nT:Mary Had a Little Lamb\nM:4/4\nL:1/4\nK:C\ne d c d | e e e2 | d d d2 | e g g2 | e d c d | e e e e | d d e d | c4 |" },
        { title: "Au Clair de la Lune", abc: "X:1\nT:Au Clair de la Lune\nM:4/4\nL:1/4\nK:C\nc c c d | e2 d2 | c e d d | c4 | c c c d | e2 d2 | c e d d | c4 |" },
        { title: "Twinkle Twinkle", abc: "X:1\nT:Twinkle Twinkle\nM:4/4\nL:1/4\nK:C\nc c g g | a a g2 | f f e e | d d c2 | g g f f | e e d2 | g g f f | e e d2 |" },
        { title: "Ode to Joy", abc: "X:1\nT:Ode to Joy\nM:4/4\nL:1/4\nK:C\ne e f g | g f e d | c c d e | e>d d2 | e e f g | g f e d | c c d e | d>c c2 |" },
        { title: "Jingle Bells", abc: "X:1\nT:Jingle Bells\nM:4/4\nL:1/4\nK:C\ne e e2 | e e e2 | e g c d | e4 | f f f f | f e e e | e d d e | d2 g2 |" }
    ],
    nivelRe: [
        { title: "The Boys Of Bluehill", abc: "X:1\nT:Boys Of Bluehill\nM:4/4\nL:1/8\nK:Dmaj\n|:FA|BA FA D2 FA|BA Bd e2 de|fa gf eg fe|df ed B2 dB|BA FA D2 FA|BA Bd e2 de|fa gf eg fe|d2 f2 d2:|" },
        { title: "The Cliffs Of Moher", abc: "X:1\nT:Cliffs Of Moher\nM:6/8\nL:1/8\nK:Ador\n|:a3 bag|eaf ged|c2A BAG|EFG ABd|eaa bag|eaf ged|c2A BAG|EFG A3:|" },
        { title: "The Mason's Apron", abc: "X:1\nT:Mason's Apron\nM:4/4\nL:1/8\nK:Amaj\n|:e2|aAA2 ABAF|EFAc dcBA|dBB2 BcBA|Bcde fefg|aAA2 ABAF|EFAc dcBA|dcde fefa|A2 cB A2:|" },
        { title: "Saint Anne's Reel", abc: "X:1\nT:Saint Anne's\nM:4/4\nL:1/8\nK:Dmaj\n|:fedf edcB|A2FA DAFA|B2GB EBGB|A2FA DAFA|fedf edcB|A2FA DAFA|BGed cABc|eddc d2 de:|" },
        { title: "The Mountain Road", abc: "X:1\nT:Mountain Road\nM:4/4\nL:1/8\nK:Dmaj\nF2 AF BFAF|F2 AF EFDE|F2 AF BFAF|G2 FG EFDE|FAA2 BAFA|BABd eddA|d2dA BAFA|d2 de fgfe|d2 dA BAFA|G2 FG EDFA:|" }
    ],
    nivelMi: [
        { title: "The Lark In The Morning", abc: "X:1\nT:Lark In The Morning\nM:6/8\nL:1/8\nK:Dmaj\n|:AFA AFA|BGB BdB|AFA AFA|fed BdB|AFA AFA|BGB BdB|def afe|dBB BdB:|" },
        { title: "The Sally Gardens", abc: "X:1\nT:Sally Gardens\nM:4/4\nL:1/8\nK:Gmaj\n|:G2GA BAGB|dBeB dBAB|d2Bd efge|dBAB GEDE|GFGA BAGB|d2eB dBAB|d2Bd efge|dBAB G4:|" },
        { title: "Sí Bheag Sí Mhór", abc: "X:1\nT:Si Bheag Si Mhor\nM:3/4\nL:1/8\nK:Dmaj\nde|:f3e d2|d2 de d2|B4 A2|F4 A2|BA Bc d2|e4 de|f2 f2 e2|d4 f2|B4 e2|A4 d2|F4 E2|D4 e2|B4 e2|A4 dc|d6|d4 de:|" },
        { title: "The Gravel Walks", abc: "X:1\nT:Gravel Walks\nM:4/4\nL:1/8\nK:Ador\n|:A2 eA cA eA|A2 eA BAGB|A2 eA Bd ef|gedc BAGB:|A2 aA gAfA|A2 eA BAGB|ABcd efga|gedc BAGB:|" },
        { title: "The Lilting Banshee", abc: "X:1\nT:Lilting Banshee\nM:6/8\nL:1/8\nK:Ador\n|:EAA EAA|BAB G2A|Bee edB|def gfg|eAA eAA|BAB G2A|Bee edB|dBA A3:|" }
    ],
    nivelFa: [
        { title: "The Kid On The Mountain", abc: "X:1\nT:Kid On The Mountain\nM:9/8\nL:1/8\nK:Emin\n|:EFE FEF G2 F|E3 cBA BGE|EFE FED G2 A|BAG FAG FED:|BGB AFA G2 D|GAB dge dBA|BGB AFA G2 A|BAG FAG FED:|" },
        { title: "The Harvest Home", abc: "X:1\nT:Harvest Home\nM:4/4\nL:1/8\nK:Dmaj\n|:AF|DAFA DAFA|defe dcBA|eAfA gAfA|e d B AGFE|DAFA DAFA|defe dcBA|eAfA gfec|d2 f2 d2:|" },
        { title: "King Of The Fairies", abc: "X:1\nT:King Of The Fairies\nM:4/4\nL:1/8\nK:Edor\n|:B,2|EDEF GFGA|B2B2 G2GA|B2E2 EFGE|FGFE D2B,2|EDEF GFGA|BAGB d3c|B2E2 GFE_E|E6:|" },
        { title: "The Rights Of Man", abc: "X:1\nT:Rights Of Man\nM:4/4\nL:1/8\nK:Emin\n|:GA|B2A2 G2F2|EFGA B2ef|gfed edBd|cBAG A2GA|BcAB GAFG|EFGA B2ef|gfed Bgfg|e2 E2 E2:|" },
        { title: "The Swallowtail", abc: "X:1\nT:Swallowtail\nM:6/8\nL:1/8\nK:Ador\n|:cBA eAA|cBA edc|BGG dGG|gfe dcB|cBA eAA|cBA e2f|gfe dcB|cBA A2d:|" }
    ],
    nivelSol: [
        { title: "The Blarney Pilgrim", abc: "X:1\nT:Blarney Pilgrim\nM:6/8\nL:1/8\nK:Dmix\n|:DED DEG|A2A ABc|BAG AGE|GEA GED|DED DEG|A2A ABc|BAG AGE|GED D3:|" },
        { title: "Connaughtman's Rambles", abc: "X:1\nT:Connaughtman's Rambles\nM:6/8\nL:1/8\nK:Dmaj\n|:FAA dAA|BAA dAG|FAA dfe|dBB BAG|FAA dAA|BAA def|gfe dfe|dBB BAG:|" },
        { title: "The Musical Priest", abc: "X:1\nT:Musical Priest\nM:4/4\nL:1/8\nK:Bmin\n|:BA|FBBA B2Bd|cBAf ecBA|FBBA B2Bd|cBAc B2:|d2dc dfed|cA eA fAeA|dcBc defb|afec B2:|" },
        { title: "Tam Lin", abc: "X:1\nT:Tam Lin\nM:4/4\nL:1/8\nK:Dmin\n|:A,2DA, FA,DA,|B,2DB, FB,DB,|C2EC GCEC|FEDC A,DDC|dA A2 FADA|dA A2 FADA|cG G2 EG G2|cG G2 cdec:|" },
        { title: "Wind Shakes The Barley", abc: "X:1\nT:Wind That Shakes The Barley\nM:4/4\nL:1/8\nK:Dmaj\nA2AB AFED|B2BA BcdB|A2AB AFED|gfed BcdB|f2fd g2ge|f2fd Bcde|f2fd g2fg|afed Bcde:|" }
    ],
    nivelLa: [
        { title: "The Banshee", abc: "X:1\nT:The Banshee\nM:4/4\nL:1/8\nK:Gmaj\n|:G2 GD EDEG|AGAB d2 Bd|eged BAGA|BAGE EDDE|ea a2 efgf|eBBA B2 Bd|eged BAGA|BAGE EDD2:|" },
        { title: "Out On The Ocean", abc: "X:1\nT:Out On The Ocean\nM:6/8\nL:1/8\nK:Gmaj\n|:GE|D2B BAG|BdB A2B|GED G2A|B2B AGE|e2e edB|ege edB|d2B def|gfe dBA:|" },
        { title: "Maid Behind The Bar", abc: "X:1\nT:Maid Behind The Bar\nM:4/4\nL:1/8\nK:Dmaj\n|:FAAB AFED|FAAB ABde|fBBA Bcde|fBBA BcdA|faab afde|fdad fd d2|efga beef|gebe gfeg:|" },
        { title: "Banish Misfortune", abc: "X:1\nT:Banish Misfortune\nM:6/8\nL:1/8\nK:Dmix\n|:fed cAG|A2d cAG|F2D DED|FEF GFG|AGA cAG|AGA cde|fed cAG|Adc d3:|" },
        { title: "The Silver Spear", abc: "X:1\nT:Silver Spear\nM:4/4\nL:1/8\nK:Dmaj\n|:FA A2 BAFA|dfed BddA|FA A2 BAFA|dfed Bd AG|fa a2 bfaf|gfed Bdde|fa a2 bfaf|gfed Bd A2:|" }
    ],
    nivelSi: [
        { title: "Morrison's Jig", abc: "X:1\nT:Morrison's\nM:6/8\nL:1/8\nK:Edor\n|:E3 B3|EBE AFD|EDE B3|dcB AFD|Bee fee|aee fee|Bee fee|a2g fed:|" },
        { title: "The Butterfly", abc: "X:1\nT:The Butterfly\nM:9/8\nL:1/8\nK:Emin\n|:B2E G2E f3|B2E G2E FED|B2d e2f g3|B2d g2e dBA|B3 B2A G2A|B3 BAB dBA:|" },
        { title: "Cooley's Reel", abc: "X:1\nT:Cooley's\nM:4/4\nL:1/8\nK:Edor\n|:D2|EBBA B2 EB|B2 AB dBAG|FDAD BDAD|FDAD dAFD|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg:|" },
        { title: "The Kesh Jig", abc: "X:1\nT:The Kesh\nM:6/8\nL:1/8\nK:Gmaj\n|:G3 GAB|A3 ABd|edd gdd|edB dBA|B2B d2d|ege dBA|B2B dBG|ABA AGA:|" },
        { title: "Drowsy Maggie", abc: "X:2\nT:Drowsy Maggie\nM:4/4\nL:1/8\nK:Edor\n|:E2 GE BEGE|E2 GE BEGE|D2 FD ADFD|D2 FD ADFD|d2 fd c2 ec|d2 fd c2 Bc|d2 fd c2 ec|Bdce dAFA:|" }
    ]
};
