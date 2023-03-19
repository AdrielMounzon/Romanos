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
    else if(num<=5)
    {
        for(let i=0;i<5-num;i++)
        {
            cadena=cadena+"I";
        }
        cadena=cadena+"V";
    }
    else if(num<=8)
    {
        cadena=cadena+"V";
        for(let i=0;i<num-5;i++)
        {
            cadena=cadena+"I";
        }
    }
    return cadena;
}

export default romano;