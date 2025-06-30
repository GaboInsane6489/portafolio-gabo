const traducciones = {
    es: {
        inicio: "Inicio",
        sobreMiPrincipal: "Desarrollador Web Full Stack",
        sobreMi: "Sobre mí",
        descripcionSobreMi: "🧠 Desarrollador web full stack apasionado por crear soluciones limpias, escalables y centradas en la experiencia del usuario. > > 💻 Domino HTML, CSS, JavaScript, Node.js y MongoDB, integrando funcionalidades dinámicas que transforman ideas en productos reales. > > 🚀 Me especializo en eficiencia, precisión y sistemas que funcionan — incluso bajo presión. > > 🔍 Siempre aprendiendo. Siempre optimizando. Siempre un paso adelante.",
        habilidades: "🛠️ Habilidades",
        experiencia: "Experiencia",
        proyectos: "Proyectos",
        contacto: "Contacto",
        saludo: "Hola, Soy Gabo. Un Profesional Programador Full Stack",
        rol: "Desarrollador Web Full Stack",
        descripcion: "¿Tienes un proyecto o idea que quieres construir? ¡Hablemos!",
        botonEnviar: "Enviar mensaje",
        TecnologíasTitulo: "Tecnologías",
        HabilidadesParrafo: "Estas son las fortalezas que aplico en cada proyecto que desarrollo.",
        listaHabilidades1: "🔧 Lógica y resolución de problemas complejos",
        listaHabilidades2: "🎯 Precisión técnica en frontend y backend",
        listaHabilidades3: "🧩 Pensamiento estructurado y arquitectura modular",
        listaHabilidades4: "🔄 Integración de APIs, almacenamiento local y notificaciones",
        listaHabilidades5: "💡 Creatividad aplicada al diseño funcional y dinámico",
        listaHabilidades6: "🧠 Mentalidad resiliente y enfoque en sistemas robustos",
        listaHabilidades7: "🤝 Comunicación clara y compromiso profesional",
        ProyectosExitosos: "🚀 Proyectos exitosos",
        ParrafoProyectosExitosos: "Estos son algunos de los desarrollos en los que he trabajado y que han generado impacto real.",
        proyectoTitulo1: "💼 Instalaciones García’s",
        proyectoDescripcion1: "App web para gestionar técnicos, proyectos y reportes internos.",
        proyectoItem1_1: "✅ CRUD de técnicos y clientes",
        proyectoItem1_2: "✅ Notificaciones automáticas",
        proyectoItem1_3: "✅ Paneles de control responsivos",
        proyectoBtnVerMas: "Ver más",

        experienciaTitulo: "📂 Experiencia",
        experienciaParrafo: "Un vistazo a los entornos donde he aplicado mis conocimientos como desarrollador.",

        contactoTitulo: "📫 Contacto",
        contactoParrafo: "¿Tienes un proyecto o idea que quieres construir? ¡Hablemos!",
        contactoBoton: "Enviar mensaje",
        mensajeEnviado: "✅ ¡Mensaje enviado con éxito!",

        btnConoceme: "Conóceme más ↓"
        // Agrega más claves según las necesites
    },
    en: {
        inicio: "Home",
        sobreMiPrincipal: "Full Stack Web Developer",
        sobreMi: "About Me",
        descripcionSobreMi: "🧠 Full-stack web developer passionate about building clean, scalable, and user-experience-focused solutions. > > 💻 I'm fluent in HTML, CSS, JavaScript, Node.js, and MongoDB, integrating dynamic features that transform ideas into real products. > > 🚀 I specialize in efficiency, precision, and systems that work—even under pressure. > > 🔍 Always learning. Always optimizing. Always one step ahead.",
        habilidades: "🛠️ Skills",
        HabilidadesParrafo: "These are the strengths I apply in every project I develop.",
        experiencia: "Experience",
        proyectos: "Projects",
        contacto: "Contact",
        saludo: "Hi, I'm Gabo. A Professional Full Stack Developer",
        rol: "Full Stack Web Developer",
        descripcion: "Got an idea or project to build? Let’s talk!",
        botonEnviar: "Send Message",
        TecnologíasTitulo: "Technologies",
        listaHabilidades1: "🔧 Logic and complex problem solving",
        listaHabilidades2: "🎯 Technical precision in frontend and backend",
        listaHabilidades3: "🧩 Structured thinking and modular architecture",
        listaHabilidades4: "🔄 API integration, local storage, and notifications",
        listaHabilidades5: "💡 Creativity applied to functional and dynamic design",
        listaHabilidades6: "🧠 Resilient mindset and focus on robust systems",
        listaHabilidades7: "🤝 Clear communication and professional commitment",
        ProyectosExitosos: "🚀 Successful projects",
        ParrafoProyectosExitosos: "These are some of the developments I've worked on that have had a real impact.",
        proyectoTitulo1: "💼 García’s Installations",
        proyectoDescripcion1: "Web app to manage technicians, projects, and internal reports.",
        proyectoItem1_1: "✅ Technician and client CRUD",
        proyectoItem1_2: "✅ Automated notifications",
        proyectoItem1_3: "✅ Responsive dashboards",
        proyectoBtnVerMas: "View more",

        experienciaTitulo: "📂 Experience",
        experienciaParrafo: "A look at the environments where I've applied my skills as a developer.",

        contactoTitulo: "📫 Contact",
        contactoParrafo: "Have a project or idea you want to build? Let’s talk!",
        contactoBoton: "Send message",
        mensajeEnviado: "✅ Message sent successfully!",

        btnConoceme: "Learn more ↓"
    }
};



