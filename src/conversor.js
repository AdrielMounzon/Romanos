function romano(num)
{
    let cadena = "";
    if(num<=3)
    {
        for(let i=0;i<num;i++)
        {
            cadena=cadena+"I";
        }
    }
    else
    {
        for(let i=0;i<5-num;i++)
        {
            cadena=cadena+"I";
        }
        cadena=cadena+"V";
    }
    return cadena;
}

export default romano;