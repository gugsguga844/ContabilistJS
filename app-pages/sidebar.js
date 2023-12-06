function handleMenu() {
    const containerSidebar = document.getElementById('container-sidebar');
    const button = document.querySelector('.buttonMenu i');
  
    if (containerSidebar.classList.contains('sidebar')) {
      containerSidebar.classList.remove('sidebar');
      containerSidebar.classList.add('sidebar-hidden');
    } else {
      containerSidebar.classList.remove('sidebar-hidden');
      containerSidebar.classList.add('sidebar')
    }
    button.classList.toggle('fa-times');
  }