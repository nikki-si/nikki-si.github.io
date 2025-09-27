function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });


    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1); 
        showPage(target);
        
        history.pushState(null, '', `#${target}`);
    });
});


window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1) || 'about';
    showPage(hash);
});

window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1) || 'about';
    showPage(hash);
});
