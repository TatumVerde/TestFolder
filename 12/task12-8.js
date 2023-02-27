const array1 = ['red', 'blue', 'yellow', 'orange', 'green']

function func(array, callback) {
    for(i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

function callback2(element) {
    alert(element)
};

func(array1, callback2)