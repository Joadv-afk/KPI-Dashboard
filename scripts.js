function showReport() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <iframe title="latihan" width="1024" height="1060" src="https://app.powerbi.com/view?r=eyJrIjoiMmMwZGJhMjItMGQ5My00YTNjLWE1ZWQtY2UxN2U5YWY5NTBiIiwidCI6IjkwYWZmZTBmLWMyYTMtNDEwOC1iYjk4LTZjZWI0ZTk0ZWYxNSIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
    `;
}
