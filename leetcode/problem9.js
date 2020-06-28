let palindrome = function(x){
    return String(x) == String(x).split("").reverse("").join("") ? true : false
};