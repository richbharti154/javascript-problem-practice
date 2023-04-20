let str='hello'
function countvowel(str){
    let vowel=['a','e','i','o','u']
    count=0
    for(let letter of str.toLowerCase()){
        if(vowel.includes(letter)){
            count++
        }
    }
    return count
    }
    console.log(countvowel(str))
