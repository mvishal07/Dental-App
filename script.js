const items = document.querySelectorAll('.accordion-item');

items.forEach((item) => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    
    // Close all other items
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector('.accordion-content').classList.remove('show');
        otherItem.querySelector('.icon').textContent = "+";
        otherItem.querySelector('.icon').classList.remove('rotate');
      }
    });

    // Toggle current item
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.icon');

    content.classList.toggle('show');

    if (content.classList.contains('show')) {
      icon.textContent = "-";
      icon.classList.add('rotate');
    } else {
      icon.textContent = "+";
      icon.classList.remove('rotate');
    }
  });
});
