document.addEventListener('DOMContentLoaded', function() {
            const siBtn = document.getElementById('si-btn');
            const noBtn = document.getElementById('no-btn');
            
            // Función para el botón SI
            siBtn.addEventListener('click', function() {
                alert('COMO DIJO PABLO NERUDA: : En un beso sabrás todo lo que he callado ');
            });
            
            // Función para el botón NO
            noBtn.addEventListener('mouseover', function() {
                moveButtonRandomly(noBtn);
            });
            
            noBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                moveButtonRandomly(noBtn);
            });
            
            // Función para mover el botón a una posición aleatoria
            function moveButtonRandomly(button) {
                const container = document.querySelector('.container');
                const containerRect = container.getBoundingClientRect();
                
                // Calcular posición aleatoria dentro del contenedor
                const maxX = containerRect.width - button.offsetWidth - 20;
                const maxY = containerRect.height - button.offsetHeight - 20;
                
                const randomX = Math.floor(Math.random() * maxX);
                const randomY = Math.floor(Math.random() * maxY);
                
                // Aplicar la nueva posición
                button.style.position = 'absolute';
                button.style.left = `${randomX}px`;
                button.style.top = `${randomY}px`;
            }
        });