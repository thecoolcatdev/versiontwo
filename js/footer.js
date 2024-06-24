document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
    <p>Designed and developed by <a href="https://thecoolcatdev.github.io"  class="footer-a">James / Coolcat</a>.</p>
        </div>
    `;

    document.body.appendChild(footer);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../css/main.css'; 
    document.head.appendChild(link);
});
