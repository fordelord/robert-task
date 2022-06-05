function chocolate (a) {
    let x = a; 
    let konec = 0;
    let obertka = 0;
    while (x > 0) {
        x--; 
        obertka ++;
        if(obertka == 3) {
            obertka = 0; 
            x++;
        }
        konec ++;
    }
    return konec;
}

console.log(chocolate(20));