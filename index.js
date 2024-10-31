function reverseString(){
    event.preventDefault();
    var input = document.getElementById("input").value;
    var res = "";
    for(let i = input.length - 1; i >= 0; i--)
        res += input.charAt(i);
    document.getElementById("result").innerHTML = `<b>${res}</b> is the reversed string of <b>${input}</b>`;
}