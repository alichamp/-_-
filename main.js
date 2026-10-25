let count = 0;

const plus = document.getElementById("+");
const minus = document.getElementById("-");
const cl = document.getElementById("cl");

plus.addEventListener('click', () => {
count++;
    cl.textContent = count;
    cl.style.color = 'green';
});

minus.addEventListener('click', () => {
    if (count > 0) {
        count--;
        cl.textContent = count;
        cl.style.color = 'red';
    }
});