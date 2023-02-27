const a = parseInt(prompt('Введіть число a'));

function square(x, callback) {
    result = x **2
    callback(result)
};

square(a, function(result) {
    alert(result)
});
