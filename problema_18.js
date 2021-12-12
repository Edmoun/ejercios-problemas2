var tripoTriang = function(a, b, c) {
    if (a === b && b === c) {
        return 1;
    } else if (a === b || b === c || a === c) {
        return 2;
    } else {
        return 3;
    }
    }

    console.log(tripoTriang(2, 2, 2));