// ========== NAV: Scroll activo en navegación ==========
function manejarScrollActivo() {
    const secciones = document.querySelectorAll("section");
    const enlacesNav = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {
        let seccionActual = "";

        secciones.forEach(seccion => {
            const top = window.scrollY;
            const offset = seccion.offsetTop - 100;
            const height = seccion.offsetHeight;

        if (top >= offset && top < offset + height) {
            seccionActual = seccion.getAttribute("id");
        }
    });

        enlacesNav.forEach(link => {
            link.classList.remove("activo");
            if (link.getAttribute("href") === `#${seccionActual}`) {
                link.classList.add("activo");
            }
        });
    });
}

// ========== IDIOMA: Cambio de idioma ==========
function cambiarIdioma() {
  const btnIdioma = document.getElementById("btnIdioma");
  let idiomaActual = localStorage.getItem("idioma") || "es";

  aplicarTraducciones(idiomaActual);
  actualizarTextoBoton(idiomaActual);

  btnIdioma.addEventListener("click", () => {
    idiomaActual = idiomaActual === "es" ? "en" : "es";
    localStorage.setItem("idioma", idiomaActual);
    aplicarTraducciones(idiomaActual);
    actualizarTextoBoton(idiomaActual);
  });
}

function aplicarTraducciones(idioma) {
    const elementos = document.querySelectorAll("[data-i18n]");

    elementos.forEach(el => {
    const clave = el.getAttribute("data-i18n");
    const traduccion = traducciones[idioma] && traducciones[idioma][clave];

    if (traduccion) {
            el.innerText = traduccion;
        } else {
            el.innerText = "⚠️ Falta traducción";
            console.warn(`Traducción faltante para "${clave}" en idioma "${idioma}"`);
        }
    });
}

function actualizarTextoBoton(idioma) {
    const btnIdioma = document.getElementById("btnIdioma");
    if (!btnIdioma) return;

    const siguiente = idioma === "es" ? "EN" : "ES";
    btnIdioma.textContent = siguiente;
}

function aplicarTraducciones(idioma) {
    const elementos = document.querySelectorAll("[data-i18n]");
    elementos.forEach(el => {
        const clave = el.getAttribute("data-i18n");
        el.textContent = traducciones[idioma][clave];
    });
}

function actualizarTextoBoton(idioma) {
    const btnIdioma = document.getElementById("btnIdioma");
    btnIdioma.textContent = idioma === "es" ? "🌐 English" : "🌐 Español";
}

