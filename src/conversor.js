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
        return "IV";
    }
    return cadena;
}

export default romano;