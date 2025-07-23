window.addEventListener('resize', adjustScreen);

function adjustScreen() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.body.style.width = width + 'px';
    document.body.style.height = height + 'px';
}

// Initial adjustment
adjustScreen();