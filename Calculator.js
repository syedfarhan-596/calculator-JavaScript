var inputBox = document.getElementById('inputValue');
var output = document.getElementById('output')

var num1 = document.getElementById('num1');
num1.addEventListener('click',function(){
    inputBox.value+= 1;
});
 
var num2 = document.getElementById('num2');
num2.addEventListener('click',function(){
    inputBox.value+= 2;
});

var num3 = document.getElementById('num3');
num3.addEventListener('click',function(){
    inputBox.value+= 3;
});

var num4 = document.getElementById('num4');
num4.addEventListener('click',function(){
    inputBox.value+= 4;
});

var num5 = document.getElementById('num5');
num5.addEventListener('click',function(){
    inputBox.value +=5;
})

var num6 = document.getElementById('num6');
num6.addEventListener('click',function(){
    inputBox.value +=6;
})

var num7 = document.getElementById('num7');
num7.addEventListener('click',function(){
    inputBox.value +=7;
})

var num8 = document.getElementById('num8');
num8.addEventListener('click',function(){
    inputBox.value +=8;
})

var num9 = document.getElementById('num9');
num9.addEventListener('click',function(){
    inputBox.value += 9;
})

var num0 = document.getElementById('oneZero');
num0.addEventListener('click',function(){
    inputBox.value += 0;
})

var num00 = document.getElementById('twoZero');
num00.addEventListener('click',function(){
    inputBox.value += "00";
})

var add = document.getElementById('add');
add.addEventListener('click',function(){
    inputBox.value += "+";
})

var sub = document.getElementById('sub');
sub.addEventListener('click',function(){
    inputBox.value += "-";
})

var mul = document.getElementById('mul');
mul.addEventListener('click',function(){
    inputBox.value += "*";
})

var divide = document.getElementById('divide');
divide.addEventListener('click',function(){
    inputBox.value += "/";
})

var erase = document.getElementById('erase');
erase.addEventListener('click',function(){
    inputBox.value = " ";
    output.innerHTML="--";
})

var del = document.getElementById('delete');
del.addEventListener('click',function(){
    inputBox.value = inputBox.value.toString().slice(0,-1)
})

var dot = document.getElementById('dot');
dot.addEventListener('click',function(){
    inputBox.value += ".";
})

var equals = document.getElementById('equals');
equals.addEventListener('click',function(){
    output.innerHTML = eval(inputBox.value)
})

document.body.addEventListener('keypress',function(e){
    var keyCode = e.keyCode;
    if(keyCode === 97 || keyCode === 49)
    {
        inputBox.value += "1";
    }
    if(keyCode ===98 || keyCode === 50)
    {
        inputBox.value +=2;
    }
    if(keyCode ===99 || keyCode ===51)
    {
        inputBox.value +=3;
    }
    if(keyCode ===100 || keyCode ===52)
    {
        inputBox.value +=4;
    }
    if(keyCode ===101 || keyCode ===53)
    {
        inputBox.value +=5;
    }
    if(keyCode ===102 || keyCode ===54)
    {
        inputBox.value +=6;
    }
    if(keyCode ===103 || keyCode ===55)
    {
        inputBox.value +=7;
    }
    if(keyCode ===104 || keyCode ===56)
    {
        inputBox.value +=8;
    }
    if(keyCode ===105 || keyCode ===57)
    {
        inputBox.value +=9;
    }
    if(keyCode ===96 || keyCode ===48)
    {
        inputBox.value +=0;
    }
})
document.body.addEventListener('keydown',function(e){
    var keyCode = e.keyCode;
    if(keyCode === 8)
    {
        inputBox.value = inputBox.value.toString().slice(0,-1);
    }
    if(keyCode === 46)
    {
        inputBox.value = " ";
    }
    if(keyCode === 107)
    {
        inputBox.value += "+";
    }
    if(keyCode===109)
    {
        inputBox.value += "-";
    }
    if(keyCode===106)
    {
        inputBox.value += "*";
    }
    if(keyCode === 110)
    {
        inputBox.value += ".";
    }
    if(keyCode === 111)
    {
        inputBox.value += "/";
    }
    if(keyCode === 13)
    {
        output.innerHTML = eval(inputBox.value);
        inputBox.value= output.innerHTML;
    }
})


