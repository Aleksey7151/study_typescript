type Returns = string | null;

function trueOrNull(isTrue: boolean) : Returns {
    if (isTrue)
    {
        return 'true';
    }
    
    return null;
}