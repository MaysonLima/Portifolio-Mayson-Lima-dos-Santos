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

const texto = "<MAYSON LIMA>"
const elemento = document.querySelector(".nome_mayson")

let index = 0

function digitar(){
    if(index < texto.length){
        elemento.textContent += texto.charAt(index)
        index++
        setTimeout(digitar, 200) // velocidade
    }
}

digitar()

const track = document.querySelector('.tech-track');
const container = document.querySelector('.tech-container');

let position = 0;
let speed = 0.5;
let targetSpeed = 0.5;


function getHalfWidth(){
    return track.scrollWidth / 2;
}

let halfWidth = getHalfWidth();


window.addEventListener('resize', () => {
    halfWidth = getHalfWidth();
});

container.addEventListener('mouseenter', () => {
    targetSpeed = 0.1;
});

container.addEventListener('mouseleave', () => {
    targetSpeed = 0.5;
});

function animate(){
    speed += (targetSpeed - speed) * 0.05;
    position -= speed;

    if(position <= -halfWidth){
        position += halfWidth;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
}

setTimeout(() => {
    halfWidth = getHalfWidth();
    animate();
}, 100);

tsParticles.load("particles-js", {
  background: {
    color: {
      value: "transparent"
    }
  },
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#4f46e5"
    },
    links: {
      enable: true,
      color: "#4f46e5",
      distance: 150,
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.8
        }
      }
    }
  }
});