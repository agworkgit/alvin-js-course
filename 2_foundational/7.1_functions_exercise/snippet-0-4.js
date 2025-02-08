// snippet 0-4

let exclaim = function (str)
{
    let capitalised = str.toUpperCase();
    return capitalised + '!!';
}

let result = exclaim('potato');
console.log(result); // POTATO!!
console.log(result.length); // 8
console.log(result[0]); // P
console.log(result[result.length -1]); // !