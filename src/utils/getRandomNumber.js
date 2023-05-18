export const getRandomNumber = (min, max) => {
    // Obtenemos la distancia entre los dos números.
    const amplitud = Math.abs(max - min);

    // Generamos un número aletaorio entre 0 y esa distancia.
    const randomAmplitud = Math.round(Math.random() * amplitud);

    // La distancia aleatoria se suma al mínimo
    // Donde en el caso extremo de cero, nos quedamos en el número mínimo
    // Y en el caso extremo donde se obtiene la distancia completa, nos quedamos con el máximo
    return min + randomAmplitud
}