let count = 0;
const cartCount = document.querySelector('.cart-count');

document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        mostrarToast(); // ← agrega esta línea
    });
});

function mostrarToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}