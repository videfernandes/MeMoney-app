class ValidaCategoria
{
    validaGetID (arg)
    {
        if(!arg)
            return false;
        return true;
    }

    ValidaPost(arg)
    {
        if(!arg.nome)
            return false;
        return true;
    }
}


module.exports = ValidaCategoria;