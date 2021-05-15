class ValidaGasto
{
    validaGetID (arg)
    {
        if(!arg)
            return false;
        return true;
    }

    ValidaPost(arg)
    {
        if(!arg.categoria || !arg.valor)
            return false;
        return true;
    }
}

module.exports = ValidaGasto;