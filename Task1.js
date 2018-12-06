/*
Implement polyfill for Array.map. As you can check on caniuse the [].map is not supported IE 10.
As a best software engineer, I would like to have ability to use Array.map in my project at IE 10. Can you please help me? :)
Send us jsfiddle, or Github Page for this polyfill.
*/

if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
    if(!Array.isArray(this))
        throw new Error("Not an array")

    if(typeof(callback) !== 'function')
        throw new Error("Not a function")

    let new_arr = [];
    for (let i =0; i < this.length; i++){
        new_arr.push(callback(this[i]),i);
    }
    return new_arr;
    }
}
