export default function initStompBits() {
  function getRandomNumberInRange(a, b) {
    return a + Math.random() * (b - a);
  }
  function getMiddleNumber(a, b, c) {
    return Math.min(Math.max(a, Math.min(b, c)), Math.max(b, c));
  }
  function k(a, b, d) {
    this.radius = getRandomNumberInRange(0.1, 3);
    this.angleturn = getRandomNumberInRange(-0.08, 0.08);
    this.angle = getRandomNumberInRange(1, 0);
    this.type2 = Math.floor(0 + 4 * Math.random());
    this.x = a;
    this.y = b;
    this.vx = getRandomNumberInRange(-4, 4);
    this.vy = getRandomNumberInRange(-2, 0);
    this.type = d;
  }
  function l(a, b, c, d, e, f) {
    this.x = a;
    this.y = b;
    this.w = c;
    this.h = d;
    this.number = e;
    this.particles = [];
    this.text = f;
  }
  function m() {
    b.clearRect(0, 0, e, f);
    n.animate();
    requestAnimationFrame(m);
  }
  var d = document.getElementById("bits"),
    h = document.getElementById("ambient-bg"),
    b = d.getContext("2d"),
    e = (d.width = h.offsetWidth),
    f = (d.height = h.offsetHeight),
    p = 13; // isMobile.phone ? 10 : 13;
  window.addEventListener(
    "resize",
    function () {
      e = d.width = h.offsetWidth;
      f = d.height = h.offsetHeight;
      n.updateVal();
    },
    !0
  );
  var n = new l(0, f + 2, e, 0, p);
  d.addEventListener("mousemove", function (a) {}, !1);
  k.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += -0.08;
    this.vx *= 0.99;
    this.vy *= 0.99;
    this.angle += this.angleturn;
    this.radius -= 0.01;
    b.beginPath();
    b.font = "30px arial";
    b.textAlign = "center";
    b.globalAlpha = this.radius;
    b.lineWidth = 2;
    b.lineCap = "round";
    b.save();
    b.translate(this.x, this.y);
    b.rotate(this.angle);
    if (0 === this.type2) {
      var a = b;
      a.save();
      a.translate(0, -6.5);
      a.beginPath();
      a.moveTo(0, 0);
      a.lineTo(7.5, 13);
      a.lineTo(-7.5, 13);
      a.restore();
      a.closePath();
      a.strokeStyle = "#FC63B3";
      a.stroke();
    }
    if (1 === this.type2) {
      a = b;
      a.beginPath();
      a.arc(0, 0, 8, 0, 2 * Math.PI);
      a.closePath();
      a.strokeStyle = "#FFF48D";
      a.stroke();
    }
    if (2 === this.type2) {
      b.beginPath();
      b.rect(0, 0, 13, 13);
      b.closePath();
      b.strokeStyle = "#94FFF5";
      b.stroke();
    }
    if (3 === this.type2) {
      a = b;
      a.beginPath();
      a.moveTo(0, 0);
      a.lineTo(0, 10);
      a.moveTo(-6, 5);
      a.lineTo(6, 5);
      a.closePath();
      a.strokeStyle = "#D68FFF";
      a.stroke();
    }

    b.restore();
    b.globalAlpha = 1;
    this.y > f + 5 && (this.vy *= -0.5);
    if (this.x > e || 0 > this.x) this.vx *= -1;
  };
  l.prototype.updateVal = function () {
    this.w = e;
    this.y = f + 2;
  };
  l.prototype.animate = function () {
    b.fillStyle = "grey";
    b.beginPath();
    b.strokeRect(this.x, this.y, this.w, this.h);
    b.font = "13px arial";
    b.textAlign = "center";
    b.closePath();
    this.particles.length < this.number &&
      this.particles.push(
        new k(
          getMiddleNumber(
            getRandomNumberInRange(this.x, this.w + this.x),
            this.x,
            this.w + this.x
          ),
          getMiddleNumber(
            getRandomNumberInRange(this.y, this.h + this.y),
            this.y,
            this.h + this.y
          ),
          this.text
        )
      );
    for (var a = 0; a < this.particles.length; a++) {
      var d = this.particles[a];
      d.update();
      if (0.01 > d.radius || 0 > d.y)
        this.particles[a] = new k(
          getMiddleNumber(
            getRandomNumberInRange(this.x, this.w + this.x),
            this.x,
            this.w + this.x
          ),
          getMiddleNumber(
            getRandomNumberInRange(this.y, this.h + this.y),
            this.y,
            this.h + this.y
          ),
          this.text
        );
    }
  };
  m();
}
