/* Capitoli aggiunti alla libreria una sola volta. Ogni voce ha id unico. */
window.SEED=[{
 "id": "cseed-emozione-ml",
 "book": "Paper: il machine learning e la natura dell'emozione",
 "author": "McVeigh, Smart, Satpute, Quigley, Theriault-Brown, Barrett · Trends in Cognitive Sciences, ott 2026",
 "chapter": "L'algoritmo non è un giudice neutrale",
 "confidence": 1,
 "transcript": "",
 "summary": "Il machine learning non chiude il dibattito sulle emozioni: trova ciò che le teorie di chi lo usa hanno già messo nei dati.",
 "images": [
  {
   "title": "Il pescatore con la rete a maglie larghe",
   "text": "Sul molo un pescatore solleva la rete e proclama: nel mare non esistono pesci piccoli. Dietro di lui le maglie sono grandi come pugni. Ogni pesce piccolo gli scivola tra le dita mentre parla. Il modello vede solo ciò che il campionamento lascia passare."
  },
  {
   "title": "Il metal detector che suona solo per le chiavi",
   "text": "Un varco d'aeroporto con un cartello: CERCA SOLO CHIAVI. Passano mille persone e il varco suona soltanto per le chiavi, con orgoglio. Se gli stimoli sono scelti per evocare paura, il modello troverà la paura."
  },
  {
   "title": "Le 27 stanze che si sciolgono",
   "text": "Un palazzo con 27 porte, ognuna con la targa di un'emozione. Rilanci il modello in modo diverso e le pareti diventano cera: le stanze si fondono in un unico salone fluido, senza muri netti. Così è andata alla struttura a 27 categorie."
  },
  {
   "title": "Una parola sulla porta, mille chiavi nel mazzo",
   "text": "Sulla porta c'è scritto PAURA. Alla porta provano chiavi diverse: una a forma di ragno, una a forma di precipizio, una a forma di folla. Si aprono tutte. Una parola, tanti schemi: è la mappatura molti-a-uno."
  },
  {
   "title": "Il trofeo per aver battuto il caso",
   "text": "Un lanciatore di freccette bendato colpisce il bersaglio un po' più spesso di quanto farebbe a caso. Gli danno un trofeo con scritto LE EMOZIONI ESISTONO. Ma il trofeo dice solo che la freccia ha seguito le etichette scelte, non che le categorie siano nei dati."
  },
  {
   "title": "Il tavolo rotondo con le lenti",
   "text": "Attorno a un tavolo rotondo sei scienziati, ognuno con una lente di colore diverso. Si contraddicono a voce alta. L'oggettività non è in nessuna lente: è il tavolo, il luogo dove le lenti si scontrano."
  }
 ],
 "phrases": [
  "I dati non parlano da soli: parlano con l'accento di chi li ha raccolti.",
  "Se cerchi un solo tipo di paura, il modello te la trova.",
  "Battere il caso non significa aver scoperto una natura.",
  "Una parola sulla porta, mille chiavi per aprirla.",
  "Un'emozione non è un oggetto che hai: è qualcosa che costruisci mentre la vivi.",
  "L'oggettività non sta nello strumento, sta nel tavolo dove ci si contraddice."
 ],
 "quotes": [
  "A category is something you do, not something you have. (Box 3)"
 ],
 "deep": [
  {
   "title": "Le due tradizioni",
   "text": "Tipologica: rabbia, tristezza, paura sono tipi biologici distinti, stabili tra persone, culture ed epoche, e la variazione è considerata rumore. Costruzionista: ogni categoria nasce sul momento a partire dal contesto e dalla storia della persona, e la variazione è il dato. Usano le stesse parole con significati diversi, quindi non si capiscono."
  },
  {
   "title": "Come il ML tipologico si costruisce la risposta",
   "text": "Si scelgono pochi stimoli da parole emotive prefissate, le etichette sono la media di altri partecipanti, i dati vengono aggregati e il modello è lineare e cerca una sola struttura per tutti. Poi le conclusioni vengono estese all'intera categoria."
  },
  {
   "title": "Perché l'accuratezza inganna",
   "text": "Un classificatore sopra il caso mostra solo che i dati si adattano alle etichette. Nei modelli esaminati si va da 23% (caso 16,7%) a 99% (caso 50%). Ignora la variazione strutturata non legata alle etichette, anche quando è reale."
  },
  {
   "title": "La rianalisi che smonta le 27 categorie",
   "text": "Dati di autovalutazione che davano 27 categorie, rianalizzati con modelli molti-a-uno, non hanno riprodotto la struttura. In uno studio di neuroimmagine le analisi individuali hanno dato strutture molto diverse da persona a persona."
  },
  {
   "title": "Come lavora il campo costruzionista",
   "text": "Si parte da eventi, per esempio una variazione del battito cardiaco, e la persona dà un'etichetta libera. Studio fisiologico: da 3 a 8 cluster per persona, il più comune in meno del 25% dei partecipanti. Studio sulla paura (ragni, altezze, situazioni sociali): oltre il 98% dei voxel predittivi non era coerente tra stimoli."
  },
  {
   "title": "Oggettività e onestà finale",
   "text": "Due idee: libera da credenze umane (perceiver-independent) oppure frutto di consenso critico tra prospettive diverse (relazionale). Gli autori sono per lo più costruzionisti, lo dichiarano e dicono che anche il loro ML non è neutrale. La cura proposta è una ricerca consapevole delle proprie teorie in una comunità pluralista."
  }
 ],
 "concepts": [],
 "data": [
  "Paper di opinione, Trends in Cognitive Sciences, online dal 28 ottobre 2026, open access"
 ],
 "unclear": [
  "Ho letto il paper fino alle conclusioni: le raccomandazioni finali, il Box 4 e la bibliografia non sono state controllate",
  "Le immagini mentali sono mie proposte per ricordare, non sono nel paper",
  "Gli autori sono parte in causa nel dibattito"
 ],
 "questions": [
  {
   "q": "Che cosa ci sta dentro l'immagine del pescatore con la rete a maglie larghe?",
   "ideal": "Il campionamento determina cosa il modello può vedere: se gli stimoli sono scelti da una teoria, i dati contengono già quella teoria."
  },
  {
   "q": "Che cosa rappresentano le 27 stanze che si sciolgono?",
   "ideal": "Una struttura a 27 categorie emotive che, rianalizzata con modelli molti-a-uno, non si è riprodotta."
  },
  {
   "q": "Che cosa significa 'una parola sulla porta, mille chiavi'?",
   "ideal": "Mappatura molti-a-uno: tanti pattern di dati diversi corrispondono alla stessa parola emotiva, quindi la categoria varia con il contesto."
  },
  {
   "q": "Perché battere il caso con un classificatore non dimostra che le emozioni sono categorie stabili?",
   "ideal": "Dimostra solo che i dati si adattano alle etichette scelte. Il modello ignora la variazione strutturata che non predice quelle etichette."
  },
  {
   "q": "Che cos'è l'oggettività relazionale?",
   "ideal": "Il consenso critico tra scienziati con prospettive diverse. È il tavolo rotondo, non la lente."
  }
 ]
}];
