document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const videoPages = document.querySelectorAll('.video-page');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Hide all video pages
            videoPages.forEach(page => page.classList.add('hidden'));

            // Add active class to the clicked link
            event.target.classList.add('active');

            // Show the corresponding video page
            const pageId = event.target.getAttribute('data-page');
            document.getElementById(pageId).classList.remove('hidden');
        });
    });
});
