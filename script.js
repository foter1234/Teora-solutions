        import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

        // Função Helper para carregar e configurar o Canvas
        const loadLottie = (id, url) => {
            const canvas = document.getElementById(id);
            if(canvas) {
                // Define resolução interna alta para não ficar borrado quando grande
                canvas.width = 500; 
                canvas.height = 500;
                
                new DotLottie({
                    autoplay: true,
                    loop: true,
                    canvas: canvas,
                    src: url,
                });
            }
        };

        // Carregando Animações
        loadLottie('lottie-sites', 'https://lottie.host/b4a6f826-5a3e-4bb1-a273-27a64277997a/oTmD6ExO6I.lottie');
        loadLottie('lottie-marketing', 'https://lottie.host/d6c5ec3a-345c-46e5-a2ce-b27e3259a112/gnIg6sgS7c.lottie');
        loadLottie('lottie-consultoria', 'https://lottie.host/7bde712a-f629-474f-95aa-47431f1361aa/mla5Fd7XcE.lottie');
        loadLottie('lottie-3d-model', 'https://lottie.host/00cba709-0def-42d8-bb89-1ad668d9cf22/ADBvriphlB.lottie');

if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    function forceTopOnReload() {
        const navigationEntry = performance.getEntriesByType('navigation')[0];
        const isReloadByEntry = navigationEntry && navigationEntry.type === 'reload';
        const isReloadLegacy = performance.navigation && performance.navigation.type === 1;

        if (isReloadByEntry || isReloadLegacy) {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
    }

    window.addEventListener('DOMContentLoaded', forceTopOnReload);
    window.addEventListener('pageshow', forceTopOnReload);

    // 1. Observer ÚNICO para a animação da Equipe (Entra e Sai)
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const group = document.getElementById('avatar-group');
            if (entry.isIntersecting) {
                group.classList.add('animated');
            } else {
                // Remove a classe para eles "juntarem" de novo quando você sai da seção
                group.classList.remove('animated');
            }
        });
    }, { threshold: 0.2 });

    teamObserver.observe(document.getElementById('sobre'));

    const porqueSection = document.getElementById('porque');
    const porqueGrid = document.querySelector('#porque .beneficios-grid');

    if (porqueSection && porqueGrid) {
        const porqueObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    porqueGrid.classList.add('animated');
                } else {
                    porqueGrid.classList.remove('animated');
                }
            });
        }, { threshold: 0.2 });

        porqueObserver.observe(porqueSection);
    }

    // 2. Função de Clique/Toggle para Mobile
    function toggleMember(event, element) {
        event.stopPropagation();
        const isActive = element.classList.contains('active');
        
        // Limpa todos
        document.querySelectorAll('.avatar-item').forEach(av => av.classList.remove('active'));
        
        // Ativa apenas se não estava ativo antes
        if(!isActive) {
            element.classList.add('active');
        }
    }

    // 3. Limpa seleções ao clicar fora
    document.addEventListener('click', () => {
        document.querySelectorAll('.avatar-item').forEach(av => av.classList.remove('active'));
    });

    // 4. Scroll Reveal para as DEMAIS seções (Exceto avatares para não bugar)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    // Aplicar apenas nos cards de serviços
    document.querySelectorAll('.service-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        revealObserver.observe(el);
    });
    const introOverlay = document.getElementById('intro-overlay');
    const introVideo = document.getElementById('intro-video');
    const skipBtn = document.getElementById('skip-intro');

    // Inicia o processo
    document.body.classList.add('intro-active');

    function finalizarIntro() {
        introOverlay.classList.add('fade-out');
        document.body.classList.remove('intro-active');
        
        // Remove do DOM após a transição para não pesar
        setTimeout(() => {
            introOverlay.remove();
        }, 1000);
    }

    // 1. Quando o vídeo terminar naturalmente
    introVideo.onended = finalizarIntro;

    // 2. Se o usuário clicar em Pular
    skipBtn.addEventListener('click', finalizarIntro);

    // 3. Play automático (alguns browsers exigem interação, então tentamos dar play no load)
    window.addEventListener('DOMContentLoaded', () => {
        introVideo.play().catch(error => {
            console.log("Autoplay bloqueado pelo browser, aguardando clique.");
            // Se o browser bloquear o play, mostramos o botão de pular ou iniciamos ao primeiro clique
            finalizarIntro(); // Opcional: se bugar, pula direto pro site
        });
    });