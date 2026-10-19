// Minimal JavaScript for filtering and contact feedback

document.addEventListener('DOMContentLoaded', () => {
  // 1. Project Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const role = card.getAttribute('data-role') || '';
        const type = card.getAttribute('data-type') || '';

        let show = false;
        if (filter === 'all') {
          show = true;
        } else if (filter === 'fullstack') {
          show = category.includes('Full Stack') || category.includes('Frontend') || role.includes('Integration');
        } else if (filter === 'ai') {
          show = category.includes('AI') || role.includes('AI') || role.includes('ML');
        } else if (filter === 'group') {
          show = type.toLowerCase() === 'group';
        } else if (filter === 'personal') {
          show = type.toLowerCase() === 'personal';
        }

        card.style.display = show ? 'flex' : 'none';
      });
    });
  });

  // 2. Simple Contact Form feedback
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-alert');

  if (form && alertBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alertBox.style.display = 'block';
      form.reset();
      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 5000);
    });
  }

  // 3. Dynamic current year
  const yearElem = document.getElementById('year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
