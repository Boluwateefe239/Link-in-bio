// Simple click animation + tracking placeholder
const buttons = document.querySelectorAll('.link-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.opacity = '0.8';
    setTimeout(() => {
      btn.style.opacity = '1';
    }, 150);

    // You can add analytics here later
    console.log('Link clicked:', btn.textContent);
  });
});
