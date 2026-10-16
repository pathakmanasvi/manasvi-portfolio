const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

// Shuffle the three hero photos' positions on hover
const heroPhotos = document.getElementById('heroPhotos');
if (heroPhotos) {
  const photos = Array.from(heroPhotos.querySelectorAll('.shuffle-photo'));
  const slots = ['slot-1', 'slot-2', 'slot-3'];

  function currentSlot(el) {
    return slots.find(s => el.classList.contains(s));
  }

  function shuffle() {
    const order = [...slots].sort(() => Math.random() - 0.5);
    photos.forEach((el, i) => {
      const old = currentSlot(el);
      if (old) el.classList.remove(old);
      el.classList.add(order[i]);
    });
  }

  photos.forEach(el => el.addEventListener('mouseenter', shuffle));
}
