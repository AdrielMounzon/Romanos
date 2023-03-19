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
    if(num<=3)
    {
        cadena = aumentarCaracter(cadena, "I", num);
    }
    else if(num<=5)
    {
        cadena = aumentarCaracter(cadena, "I", 5-num);
        cadena=cadena+"V";
    }
    else if(num<=8)
    {
        cadena=cadena+"V";
        cadena = aumentarCaracter(cadena, "I", num-5);
    }
    else if(num<=10)
    {
        cadena = aumentarCaracter(cadena, "I", 10-num);
        cadena=cadena+"X";
    }
    else if(num<=18)
    {
        cadena = aumentarCaracter(cadena, "I", 10-num);
        cadena=cadena+"X"+romano(num-10);
    }
    return cadena;
}

export default romano;