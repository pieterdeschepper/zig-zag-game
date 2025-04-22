class Player {
   constructor(x, y, radius, speed = 2) {
      this.x = x;
      this.y = y;
      this.trail = [];
      this.radius = radius;
      this.direction = "right";
      this.speed = speed;

      this.trailLength = 50;
   }

   move() {
      this.trail.push({ x: this.x, y: this.y, r: this.radius });
      if (this.trail.length > this.trailLength) {
         this.trail.shift();
      }

      if (this.direction == "right") {
         this.x += this.speed;
      } else {
         this.y += this.speed;
      }
   }

   changeDirection() {
      this.direction = this.direction == "right" ? "down" : "right";
   }

   draw(ctx) {
      ctx.lineWidth = 5;
      for (let i = 0; i < this.trail.length; i++) {
         const { x, y, r } = this.trail[i];
         ctx.beginPath();
         ctx.arc(x, y, r/2 + r /2/ this.trailLength * i, 0, Math.PI * 2);
         ctx.fillStyle = `rgba(148, 59, 232, ${i / this.trailLength**1.4})`;
         ctx.strokeStyle = `rgba(180, 59, 255, ${i / this.trailLength**1.4})`;
         ctx.fill();
         ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(148,59,232)`;
      ctx.fill();
   }
}