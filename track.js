class Track {
   constructor(left, top, num, shortSide, longSide) {
      this.left = left;
      this.top = top;
      this.shortSide = shortSide;
      this.longSide = longSide;

      this.rectangles = [];
      this.index = 0;
      this.score = -1;
      this.scoreRect = null;
      while(this.index < num) {
         this.enqueueRectangle();
      }
   }

   enqueueRectangle() {
      if (this.index % 2 == 0) {
         const [width, height] = [this.longSide, this.shortSide];
         this.rectangles.push(new Rectangle(this.left, this.top, width, height));
         this.left += width - this.shortSide;
      } else {
         const [width, height] = [this.shortSide, this.longSide];
         this.rectangles.push(new Rectangle(this.left, this.top, width, height));
         this.top += height - this.shortSide;
      }
      this.index ++;
   }

   dequeueRectangle() {
      this.rectangles.shift();
   }

   adjustFor(player) {
      for (let i = 0; i < this.rectangles.length; i++) {
         const rect = this.rectangles[i];
         if (rect.contains(player)) {
            if (i > this.rectangles.length / 2) {
               this.dequeueRectangle();
               this.enqueueRectangle();
               return;
            }
         }
      }
   }

   contains(player) {
      let isOnTrack = false;
      for (const rect of this.rectangles) {
         if (rect.contains(player)) {
            isOnTrack = true;
            if (rect != this.scoreRect) {
               this.scoreRect = rect;
               this.score += 1;
            }
            break;
         }
      }
      return isOnTrack;
   }

   draw(ctx) {
      for (const rect of this.rectangles) {
         rect.draw(ctx);
      }
   }
}