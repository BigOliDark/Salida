
document.addEventListener('DOMContentLoaded', function () {

    const siBtn = document.getElementById('si-btn');
    const noBtn = document.getElementById('no-btn');

    // BOTÓN NO - Mostrar poema
    noBtn.addEventListener('click', function () {

        alert(
            'Ana, tu mirada me provoca,\n' +
            'tu sonrisa me desarma,\n' +
            'y cuando te tengo cerca,\n' +
            'hasta mis pensamientos\n' +
            'se vuelven un poco más atrevidos. ❤️'
        );

    });

    // BOTÓN SÍ - Huir
    siBtn.addEventListener('mouseover', function () {
        moveButtonRandomly(siBtn);
    });

    // Para celulares
    siBtn.addEventListener('touchstart', function (e) {
        e.preventDefault();
        moveButtonRandomly(siBtn);
    });

    // Mover el botón SÍ
    function moveButtonRandomly(button) {

        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();

        const maxX = containerRect.width - button.offsetWidth - 20;
        const maxY = containerRect.height - button.offsetHeight - 20;

        const randomX = Math.max(
            10,
            Math.floor(Math.random() * maxX)
        );

        const randomY = Math.max(
            10,
            Math.floor(Math.random() * maxY)
        );

        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }

});

