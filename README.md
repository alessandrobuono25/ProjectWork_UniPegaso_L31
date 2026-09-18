# ProjectWork_UniPegaso_L31 - Mutti — Un'Eccellenza Italiana
Project work finale per il conseguimento della Laurea Triennale in Informatica per le Aziende Digitali (L-31) - Università Telematica Pegaso. Sviluppo e implementazione della traccia d'esame "Sviluppo di una pagina web per il download dei report di sostenibilità di un’impresa del settore primario". Realizzato con HTML, CSS, Javascript.


Pagina web statica dedicata alla presentazione del Report di Sostenibilità di Mutti S.p.A.
Progetto realizzato in HTML5, CSS3 e JavaScript, senza framework né dipendenze di build.

**Autore:** Alessandro Buono
**Corso:** Laurea Triennale in Informatica per le aziende digitali L-31
**Istituto:** Università Telematica Pegaso
**Anno:** 2026

---

## Avvio

Non è richiesto alcun server locale né alcuna installazione: il progetto non usa moduli JavaScript né richieste di rete, quindi funziona aperto direttamente dal filesystem.

1. Scaricare o clonare l'intera cartella mantenendone la struttura.
2. Aprire `mutti.html` con un doppio clic, oppure trascinarlo nella finestra del browser.

Browser consigliati: versioni aggiornate di Chrome, Edge, Firefox o Safari.

> **Connessione a internet:** le icone dei canali social nel piè di pagina sono caricate da una CDN esterna. Senza connessione la pagina resta pienamente funzionante, ma i cerchi dei social appaiono vuoti.

---

## Struttura dei file

```
.
├── mutti.html                         pagina unica, struttura e contenuti
├── style.css                          foglio di stile completo
├── script.js                          logica dello slider cronologico
├── MUTTI_REPORT_2025_COMPLETO.pdf     report scaricabile dalla pagina
└── img/                               tutte le immagini della pagina
    ├── mutti-logo.png
    ├── PomiDoro_05_0.jpg
    ├── mutti_1927.jpg
    ├── history-1971.webp
    ├── Pomodorino-Doro.jpg
    ├── mutti_campo_img.webp
    ├── mutti_ode.jpeg
    ├── MUTTI_per_chisiamo.jpg
    ├── Mutti_Chi_Siamo.webp
    ├── Sociale_Mutti.jpg
    ├── Mutti_mano.jpg
    └── mutti_trattore.jpg
```

Tutti i percorsi sono relativi: spostare o rinominare la cartella `img/` o il file PDF interrompe rispettivamente la visualizzazione delle immagini e il download del report.

---

## Contenuto della pagina

La pagina è organizzata in un'intestazione, cinque fasce orizzontali e un piè di pagina.

| Sezione | Contenuto |
|---|---|
| `header` | Logo e menu di navigazione con collegamenti interni |
| `#row0` | Titolo e slider cronologico della storia aziendale (1899–2014) |
| `#row1` | Presentazione dell'azienda, testo affiancato a immagine |
| `#row2` | I tre pilastri ESG in schede affiancate |
| `#row3` | L'impegno in materia di sostenibilità, testo affiancato a immagine |
| `#row4` | Area di download del Report di Sostenibilità in PDF |
| `footer` | Canali social, iscrizione alla newsletter, informazioni legali |

I due collegamenti del menu sono *anchor link* che puntano a `#row1` e `#row3`; lo scorrimento è animato tramite `scroll-behavior: smooth` dichiarato sull'elemento radice.

---

## Slider cronologico

Le sei schede sono tutte presenti nel markup e nascoste per impostazione predefinita: solo quella con la classe `active` viene mostrata. Lo script si limita a spostare tale classe, in parallelo sulla scheda e sull'anno corrispondente della barra cronologica.

**Navigazione:**

- **Frecce laterali** — `changeSlide(±1)`, scorrimento relativo e ciclico. L'indice è calcolato come `(currentSlide + change + SLIDE_NUMBER) % SLIDE_NUMBER`: la somma preventiva del numero di schede evita indici negativi, dato che in JavaScript l'operatore modulo conserva il segno del dividendo.
- **Barra degli anni** — `goToSlide(n)`, posizionamento diretto sulla scheda indicata.
- **Avanzamento automatico** — una scheda ogni 8 secondi. Ogni interazione manuale azzera e riavvia il conteggio, così che il cambio automatico non avvenga immediatamente dopo un clic.

Il numero di schede è ricavato da `slides.length`: per aggiungere una tappa alla cronologia è sufficiente inserire un blocco `.slide-content` nell'HTML e il relativo `<li>` nella barra degli anni, senza modificare lo script.

Lo script è richiamato con l'attributo `defer`, che ne rinvia l'esecuzione al completamento dell'analisi del documento. Senza di esso le due collezioni di elementi verrebbero popolate prima che il corpo della pagina esista, restituendo insiemi vuoti e generando errori di riferimento nullo.

---

## Stile e responsività

- **Palette** centralizzata in variabili CSS dichiarate in `:root`, derivata dall'identità visiva del marchio (rosso pomodoro, rosso scuro, crema, verde).
- **Impaginazione** interamente basata su Flexbox, senza sistemi di griglia.
- **Componenti** costruiti su una classe `card` generica, da cui derivano `cardRow2` (pilastri ESG) e `cardReport` (area di download).
- **Dimensionamento continuo** con `clamp()` per titoli, spaziature e corpo del testo, così da coprire le risoluzioni intermedie senza breakpoint dedicati.
- **Breakpoint** due soli, per i cambi strutturali del layout:
  - `≤ 900px` — le fasce passano da disposizione affiancata a impilata, lo slider si dispone in verticale, il piè di pagina si incolonna;
  - `≤ 480px` — riduzione ulteriore di titoli, barra cronologica e frecce di navigazione.

---

## Note tecniche

- Il pulsante della newsletter è dichiarato `type="button"`: il modulo è una dimostrazione di interfaccia e non invia dati ad alcun servizio.
- Il download del report è gestito dal solo attributo HTML `download`, senza codice JavaScript: il browser salva il file nella cartella dei download configurata sul dispositivo, con il nome specificato nell'attributo.
- La pagina utilizza `aspect-ratio`, `clamp()` e la parola chiave `safe` di `justify-content`: funzionalità supportate dai browser moderni, non da versioni datate.

---

## Crediti

Immagini e contenuti storici tratti dal materiale pubblico di Mutti S.p.A. e utilizzati a scopo esclusivamente didattico.
Icone dei canali social: [Uicons by Flaticon](https://www.flaticon.com/uicons).