// ========== TEMA: Modo oscuro ==========
function alternarTema() {
    const btnTema = document.getElementById("btnTema");
    const body = document.body;
    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "oscuro") {
        body.classList.add("dark-theme");
        btnTema.textContent = "☀️ Modo claro";
    } else {
        btnTema.textContent = "🌙 Modo oscuro";
    }

    btnTema.addEventListener("click", () => {
        const modoOscuro = body.classList.toggle("dark-theme");
        localStorage.setItem("tema", modoOscuro ? "oscuro" : "claro");
        btnTema.textContent = modoOscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
    });
    
    document.body.classList.add('tema-transicion');
        setTimeout(() => {
            document.body.classList.remove('tema-transicion');
        }, 500);
}

// ========== SCROLL: Animaciones por IntersectionObserver ==========
function animacionesPorScroll() {
    const elementos = document.querySelectorAll(".animar-scroll");

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("activo");
            observer.unobserve(entrada.target); // activa solo una vez
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach((el) => observer.observe(el));

    /*
    // ✨ Extra: Habilidades tipo ola
    const seccionHabilidades = document.querySelector("#habilidades");
    if (seccionHabilidades) {
        const observerHabilidades = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll("li");
                    items.forEach(item => item.classList.add("visible"));
                    // obs.unobserve(entry.target); ← ELIMINALO o comentá esta línea
                }
            });
        }, { threshold: 0.3 });
        observerHabilidades.observe(seccionHabilidades);
    }
        */
}

// ========== FORMULARIO: Validación visual ==========
function validarFormulario() {
    const formulario = document.getElementById("form-contacto");
    const mensaje = document.getElementById("mensaje-envio");

    if (!formulario || !mensaje) return;

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        mensaje.style.display = "block";
        mensaje.style.opacity = "0";

    setTimeout(() => {
        mensaje.style.opacity = "1";
    }, 100);

        setTimeout(() => {
            mensaje.style.opacity = "0";
            setTimeout(() => {
                mensaje.style.display = "none";
                formulario.reset();
            }, 500);
        }, 3500);
    });
}

// ========== LOADER: Terminal inicial ==========
function iniciarLoaderTerminal() {
    const loader = document.getElementById("loader-terminal");
    if (!loader) return;

        window.addEventListener("load", () => {
            setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 800);
        }, 3500);
    });
}

