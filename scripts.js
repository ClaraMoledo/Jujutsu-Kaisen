document.addEventListener('DOMContentLoaded', function() {
    const mainImages = document.querySelectorAll('.main img');
    const mainSection = document.querySelector('.main_section');

    // Função de efeito hover
    mainImages.forEach(main => {
        main.addEventListener('mouseover', function() {
            main.style.transform = 'scale(1.0)';
            main.style.filter = 'brightness(1.2)'; // Adiciona um brilho na imagem
            mainSection.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
        });
        
        main.addEventListener('mouseout', function() {
            main.style.transform = 'scale(1)';
            main.style.filter = 'brightness(1)'; // Remove o brilho da imagem
            mainSection.style.boxShadow = '';
        });

        // Função de clique para exibir alerta na imagem
        main.addEventListener('click', function() {
            alert(`Este é o ${main.alt}`);
        });
    });

    // Função para mostrar a imagem ao clicar no texto
    const mainTexts = document.querySelectorAll('.main_section p');
    mainTexts.forEach(text => {
        text.addEventListener('click', function() {
            const imageAlt = text.parentElement.querySelector('img').alt;
            alert(`Este é o ${imageAlt}`);
        });
    });

    // Função para mostrar a mensagem ao clicar no botão
    const button = document.getElementById('showMessageButton');
    const message = document.getElementById('message');
    message.style.display = 'none'; // Esconde a mensagem inicialmente

    button.addEventListener('click', function() {
        message.style.display = 'block';
        setTimeout(function() {
            message.style.display = 'none';
        }, 3000); // Esconde a mensagem após 3 segundos
    });
});


