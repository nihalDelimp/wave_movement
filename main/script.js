// Simmering gold particle test
// Original particle idea from https://github.com/sebleedelisle/live-coding-presentations
var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    screenW = window.innerWidth,
    screenH = window.innerHeight,
    mouseX = screenW / 2,
    mouseY = screenH / 2,
    mouseVelX = 0,
    mouseVelY = 0,
    lastMouseX = mouseX,
    lastMouseY = mouseY,
    mouseDown = false,
    particles = [],
    MAX_PARTICLES = 350,
    particleImage = new Image();

particleImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAC0WlDQ1BJQ0MgcHJvZmlsZQAAOI2NlM9LFGEYx7+zjRgoQWBme4ihQ0ioTBZlROWuv9i0bVl/lBLE7Oy7u5Ozs9PM7JoiEV46ZtE9Kg8e+gM8eOiUl8LALALpblFEgpeS7Xlnxt0R7ccLM/N5nx/f53nf4X2BGlkxTT0kAXnDsZJ9Uen66JhU+xEhHEEdwqhTVNuMJBIDoMFjsWtsvofAvyute/v/OurStpoHhP1A6Eea2Sqw7xfZC1lqBBC5XsOEYzrE9zhbnv0x55TH8659KNlFvEh8QDUtHv+auEPNKWmgRiRuyQZiUgHO60XV7+cgPfXMGB6k73Hq6S6ze3wWZtJKdz9xG/HnNOvu4ZrE8xmtN0bcTM9axuod9lg4oTmxIY9DI4YeH/C5yUjFr/qaoulEk9v6dmmwZ9t+S7mcIA4TJ8cL/TymkXI7p3JD1zwW9KlcV9znd1Yxyeseo5g5U3f/F/UWeoVR6GDQYNDbgIQk+hBFK0xYKCBDHo0iNLIyN8YitjG+Z6SORIAl8q9TzrqbcxtFyuZZI4jGMdNSUZDkD/JXeVV+Ks/JX2bDxeaqZ8a6qanLD76TLq+8ret7/Z48fZXqRsirI0vWfGVNdqDTQHcZYzZcVeI12P34ZmCVLFCpFSlXadytVHJ9Nr0jgWp/2j2KXZpebKrWWhUXbqzUL03v2KvCrlWxyqp2zqtxwXwmHhVPijGxQzwHSbwkdooXxW6anRcHKhnDpKJhwlWyoVCWgUnymjv+mRcL76y5o6GPGczSVImf/4RVyGg6CxzRf7j/c/B7xaOxIvDCBg6frto2ku4dIjQuV23OFeDCN7oP3lZtzXQeDj0BFs6oRavkSwvCG4pmdxw+6SqYk5aWzTlSuyyflSJ0JTEpZqhtLZKi65LrsiWL2cwqsXQb7Mypdk+lnnal5lO5vEHnr/YRsPWwXP75rFzeek49rAEv9d/AvP1F2p6YVQAAAAlwSFlzAAALEgAACxIB0t1+/AAAAaBJREFUKJGNkj1uE1EYRc+b772ZN2M7doyCFAlBQYEihBSlhnUgUbIjtsEOWABLgIpIIZCAQCZ2NJkfv5+PghQBN9zu6p7uHmEnhcU6MGj+dzJ3y96E2mLBgEKEPnJ9s0OLY1nTCM4gUAg5kSAoXeJXTwoA9g+9rJlZKqEqrXXWWK9xiCGO2ygGan4GAAEWM2ZCLTRTX80Pyvl+2TTSzArrhaAhohjHsEWA/ZpaaGpbLe4388l04o+OH2vIyajiCF2KWaEdsa5CwArWe1uXk6Z6++6NSy9Uvr9++eosXFjv7dhKAiicUBhQjFQi8uTZ0ufnItby4OjkoYgYqVAKA1CkjAKgKeWYz89WXLxPKdJ+/fThc45ZU4JbxhjD4ZypMG1Kf++w2auXB+7pyaPTjz8uv1x31/2w+tZ22zZxuUYAZykFcpIiZXXDqOenV+urfmjH0K76m36baQP9FgtsRrzFKGxaH0Lsp0acphCHdujGMTIom/HOl03DosQXuAIxt88nJWSGzHpL1/3tiauYV1QGW2AMqsTMqGxGwrjr3n/kN+DwvQLQM6AaAAAAAElFTkSuQmCC';

function init(frequency) {
    document.body.appendChild(canvas);
    canvas.width = screenW;
    canvas.height = screenH;
    // executeLoop(); loop
     loop(frequency)
}

function loop(frequency) {
    
    mouseVelX = mouseX - lastMouseX;
    mouseVelY = mouseY - lastMouseY;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    if(frequency>10){
        makeParticle(frequency)
    }
    else{
         makeParticle(0)
    }
    ctx.fillStyle = "rgba(0,0,0,0.9)";
    ctx.fillRect(0, 0, screenW, screenH);
    for (var i = 0, len = particles.length; i < len; i++) {
        var particle = particles[i];
        // Bottom wall
        if (particle.posY > screenH - 170) {
            particle.velY *= -0.7;
            particle.posY = screenH - 170;
        }
        // Left wall
        if (particle.posX < 0) {
            particle.velX *= -0.8;
            particle.posX = 0;
        }
        // Right wall
        if (particle.posX > screenW) {
            particle.velX *= -0.8;
            particle.posX = screenW;
        }
        particle.update();
        particle.render(ctx);
    }
    while (particles.length > MAX_PARTICLES) {
        particles.shift();
    }
}

function makeParticle(particleCount) {
    for (var i = 0; i < particleCount; i++) {
        var particle = new ImageParticle(particleImage, mouseX, mouseY);
        particle.velX = randomRange(-5, 0) + (mouseVelX * 0.4);
        particle.velY = randomRange(-5, 5) + (mouseVelY * 0.4);
        if (screenW > 768) {
            particle.size = randomRange(1, 4);
        }
        else {
            particle.size = randomRange(0, 2);
        }
        particles.push(particle);
    }
}

function randomRange(min, max) {
    return ((Math.random() * (max - min)) + min);
}

function ImageParticle(img, posx, posy) {
    this.posX = randomRange(0, screenW);
    this.posY = screenH / 2 + 400;
    this.velX = 0;
    this.velY = 0;
    this.shrink = 0.96;
    this.maxSize = -1;
    this.shimmer = true;
    this.drag = 0.98;
    this.gravity = 0.2;
    this.alpha = 1;
    this.fade = 0;
    this.spin = 0;
    this.rotation = 0;
    this.compositeOperation = 'lighter';
    this.img = img;
    this.update = function () {
        this.velX *= this.drag;
        this.velY *= this.drag;
        this.velY += this.gravity;
        this.posX += this.velX;
        this.posY += this.velY;
        this.size *= this.shrink;
        if ((this.maxSize > 0) && (this.size > this.maxSize)) this.size = this.maxSize;
        this.alpha -= this.fade;
        if (this.alpha < 0) this.alpha = 0;
        this.rotation += this.spin;
    };
    this.render = function (c) {
        if (this.alpha === 0) return;
        c.save();
        c.translate(this.posX, this.posY);
        var s = this.shimmer ? this.size * Math.random() : this.size;
        c.scale(s, s);
        c.rotate(this.rotation * Math.PI / 180);
        c.translate(img.width * -0.5, img.width * -0.5);
        c.globalAlpha = this.alpha;
        c.globalCompositeOperation = this.compositeOperation;
        c.drawImage(img, 0, 0);
        c.restore();
    };
}

