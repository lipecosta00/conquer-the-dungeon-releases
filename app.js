const chips = [...document.querySelectorAll('.hero-chip')];
const name = document.querySelector('#selected-name');
const role = document.querySelector('#selected-role');
const portrait = document.querySelector('#selected-portrait');

chips.forEach((chip) => {
  const preload = new Image();
  preload.src = chip.dataset.art;
});

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    if (chip.classList.contains('active')) return;
    chips.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-pressed', 'true');
    name.textContent = chip.dataset.hero.toUpperCase();
    role.textContent = chip.dataset.role;
    portrait.classList.add('is-swapping');
    window.setTimeout(() => {
      portrait.src = chip.dataset.art;
      portrait.alt = `Ilustração de ${chip.dataset.hero}`;
      portrait.classList.remove('is-swapping');
    }, 180);
  });
});
