// Я постарался максимально, в пределах своих знаний JS, повторить 
// эффект курсора, но не нашел способ сделать так, чтобы box-shadow
// оставался только в пределах первой секции. И почему-то hover-эффекты 
// работают только в первой секции.

let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');


window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(function(){
    var contact = document.querySelector('.cursor-contact')
    var open = document.querySelector('.cursor-open')
    var cursorLink = document.querySelector('.cursor-link')
    

    contact.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor_contact-hover');
    });
    contact.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor_contact-hover');
    });

    open.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor_open-hover');
    });
    open.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor_open-hover');
    });

    cursorLink.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-hover');
    });
    cursorLink.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-hover');
    });
});

