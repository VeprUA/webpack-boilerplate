import './hello.scss';

function component() {
    let element = document.createElement('div');

    element.innerHTML = 'hello worlds';
    element.classList.add('test-class');

    return element;
}

document.body.appendChild(component());

