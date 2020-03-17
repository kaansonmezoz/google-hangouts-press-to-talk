let element = document.querySelector('[aria-label][data-is-muted="false"]');
element.click();
element.style.pointerEvents = "none";

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 32) {   // keyCode for space 
        let element = document.querySelector('[aria-label][data-is-muted="true"]');

        if (element) {
            element.click();
        }
    }
});

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 32) {
        let element = document.querySelector('[aria-label][data-is-muted="false"]');

        if (element) {
            element.click();
        }
    }
});