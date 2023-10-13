document.querySelector('.arrow-next').addEventListener('click', () => {
    document.querySelector('.slides').style.transform = 'translateX(-100%)';
  });
  
  document.querySelector('.arrow-prev').addEventListener('click', () => {
    document.querySelector('.slides').style.transform = 'translateX(0)';
  });