const allHrefs = document.querySelectorAll('a');

allHrefs.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
    })
})