let cel = document.getElementById('cel');
let fah = document.getElementById('fah');
let resNum = document.getElementById('resultnum');


cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    fah.value = f;
    resNum.innerHTML = `${f} F`;
});


fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f - 32) * 5/9
    cel.value = c;
    resNum.innerHTML = `${c} C`;
});

