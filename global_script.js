// =================== WhatsApp ===================
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5577991508733';

    const texto = `Olá, me chamo ${nome}, ${mensagem}`;
    const msgformatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgformatada}`;
    window.open(url, '_blank');
}

// =================== Digitação do Nome ===================
const texto = "<MAYSON LIMA>";
const elemento = document.querySelector(".nome_mayson");
let index = 0;

function digitar(){
    if(elemento && index < texto.length){
        elemento.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 110);
    }
}

if(elemento){
    digitar();
}

// =================== Carrossel ===================
const track = document.querySelector('.tech-track');
const container = document.querySelector('.tech-container');

let position = 0;
let speed = 0.5;
let targetSpeed = 0.5;

function getHalfWidth(){
    return track.scrollWidth / 2;
}

let halfWidth = track ? getHalfWidth() : 0;

if(track){
    window.addEventListener('resize', () => {
        halfWidth = getHalfWidth();
    });
}

if(container){
    container.addEventListener('mouseenter', () => {
        targetSpeed = 0.1;
    });

    container.addEventListener('mouseleave', () => {
        targetSpeed = 0.5;
    });
}

function animateCarousel(){
    speed += (targetSpeed - speed) * 0.05;
    position -= speed;

    if(position <= -halfWidth){
        position += halfWidth;
    }

    if(track){
        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateCarousel);
    }
}

if(track){
    setTimeout(() => {
        halfWidth = getHalfWidth();
        animateCarousel();
    }, 100);
}

// =================== Partículas ===================
const canvas = document.getElementById("particles");
const ctx = canvas ? canvas.getContext("2d") : null;

if(canvas){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let numParticles;
function getNumParticles() {
    if(window.innerWidth < 480){
        return 20; // mobile pequeno
    } else if(window.innerWidth < 768){
        return 30; // mobile médio
    } else {
        return 75; // desktop
    }
}

numParticles = getNumParticles();
let particles = [];

let mouse = { x: null, y: null };

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("touchmove", (e) => {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
});

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw(){
        ctx.fillStyle = "rgba(78, 70, 229, 0)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Inicializa partículas
for(let i = 0; i < numParticles; i++){
    if(canvas){
        particles.push(new Particle());
    }
}

function connectParticles(){
    for(let a = 0; a < particles.length; a++){
        for(let b = a; b < particles.length; b++){
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = dx * dx + dy * dy;

            if(distance < 17000){
                ctx.strokeStyle = "rgba(78, 70, 229, 0.42)";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }

        if(mouse.x && mouse.y){
            let dx = particles[a].x - mouse.x;
            let dy = particles[a].y - mouse.y;
            let distance = dx * dx + dy * dy;

            if(distance < 19000){
                ctx.strokeStyle = "rgba(78, 70, 229, 0.21)";
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
}

if(canvas && ctx){
    animateParticles();
}

// Redimensionamento
window.addEventListener("resize", () => {
    if(!canvas){
        return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Ajusta número de partículas
    const newNum = getNumParticles();

    if(newNum > particles.length){
        for (let i = particles.length; i < newNum; i++){
            particles.push(new Particle());
        }
    } else if(newNum < particles.length){
        particles = particles.slice(0, newNum);
    }
});
