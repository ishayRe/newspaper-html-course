function changeArticleContent(header, subHeader, par1, par2, par3) {
    const headerElement = document.getElementById('header');
    const subHeaderElement = document.getElementById('subHeader');
    const par1Element = document.getElementById('par1');
    const par2Element = document.getElementById('par2');
    const par3Element = document.getElementById('par3');

    headerElement.textContent = header;
    subHeaderElement.textContent = subHeader;
    par1Element.textContent = par1;
    par2Element.textContent = par2;
    par3Element.textContent = par3;
    
}
