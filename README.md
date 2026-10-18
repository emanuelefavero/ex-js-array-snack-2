# EX - Snack Array Avanzati

Esercizi array avanzati in JavaScript, dal mio corso web dev (specializzazione Frontend)

## Avvio

Con Node.js e npm installati, dalla cartella del progetto:

```bash
npm run dev
```

Lo script esegue [solutions.js](solutions.js), dove sono presenti le soluzioni agli esercizi.

> Nota: Assicurati di clonare e avviare l'[API locale](https://github.com/boolean-it/resources) (porta `3333`)

## Snacks

Hai un array di oggetti rappresentanti libri: [data/books.js](data/books.js)

### Snack 1 - Filtra e Modifica

- Crea un array (`longBooks`) con i libri che hanno più di 300 pagine;
- Crea un array (`longBooksTitles`) che contiene solo i titoli dei libri contenuti in longBooks.
- Stampa in console ogni titolo nella console.

### Snack 2 - Il primo libro scontato

- Crea un array (`availableBooks`) che contiene tutti i libri disponibili.
- Crea un array (`discountedBooks`) con gli `availableBooks`, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
- Salva in una variabile (`fullPricedBook`) il primo elemento di `discountedBooks` che ha un prezzo intero (senza centesimi).

### Snack 3 - Ordinare gli Autori

- Crea un array (`authors`) che contiene gli autori dei libri.
- Crea una variabile booleana (`areAuthorsAdults`) per verificare se gli autori sono tutti maggiorenni.
- Ordina l’array `authors` in base all’età, senza creare un nuovo array.
- (se `areAuthorsAdults` è true, ordina in ordine crescente, altrimenti in ordine decrescente)

### Snack 4 - Calcola l’età media

- Crea un array (`ages`) che contiene le età degli autori dei libri.
- Calcola la somma delle età (`agesSum`) usando reduce.
- Stampa in console l’età media degli autori dei libri.

### Snack 5 (Bonus) - Raccogli i libri

Usando la l'[API locale](https://github.com/boolean-it/resources) a questo endpoint `http://localhost:3333/books/{id}` usa la combinazione di `.map()` e `Promise.all()`, per creare una funzione (`getBooks`) che a partire da un array di id (`ids`), ritorna una promise che risolve un array di libri (`books`).

Testala con l’array _[2, 13, 7, 21, 19]_.

### Snack 6 (Bonus) - Ordina i libri

- Crea una variabile booleana (`areThereAvailableBooks`) per verificare se c’è almeno un libro disponibile.
- Crea un array (`booksByPrice`) con gli elementi di books ordinati in base al prezzo (crescente).
- Ordina l’array `booksByPrice` in base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

### Snack 7 (Bonus) - Analizza i tag

Usa `reduce` per creare un oggetto (`tagCounts`) che conta quante volte ogni tag viene usato tra i libri.

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#ex---snack-array-avanzati)
