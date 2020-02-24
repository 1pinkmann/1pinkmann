function setcookie(a,b,c) {if(c){var d = new Date();d.setDate(d.getDate()+c);}if(a && b) document.cookie = a+'='+b+(c ? '; expires='+d.toUTCString() : '');else return false;}

function getcookie(a) {var b = new RegExp(a+'=([^;]){1,}');var c = b.exec(document.cookie);if(c) c = c[0].split('=');else return false;return c[1] ? c[1] : false;}

var My_number = 1000030021;

function clearSet(L){if(L){My_number=Math.floor(L)}setcookie("My_number",My_number,2);}

var Lmem=getcookie("My_number");clearSet(Lmem);

function growing(b){

  b=Math.floor(Math.random()+1);

  return b;

}
  setInterval(function () {

      My_number=Math.floor(My_number)

      My_number+=growing(My_number);

      clearSet(My_number);

      document.getElementById('Nnumber').innerHTML=My_number;

  }, 50)
