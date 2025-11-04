// anonymous function salam
let salam = function () {
  // variable
  let a = 5;
  let b = '3';
  let c = a + parseInt(b);

  // mengambil elemen
  let nama = document.getElementById('nama').value.trim();
  let ucapan = document.getElementById('ucapan');

  // Ternary Operator (kondisi ? true : false)
  ucapan.innerText = nama ? `Selamat Siang, ${nama}` : '';

  // menggunakan if else
  // if(nama=='') ucapan.innerText = '';
  // else ucapan.innerText = `Selamat Siang, ${nama}`;

  // console.log(nama);
}

document.getElementById('slider').addEventListener('input', function(e){
  let slider = e.target;
  let value  = slider.value;
  let span   = slider.nextElementSibling;
  let par    = span.nextElementSibling; 

  span.innerText = value;
  par.style.transform = 'rotate(' + value + 'deg)';




  // console.log(value);
});