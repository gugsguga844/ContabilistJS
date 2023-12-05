function handleMenu() {
    const sidebar = document.getElementById('sidebar');
    const button = document.querySelector('.buttonMenu i');
  
    sidebar.classList.toggle('sidebar-hidden');
    button.classList.toggle('fa-times');
  }