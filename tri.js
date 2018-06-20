//************* tri par insertion
a = [3, 9, 7, 1, 6, 2, 8, 4, 5];
console.log("tableau tri insertion avant tri : " + a);

function insertionSort() {
    let tmp;
    for (let i = 1; i < a.length; i++) {
        for (let k = i; k > 0; k--) {
            if (a[k] < a[k - 1]) {
                tmp = a[k];
                a[k] = a[k - 1];
                a[k - 1] = tmp;
                console.log("tableau après une boucle :" + a);
            }else{
                break;
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

    for (let i = 0; i < b.length; i++) {
        let k = i;
            for (let j = i + 1; j < b.length; j++) {

                if (b[j] < b[k]) {
                k = j;
                }
            }
        tmp = b[k];
        b[k] = b[i];
        b[i] = tmp;
        console.log("tableau après la boucle sélection " + b);
    }
};

selectionSort();

//*********************tri rapide
let tab = [7, 1, 6, 9, 2, 3, 8, 4, 5];
console.log("tableau tri rapide avant tri : " + tab);
sort(0, 8);

function sort(iDeb, iFin) {
    let rand = random(iDeb, iFin);
    swap(iDeb, rand,tab);
    let k = iDeb;
    for (i = iDeb+1; i <= iFin; i++) {
        if (tab[i] < tab[iDeb]) {
            swap(++k, i,tab);
        }
    }
    console.log("résultat du tri :" + swap(iDeb, k,tab));

     if( iDeb<k-1) {
         sort(iDeb, k - 1,tab);
     }
     if(k+1<=iFin) {
         sort(k + 1, iFin,tab);
     }

}


function random(min, max) {
    rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
}

function swap(a, b,tableau) {
    let temp = tableau[a];
    tableau[a] = tableau[b];
    tableau[b] = temp;
    return tableau;

}
//*******************************
//       Tri à bulle
//*******************************
let tabBulle = [3,9,7,1,6,2,8,4,5];
console.log("*******tableau tri à bulle avant tri ******* " + tabBulle);
bubblesort();

function bubblesort() {

    for(let i = 0; i < tabBulle.length; i++) {
        let swapped = false;

        for(let j = tabBulle.length-1; j >= i+1 ; j--) {
            if (tabBulle[j]<tabBulle[j-1]) {
                swap(j,j-1,tabBulle);
                swapped = true;
            }
            console.log("tableau après une boucle :" + tabBulle);
        } if (swapped == false) {
            return
        }

    }

}





