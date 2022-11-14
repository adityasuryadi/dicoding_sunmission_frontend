const DrawerInitiator = {
  init({ button, drawer, content }) {
    const icon = button.querySelector('i');
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawer);
      this.changeIcon(icon, drawer);
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
      this.changeIcon(icon, drawer);
    });
  },

  toggleDrawer(event, drawer) {
    drawer.classList.toggle('active');
    event.stopPropagation();
  },

  closeDrawer(event, drawer) {
    drawer.classList.remove('active');
    event.stopPropagation();
  },

  changeIcon(icon, drawer) {
    const toggleIcon = icon;
    if (drawer.classList.contains('active')) {
      toggleIcon.className = 'fa fa-times';
    } else {
      toggleIcon.className = 'fa fa-bars';
    }
  },
};

export default DrawerInitiator;
