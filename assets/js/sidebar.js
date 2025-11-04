document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const closeButton = document.querySelector('.close-btn');
    const sidebar = document.getElementById('sidebar-menu');

    // Função para abrir a barra lateral
    toggleButton.addEventListener('click', function() {
        sidebar.classList.add('active');
        document.body.classList.add('menu-open');
    });

    // Função para fechar a barra lateral
    closeButton.addEventListener('click', function() {
        sidebar.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
    
    // Opcional: Fechar a barra lateral se clicar fora dela (em dispositivos maiores)
    document.addEventListener('click', function(event) {
        // Verifica se o clique foi fora da sidebar E fora do botão toggle
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
