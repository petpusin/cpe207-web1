console.log('This is my lst JS');
var str=''
for(var i=0;i<10;i++){
    console.log(i+1)
    str += (i+1)+'<br><br>'
}
document.querySelector('output').innerHTML = str 