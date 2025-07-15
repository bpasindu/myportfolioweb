window.onload = function() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.onclick = function(e) {
        navList.classList.toggle('active');
        e.stopPropagation(); // Prevent event bubbling
    };

    // Close menu when a menu item is clicked
    navList.querySelectorAll('a').forEach(link => {
        link.onclick = function() {
            navList.classList.remove('active');
        };
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navList.classList.contains('active') && !navList.contains(e.target) && e.target !== menuIcon) {
            navList.classList.remove('active');
        }
    });
};

