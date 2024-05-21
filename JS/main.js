hamburger = document.querySelector('.hamburger');
nav = document.querySelector('.header__container__nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
}));



// Durée de l'animation en millisecondes
const animationDuration = 5000;

// Sélectionner tous les blocs
const blocks = document.querySelectorAll('.block__img');
const blocksText = document.querySelectorAll('.block__container__text');

index = 0;

function animateBlocks(index) {
    if (index >= blocks.length && index >= blocksText.length) {
        index = 0;
    }
    
    const block = blocks[index];
    const blockText = blocksText[index];

    block.classList.add('expanded');
    blockText.classList.add('show-text');

    setTimeout(() => {
        block.classList.remove('expanded');
        blockText.classList.remove('show-text');
        block.classList.add('collapsed');
        blockText.classList.add('hide-text');
        block.classList.remove('collapsed');
        blockText.classList.remove('hide-text');

        if (index >= blocks.length - 1 && index >= blocksText.length - 1) {
            index = 0;
            animateBlocks(index);
        }
        else {
            animateBlocks(index + 1);
        }
    }, animationDuration);

}

// Commencer les animations
animateBlocks(index);


