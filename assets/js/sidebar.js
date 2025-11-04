document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const closeButton = document.querySelector('.close-btn');
    const sidebar = document.getElementById('sidebar-menu');

    // Função para abrir a barra lateral
    toggleButton.addEventListener('click', function() {
        sidebar.classList.add('active');
        document.body.classList.add('menu-open');
        
        // 💡 NOVO: Esconde o botão de abrir (hambúrguer)
        toggleButton.style.display = 'none'; 
    });

    // Função para fechar a barra lateral
    closeButton.addEventListener('click', function() {
        sidebar.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // 💡 NOVO: Mostra o botão de abrir (hambúrguer) novamente
        toggleButton.style.display = 'block'; // Usamos 'block' ou 'initial', dependendo do seu CSS original
    });
    
    // Opcional: Fechar a barra lateral se clicar fora dela
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            // 💡 NOVO: Garante que o botão volte a aparecer ao fechar por clique externo
            toggleButton.style.display = 'block'; 
        }
    });
});
