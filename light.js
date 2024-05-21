let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let boat=document.getElementById('boat6');
let river5=document.getElementById('river5');
let mountains7=document.getElementById('mountain7');
let noveil=document. querySelector('.noveil')


window.onscroll =function () {
    let value=scrollY;
    stars.style.left=value+"px";
    moon.style.top=value*3+"px";
    mountains3.style.top=value*2+"px";
    mountains4.style.top=value*1.5+"px";
    boat.style.top=value+"px";
    boat.style.left=value*3+"px";
    river5.style.left=value+"px";
    noveil.style.fontsize=value+"px";

}
if ( scrollY>=67) {
    noveil.style.fontsize=67+"px";
    noveil.style.position='fixed';
}
if( scrollY>=478){
    noveil.style.display="none";
    
}
else{
    noveil.style.display="block";
}