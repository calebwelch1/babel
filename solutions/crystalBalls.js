// When given two crystal balls that will break if dropped from a high enough distance,
// determine the exact spot in which it will break in the most optimized way.
// This segment demonstrates breaking down a search problem without using a linear search.

// basically this is an array of falses, and once it crosses a threshhold
// all values are true (ball is breaking from this floor up). So we have to find the true value and return the index
// two crystal balls means... if you do binary search and go to midpoint and it is "true" one of your crystal balls has broken






// solution is to jump my sqrt(n) until ball breaks. then jump back to the last known point and walk up until the second ball breaks
// breaks is an arry of 0000000000111111111 get it? at 1 it breaks find optimal point.

const twoCrystalBalls = (breaks) => {
    // square root jump lowers time complexity to sqrt(n)
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount; // we are jumping by sqrt instead of the usual i++
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]){
            break;
        }
    }

    i -= jumpAmount;
    // because it broke at the last jump amount, we want to walk up slowly with the ceiling being the jump amount
    for (let j=0; j<=jumpAmount && i < breaks.length; j++, i++) {
        // here j is a sub array i.e a counter
        // j is length of one jump
        // we increment i and j together until i breaks again;
        // this is the optimal point to break the crystal ball
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}