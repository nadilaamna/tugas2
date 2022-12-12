var satu= document.getElementById('1');
var dua= document.getElementById('2');
var tiga= document.getElementById('3');
var empat= document.getElementById('4');
var lima= document.getElementById('5');
var enam= document.getElementById('6');
var tujuh= document.getElementById('7');
var delapan= document.getElementById('8');
var sembilan= document.getElementById('9');
var kosong= document.getElementById('kosong');
var layar = document.getElementById('layar');
var tambah = document.getElementById('tambah');
var kali = document.getElementById('kali');
var kurang = document.getElementById('kurang');
var bagi = document.getElementById('bagi');
var hapus = document.getElementById('AC');
var delate = document.getElementById('DEL');
var titik = document.getElementById('titik');

console.log(kosong)
let currentValue= 0;
let simpandulu= 0;
operator= '0';

satu.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=1;
    layar.value= 1;
   }
   else{
    currentValue=currentValue +"1";
    layar.value = currentValue 
   }
});
dua.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=2;
    layar.value= 2;
   }
   else{
    currentValue=currentValue +"2";
    layar.value = currentValue 
   }
});
tiga.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=3;
    layar.value= 3;
   }
   else{
    currentValue=currentValue +"3";
    layar.value = currentValue 
   }
});
empat.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=4;
    layar.value= 4;
   }
   else{
    currentValue=currentValue +"4";
    layar.value = currentValue 
   }
});
lima.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=5;
    layar.value= 5;
   }
   else{  
    currentValue=currentValue +"5";
    layar.value = currentValue 
   }
});
enam.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=6;
    layar.value= 6;
   }
   else{
    currentValue=currentValue +"6";
    layar.value = currentValue 
   }
});
tujuh.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=7;
    layar.value= 7;
   }
   else{
    currentValue=currentValue +"7";
    layar.value = currentValue 
   }
});
delapan.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=8;
    layar.value= 8;
   }
   else{
    currentValue=currentValue +"8";
    layar.value = currentValue 
   }
});
sembilan.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=9;
    layar.value= 9;
   }
   else{
    currentValue=currentValue +"9";
    layar.value = currentValue 
   }
});
kosong.addEventListener('click', function(){
   if (currentValue === 0){
    currentValue=0;
    layar.value= 0;
   }
   else{
    currentValue=currentValue +"0";
    layar.value = currentValue 
   }
});


tambah.addEventListener('click', function(){
    simpandulu= currentValue;
    currentValue=0;
    layar.value=0;
    operator="tambah";
});

kali.addEventListener('click', function(){
    simpandulu= currentValue; 
    currentValue=0;
    layar.value=0;
    operator="kali";
});
kurang.addEventListener('click', function(){
    simpandulu= currentValue;
    currentValue=0;
    layar.value=0;
    operator="kurang";
});
bagi.addEventListener('click', function(){
    simpandulu= currentValue;
    currentValue=0;
    layar.value=0;
    operator="bagi";
});


samadengan.addEventListener('click', function(){
    if (operator == "tambah"){
        let total = parseInt(simpandulu) + parseInt(currentValue);
        layar.value=total;
    }
    if (operator == "kali"){
        let total = parseInt(simpandulu) * parseInt(currentValue);
        layar.value=total;
    }
    if (operator == "kurang"){
        let total = parseInt(simpandulu) - parseInt(currentValue);
        layar.value=total;
    }
    if (operator == "bagi"){
        let total = parseInt(simpandulu) / parseInt(currentValue);
        layar.value=total;
    }
    
    
});

hapus.addEventListener('click', function(){
    currentValue=0;
    layar.value=0;
});

delate.addEventListener('click', function(){
    currentValue=currentValue.substring(0, currentValue.length - 1);
    layar.value=currentValue;
});