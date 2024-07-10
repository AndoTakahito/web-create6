// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const drawerInput = document.getElementById('drawer_input');
  const navItems = document.querySelectorAll('.nav_item a');

  const swiper = new Swiper(".swiper", {});

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          drawerInput.checked = false;
      });
  });
});

$(function(){
  $('.bxslider').bxSlider({
    // オプションを書く場所
  });
});

