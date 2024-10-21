# Explicación del algoritmo:
1. `Base del Recursivo:` Si el arreglo tiene 0 o 1 elementos, ya está ordenado y se devuelve tal cual.
2. `Elegir el Pivote:` Se elige un pivote, en este caso el último elemento del arreglo.
3. `Particionar el Arreglo:` Se recorren los elementos y se dividen en dos subarreglos: uno para los elementos menores que el pivote y otro para los mayores.
4. `Llamada Recursiva:` Se aplica recursivamente el mismo procedimiento a los subarreglos y se combinan los resultados.

# Complejidad:
- `Mejor caso:` O(nlog⁡n)O(nlogn)
- `Peor caso:` O(n2)O(n2) (ocurre cuando el arreglo ya está ordenado o tiene muchos elementos repetidos)
- `Espacio adicional:` O(log⁡n)O(logn) en la recursión.
