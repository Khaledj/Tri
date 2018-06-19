//************* tri par insertion
a = [3, 9, 7, 1, 6, 2, 8, 4, 5];
console.log("tableau tri insertion avant tri : " + a);

function insertionSort() {
    let tmp;
    for (let i = 1; i <= a.length; i++) {
        for (let k = i; k > 0; k--) {
            if (a[k] < a[k - 1]) {
                tmp = a[k];
                a[k] = a[k - 1];
                a[k - 1] = tmp;
                console.log("tableau après une boucle :" + a);
            }
        }
    }
};


insertionSort();

//************************ Tri par sélection
b = [3, 9, 7, 1, 6, 2, 8, 4, 5];

function selectionSort() {
    let tmp;
    console.log("tableau tri sélection avant tri : " + b);

    for (let i = 0; i <= b.length; i++) {
        let k = i;
        for (let j = i + 1; j <= b.length; j++) {

            if (b[j] <= b[k]) {
                k = j;
                if (b[k] < b[i]) {
                    tmp = b[k];
                    b[k] = b[i];
                    b[i] = tmp;
                    console.log("tableau après la boucle sélection " + b);
                }
            }
        }
    }
};

selectionSort();

//*********************tri rapide
let tab = [3, 9, 7, 1, 6, 2, 8, 4, 5];
console.log("tableau tri rapide avant tri : " + tab);
sort(0, 8);

function sort(iDeb, iFin) {
    let rand = random(iDeb, iFin);
    swap(iDeb, rand);
    let k = iDeb;
    for (i = iDeb+1; i <= iFin; i++) {
        if (tab[i] < tab[iDeb]) {
            swap(++k, i);
        }
    }
    console.log("résultat du tri :" + swap(iDeb, k));

     if( iDeb<k-1) {
         sort(iDeb, k - 1);
     }
     if(k+1<=iFin) {
         sort(k + 1, iFin);
     }

}


function random(min, max) {
    rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
}

function swap(a, b) {
    let temp = tab[a];
    tab[a] = tab[b];
    tab[b] = temp;
    return tab;

}