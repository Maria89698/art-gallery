const gallery = document.getElementById('gallery');
const sortSelect = document.getElementById('sort');

sortSelect.addEventListener('change', () => {
  const items = Array.from(gallery.querySelectorAll('.item'));
  const sortBy = sortSelect.value;

  items.sort((a, b) => {
    if (sortBy === 'name') {
      return a.dataset.name.localeCompare(b.dataset.name);
    } else if (sortBy === 'date') {
      return new Date(a.dataset.date) - new Date(b.dataset.date);
    }
  });

  // Переставляем элементы в галерее
  items.forEach(item => gallery.appendChild(item));
});
