var grafArr = function(arr, num, car) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    var scale = 10 / (max - min);
    var str = "";
    for (var i = 0; i < num; i++) {
        str += car;
        for (var j = 0; j < scale * (arr[i] - min); j++) {
        str += car;
        }
        str += "\n";
    }
    return str;
    }

    console.log(grafArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, "+"));