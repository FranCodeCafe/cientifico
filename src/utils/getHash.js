const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    //Si se llama a location.hash por sí solo, retorna #/1/
    //Por lo tanto, se debe limpiar hasta conseguir el valor numérico.
    //Split() lo convierte a un arreglo para retirar los slash. Devuelve ['','1',''].

export default getHash;