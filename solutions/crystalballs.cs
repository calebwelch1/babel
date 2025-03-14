public static int? TwoCrystalBalls(bool[] breaks)
{
    int jumpAmount = (int)Math.Sqrt(breaks.Length);
    int i = 0;
    for (; i <= breaks.Length; i += jumpAmount){
        if (breaks[i])
        {
            break;
        }
    }

    i -= jumpAmount;

    for (int j = 0; j<jumpAmount && breaks.Length; j++, i++){
        if(breaks[i])
        {
            return i;
        }
    }

    return null;
}

public static int? TwoCrystalBalls(bool[] breaks)
{
    int jumpAmount = (int)Math.Sqrt(breaks.Length);
    int i = 0;

    // First ball: jump by sqrt(n)
    for (; i < breaks.Length; i += jumpAmount)
    {
        if (breaks[i])
        {
            break;
        }
    }

    // Backtrack to last safe point, ensure non-negative
    i = i == 0 ? 0 : i - jumpAmount;

    // Second ball: linear search up to jumpAmount steps
    for (int j = 0; j < jumpAmount && i < breaks.Length; j++, i++)
    {
        if (breaks[i])
        {
            return i;
        }
    }

    return null; // Not found
}