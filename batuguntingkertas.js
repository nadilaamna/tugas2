 let user = document.getElementsByClassName('user');
 let pilihanuse='';

 Array.from(user).forEach(function(element){
    element.addEventListener('click', function(){
        pilihanuse = this.getAttribute("data-item");
        // console.log('pilihanuse :', pilihanuse);
        pilihancomFinal = pilihancom();
        console.log(pilihancomFinal);

       let tes = adu();
        let layar = document.getElementById("layar");
        layar.innerText = tes ;
        console.log(tes);

    });
 });

 function pilihancom(){
    let datacom= ["batu","gunting", "kertas"];
    let pilihancomAcak= Math.floor(Math.random()* datacom.length);
    let pilihancomFinal =datacom [pilihancomAcak];
    return pilihancomFinal;
 };

 function adu(){
    let status = "";
    if (pilihanuse === "batu" && pilihancomFinal === "batu"){
        status ="Seri";
    }
    if (pilihanuse === "batu" && pilihancomFinal === "gunting"){
        status ="You Win";
    }
    if (pilihanuse === "batu" && pilihancomFinal === "kertas"){
        status ="Com Win";
    }
    // if (pilihanuse === "gunting" && pilihancomFinal === "batu"){
    //     status ="Com Win";
    // }
    // if (pilihanuse === "gunting" && pilihancomFinal === "gunting"){
    //     status ="Seri";
    // }
    // if (pilihanuse === "gunting" && pilihancomFinal === "kertas"){
    //     status ="You Win";
    // }
    // if (pilihanuse === "kertas" && pilihancomFinal === "kertas"){
    //     status ="Seri";
    // }
    // if (pilihanuse === "kertas" && pilihancomFinal === "gunting"){
    //     status ="Com Win";
    // }
    // if (pilihanuse === "kertas" && pilihancomFinal === "batu"){
    //     status ="You Win";
    // }
    console.log(status);
    return status;
 }