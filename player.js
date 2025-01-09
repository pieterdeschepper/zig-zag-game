class Player {
   constructor(x, y, radius, speed = 2) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.direction = "right";
      this.speed = speed;
   }

   move() {
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
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
   }
}