function printStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let starLine = "";

        for (let j = 1; j <= i; j++) {
            starLine += "*";
        }
        console.log(starLine);
    }
}
printStars(3);