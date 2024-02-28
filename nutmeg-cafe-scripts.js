document.getElementById('show-more').addEventListener('click', function() {
  const menuItems = document.querySelectorAll('.menu-item');
  const visibleItems = 3;
  const maxItems = menuItems.length;
  const buttonText = document.getElementById('show-more');
  
  if (buttonText.textContent === 'Show More') {
    for (let i = visibleItems; i < maxItems; i++) {
      menuItems[i].style.display = 'block';
    }
    buttonText.textContent = 'Show Less';
  } else {
    for (let i = visibleItems; i < maxItems; i++) {
      menuItems[i].style.display = 'none';
    }
    buttonText.textContent = 'Show More';
  }
});