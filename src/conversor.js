function aumentarCaracter(cadena, caracter, cantidad)
{
    for(let i=0;i<cantidad;i++)
    {
        cadena=cadena+caracter;
    }
    return cadena;
}

function romano(num)
{
    let cadena = "";
    const romanos = {1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40:"XL", 50:"L"};
    const valoresRomanos = Object.keys(romanos).sort((a, b) => b - a);
    for (let i = 0; i < valoresRomanos.length; i++)
    {
        const maximoValor = valoresRomanos[i];
        while (num >= maximoValor)
        {
            cadena = cadena + romanos[maximoValor];
            num = num - maximoValor;
        }
    }
    return cadena;
}

export default romano;