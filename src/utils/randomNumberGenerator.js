function getRandom(min, max){
    //get number between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandom;