document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <header>
        <h1>The Cool Cat Dev</h1>
            <nav>
                <ul>
                    <li><a href="https://thecoolcatdev.github.io">Home</a></li>
                    <li><a href="https://thecoolcatdev.github.io/projects">Projects</a></li>
                    <li><a href="https://thecoolcatdev.github.io/blog">Blog</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '../css/main.css'; 
document.head.appendChild(link);
});