window.addEventListener('load', function(){
    var input1=document.getElementById('color1');
    var input2=document.querySelector('#color2');
    var h3= document.querySelector('h3');
    var body= document.getElementsByTagName('body')[0];
    h3.textContent= getComputedStyle(body).background;
    function inputFunc(){
        /*"linear-gradient(to right," try template string
        +input1.value 
        + ", "
        + input2.value 
        + ")" */
        body.style.background=`linear-gradient(to right, ${input1.value}, ${input2.value})`;
        h3.innerText= body.style.background + ";"
    }
    
input1.addEventListener('input', inputFunc);
input2.addEventListener('input', inputFunc);

})
