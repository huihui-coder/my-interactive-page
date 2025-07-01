const myButton = document.getElementById('myButton');
const demo = document.getElementById('demo');

myButton.addEventListener('click', () => {
    demo.textContent = 'The text has been changed!';
}); 