// ========== CANVAS: Fondo estelar animado ==========
function fondoEstelar() {
    const canvas = document.getElementById("fondo-animado");
    const ctx = canvas.getContext("2d");
    let w, h, estrellas = [], meteoritos = [];

  // Inicializar tamaños y objetos
    function inicializar() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        estrellas = [];
        meteoritos = [];

    // Crear estrellas que bajan suavemente
    for (let i = 0; i < 60; i++) {
        estrellas.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.5 + 0.5,     // radio pequeño
                dx: Math.random() * 0.5 - 0.25,  // pequeño movimiento horizontal
                dy: Math.random() * 0.4 + 0.2,   // velocidad suave descendente
                opacity: Math.random() * 0.6 + 0.3
            });
        }
    }

    // Añadir meteoritos ocasionales
        function crearMeteorito() {
            meteoritos.push({
            x: Math.random() * w,
            y: 0,
            length: Math.random() * 80 + 80,
            speed: Math.random() * 4 + 3,
            angle: Math.PI / 4,
            opacity: Math.random() * 0.5 + 0.3
        });

        if (meteoritos.length > 8) meteoritos.shift(); // limitar cantidad
    }

    // Animación principal
    function animar() {
        const modoOscuro = document.body.classList.contains("dark-theme");

        // Pintar fondo según tema
        if (modoOscuro) {
            const gradiente = ctx.createLinearGradient(0, 0, 0, h);
            gradiente.addColorStop(0, "#0D0D0D");
            gradiente.addColorStop(1, "#212226");
            ctx.fillStyle = gradiente;
            } else {
            ctx.fillStyle = "#0F8BA5";
        }

        ctx.fillRect(0, 0, w, h);

        // Dibujar estrellas suaves
            estrellas.forEach(e => {
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${e.opacity})`;
            ctx.fill();
            e.y += e.dy;
            e.x += e.dx;

            if (e.y > h) {
                e.y = -10;
                e.x = Math.random() * w;
            }
        });

        // Dibujar meteoritos
        meteoritos.forEach(m => {
        const vx = Math.cos(m.angle) * m.speed;
        const vy = Math.sin(m.angle) * m.speed;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - vx * m.length, m.y - vy * m.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${m.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        m.x += vx;
        m.y += vy;
        });

        requestAnimationFrame(animar);
    }

    inicializar();
    animar();

    setInterval(crearMeteorito, 3000);
    window.addEventListener("resize", inicializar);
}

// ========== EMAIL: Funciones de copiar y enviar ==========
function configurarEmail() {
    // 🟦 REFERENCIAS: elementos del DOM involucrados
        const btnCopy = document.querySelector('.btn-copy');              // Botón para copiar email
        const emailInput = document.querySelector('.email-search');       // Campo con tu email
        const sendBtn = document.querySelector('.btn-send');              // Botón para mostrar opciones
        const optionsBox = document.getElementById('emailOptions');       // Ventanita de opciones

    // ✅ 1. COPIAR CORREO AL PORTAPAPELES
        btnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(emailInput.value)
            .then(() => alert('¡Correo copiado al portapapeles! ✅'))
            .catch(() => alert('Algo salió mal al copiar el correo.'));
        });

    // ✅ 2. MOSTRAR PANEL DE OPCIONES (como modal flotante)
        sendBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic se propague y cierre el modal de inmediato
            optionsBox.classList.add('visible'); // Mostramos el panel
        });

    // ✅ 3. CERRAR PANEL SI CLICKEA FUERA DE ÉL
        document.addEventListener('click', (e) => {
            const isOutside = !optionsBox.contains(e.target) && !sendBtn.contains(e.target);
            if (isOutside) {
                optionsBox.classList.remove('visible');
            }
        });

    // ✅ 4. CERRAR PANEL CON TECLA ESCAPE
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                optionsBox.classList.remove('visible');
            }
        });

    // ✅ 5. OPCIÓN: ABRIR GMAIL EN NUEVA PESTAÑA CON ASUNTO Y MENSAJE PREDEFINIDO
        const btnGmail = document.querySelector('.opt-gmail');
        if (btnGmail) {
            btnGmail.addEventListener('click', function (e) {
            e.preventDefault(); // Prevenir cualquier comportamiento inesperado

            const correo = emailInput.value;

            const asunto = "Contacto desde tu portafolio";
            const cuerpo = "Hola Gabriel, me gustó tu trabajo y me gustaría conversar contigo.";

            const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(correo)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

            // Abrir Gmail en una nueva pestaña
            const nuevaVentana = window.open(gmailURL, '_blank');

            if (!nuevaVentana) {
                alert("Por favor permite ventanas emergentes para este sitio 😅");
            }

            // Cerrar menú flotante
            optionsBox.classList.remove('visible');
        });
    }
    // ✅ 6. OPCIÓN: ABRIR MAILTO EN CLIENTE POR DEFECTO
        document.querySelector('.opt-mailto').addEventListener('click', () => {
            window.location.href = `mailto:${emailInput.value}`;
        });

    // ✅ 7. OPCIÓN: COPIAR MENSAJE BASE PERSONALIZADO
        document.querySelector('.opt-copy-msg').addEventListener('click', () => {
            const mensaje = "Hola Gabriel, me gustaría ponerme en contacto contigo.";
            navigator.clipboard.writeText(mensaje)
            .then(() => alert('Mensaje copiado 📋'))
            .catch(() => alert('No se pudo copiar el mensaje.'));
        });
}


// ========== INICIALIZACIÓN GLOBAL ==========
document.addEventListener("DOMContentLoaded", () => {
    manejarScrollActivo();
    cambiarIdioma();
    alternarTema();
    animacionesPorScroll();
    validarFormulario();
    iniciarLoaderTerminal();
    fondoEstelar();
    configurarEmail();
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader-terminal");
    if (loader) loader.style.display = "none";
});

// 🧩 Función principal: Inicializa todas las interacciones del sitio
function iniciarInteracciones() {
    console.log("🎬 iniciarInteracciones ejecutada");
    console.trace();
    // 🔊 Referencias a sonidos de clic y hover
    const clickSound = document.getElementById("clickSound");
    const hoverSound = document.getElementById("hoverSound");

    // 🖱️ Reproduce sonido al pasar el mouse por elementos interactivos
    const elementosReaccionan = document.querySelectorAll(
        "button, a, .nav-link, svg, .control-btn, .Sonido"
    );

    elementosReaccionan.forEach(el => {
        el.addEventListener("mouseenter", () => {
            if (hoverSound) {
                hoverSound.currentTime = 0;
                hoverSound.play();
            }
        });
    });

    // 👆 Reproduce clic + animación al presionar botones/enlaces destacados
    function reproducirClickSuave(boton) {
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play();
        }

        const efecto = boton.dataset.efecto || "click-feedback";
        boton.classList.add(efecto);
        setTimeout(() => boton.classList.remove(efecto), 200);
    }

    // 🎯 Aplica animación de clic a botones clave
    const botonesClave = document.querySelectorAll(
        ".btn-send, .btn-copy, .btn-ver-mas, .opt-gmail, .opt-mailto, .opt-copy-msg, .nav-link, .btn-tema, .btn-idioma, .control-btn, .nav-link-especial, .click-feedback-brillante"
    );

    botonesClave.forEach(boton => {
        boton.addEventListener("click", () => reproducirClickSuave(boton));
    });

    // 🎯 Añade clase temporal cuando se navega a una sección (efecto visual)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            const destino = document.querySelector(link.getAttribute("href"));
            if (destino) {
                setTimeout(() => {
                    destino.classList.add("seccion-focus");
                setTimeout(() => destino.classList.remove("seccion-focus"), 800);
                }, 300); // Delay para permitir que el scroll termine
            }
        });
    });

    // 🌀 Animación scroll para aparecer elementos de experiencia
    function animarExperienciasAlScroll() {
        const elementos = document.querySelectorAll(".animar-elemento");

        const observer = new IntersectionObserver((entradas) => {
                entradas.forEach((entrada, index) => {
                    if (entrada.isIntersecting) {
                        setTimeout(() => {
                            entrada.target.classList.add("visible");
                        }, index * 300); // Retraso secuencial
                        observer.unobserve(entrada.target); // Solo se anima una vez
                    }
                });
            }, {
        threshold: 0.2
    });

        elementos.forEach(el => observer.observe(el));
    }

    // 🚀 Ejecutar animaciones al scroll
    animarExperienciasAlScroll();

    // 🔁 Llamas aquí tu animación de ola con sonido
    animacionHabilidadesOlaConSonido();

    // 💬 Notificación de bienvenida
    function esperarInteraccionBienvenida() {
        crearNotificacion("👋 ¡Bienvenido a mi portafolio interactivo!");
        window.removeEventListener("click", esperarInteraccionBienvenida);
    }

    window.addEventListener("click", esperarInteraccionBienvenida);

    // 💡 Eventos
    const btnTema = document.querySelector("#btnTema");
    if (btnTema) {
        btnTema.addEventListener("click", () => {
            const body = document.body;
            const esClaro = body.classList.toggle("light-theme");

            btnTema.textContent = esClaro ? "🌙 Modo oscuro" : "☀️ Modo claro";

            crearNotificacion(
                esClaro
                ? "☀️ Modo claro activado"
                : "🌙 Modo oscuro activado"
            );
        });
    }

    const btnIdioma = document.querySelector("#btnIdioma");
        if (btnIdioma) {
            btnIdioma.addEventListener("click", () => {
                // Detecta el nuevo estado que vas a aplicar
                const cambiarAIngles = btnIdioma.textContent.includes("Español");

                // Cambia el texto del botón según el nuevo idioma
                btnIdioma.textContent = cambiarAIngles ? "🌐 English" : "🌐 Español";

                // Muestra la notificación del idioma al que se cambió
                crearNotificacion(
                    cambiarAIngles
                    ? "🌐 Idioma cambiado a Inglés"
                    : "🌐 Idioma cambiado a Español"
                );
            });
        }

    document.querySelector(".btn-copy")?.addEventListener("click", () => {
        crearNotificacion("📋 Texto copiado al portapapeles");
    });

    document.querySelector(".btn-ver-proyectos")?.addEventListener("click", () => {
        crearNotificacion("💼 Mira algunos de mis desafíos más creativos");
    });

    window.addEventListener("scroll", () => {
        const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        if (scrollBottom) {
            crearNotificacion("🎯 Gracias por explorar todo mi portafolio");
        }
    });

}


// 🌊 Animación progresiva de habilidades con efecto de ola + sonido sincronizado
function animacionHabilidadesOlaConSonido() {
    // 🎯 Selecciona la sección objetivo y el audio de ola
    const seccion = document.querySelector("#habilidades");
    const sonido = document.getElementById("sonidoOla");

    // 🚫 Si alguno de los elementos no existe, termina la función
    if (!seccion || !sonido) return;

    // 👀 Observer para detectar cuándo la sección entra en pantalla
    const observer = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entry => {
            if (entry.isIntersecting) {
                // 🎯 Selecciona todos los elementos de lista dentro de la sección
                const items = entry.target.querySelectorAll("li");

                // 🔁 Recorre cada ítem para aplicar animación + sonido secuencial
                items.forEach((item, index) => {
                    // Aplica clase de visibilidad (debe estar definida en CSS con transición)
                    item.classList.add("visible");

                    // 🎵 Reproduce el sonido con un pequeño delay para efecto de ola
                    setTimeout(() => {
                        sonido.currentTime = 0;
                        sonido.play().catch(() => {}); // Silencia si el autoplay está bloqueado
                    }, index * 200); // 200ms entre cada elemento
                });

                // 🔒 Anima la sección solo una vez
                observador.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); // Se activa cuando al menos 30% de la sección es visible

    // 🛰️ Observa la sección de habilidades
    observer.observe(seccion);

}


const enlaces = document.querySelectorAll(".nav-link");
const secciones = document.querySelectorAll("section");

//navegación más nítida e interactiva

window.addEventListener("scroll", () => {
    let current = "";
    secciones.forEach((section) => {
        const top = window.scrollY;
        if (top >= section.offsetTop - 60) {
            current = section.getAttribute("id");
        }
    });

    enlaces.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});

// 💬 Sistema de notificaciones flotantes con animación y sonido suave
function crearNotificacion(mensaje, duracion = 6000, sonido = true) {
    const contenedor = document.getElementById("notificaciones");
    if (!contenedor) {
        console.warn("No se encontró el contenedor de notificaciones.");
        return;
    }

    // 🧱 Crea la notificación y le aplica clase + contenido
    const noti = document.createElement("div");
    noti.classList.add("notificacion");
    noti.textContent = mensaje;
    contenedor.appendChild(noti);

    // 🎵 Reproduce sonido opcional si está habilitado
    if (sonido) {
        try {
            const audio = new Audio("Sounds/notificacion-suave.mp3");
            audio.volume = 0.5;
            audio.play();
        } catch (error) {
            console.error("Error al reproducir sonido de notificación:", error);
        }
    }

    // ⏳ Inicia secuencia de desaparición y limpieza del DOM
    setTimeout(() => {
        noti.style.opacity = "0";
        noti.style.transform = "translateY(-20px)";
        setTimeout(() => {
            if (contenedor.contains(noti)) {
                contenedor.removeChild(noti);
            }
        }, 300);
    }, duracion);
}



// 🚀 Llama esta función dentro de iniciarInteracciones() o tras el DOMContentLoaded
document.addEventListener("DOMContentLoaded", iniciarInteracciones);
