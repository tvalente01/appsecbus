document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a[data-target]');
    const allSections = document.querySelectorAll('.home-section, .features, .image-gallery');
    const tabs = document.querySelectorAll('.tab');

    function hideAllSections() {
        allSections.forEach(section => section.style.display = 'none');
        tabs.forEach(tab => tab.style.display = 'none');
    }

    function showSectionById(id) {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'block'; // Mostra o formulário
        }
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            hideAllSections();document.addEventListener('DOMContentLoaded', function() {
                const links = document.querySelectorAll('.menu a[data-target]');
                const sections = document.querySelectorAll('.section');
            
                function hideSections() {
                    sections.forEach(section => {
                        section.style.display = 'none';
                    });
                }
            
                function showSection(id) {
                    const section = document.getElementById(id);
                    if (section) {
                        section.style.display = 'block';
                    }
                }
            
                links.forEach(link => {
                    link.addEventListener('click', function(event) {
                        event.preventDefault();
                        const targetId = this.getAttribute('data-target');
                        hideSections();
                        showSection(targetId);
                    });
                });
            
                // Mostra a seção inicial ou homepage por padrão
                hideSections(); // Primeiro esconde todas as seções
                document.querySelector('.home-section').style.display = 'block'; // Mostra apenas a home-section
            });
            
            showSectionById(this.getAttribute('data-target'));
        });
    });

    document.getElementById('welcome-link').addEventListener('click', function(event) {
        event.preventDefault();
        hideAllSections();
        document.querySelector('.home-section').style.display = 'block';
        document.querySelector('.features').style.display = 'flex';
        document.querySelector('.image-gallery').style.display = 'flex';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('welcome-link'); 
    const allSections = document.querySelectorAll('.section');
    const homeSection = document.getElementById('home-section'); 

    function hideAllSections() {
        allSections.forEach(section => {
            section.style.display = 'none';
        });
    }

    function showHomeSection() {
        hideAllSections();
        homeSection.style.display = 'block'; // Mostra a seção inicial
    }

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showHomeSection();
    });
});

