import loadHtml from './loadHtml.js';

export default async function footer() {

    let footer = document.getElementById('footer');
    let fileHtml = "/footer.html";
    let load = await loadHtml(fileHtml);
    footer.innerHTML = load;
    
}