function quicksort(arr) {
    // Si el arreglo tiene 0 o 1 elementos, ya está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    // Elegir un pivote (puede ser el último elemento)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    
    // Dividir el arreglo en dos partes: elementos menores y mayores que el pivote
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Llamar recursivamente a quicksort en las dos mitades y concatenar
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Ejemplo de uso
const array = [5, 3, 8, 1, 2, 7];
const sortedArray = quicksort(array);
console.log(sortedArray); // [1, 2, 3, 5, 7, 8]
