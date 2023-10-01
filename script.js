function getRandomColor() {
  return color(random(255), random(255), random(255));
}

function setup() {
  const s = min(windowWidth, windowHeight) * 0.9;  
  createCanvas(s, s);
  background(250);
  rectMode(CORNER);
  
  const t = width / 4;
  patternColors([getRandomColor(), getRandomColor(), getRandomColor()]);
  
	
	pattern(PTN.stripe(t / 12));
	rectPattern(0, 0, t, t);
	
	pattern(PTN.stripe(t / 4));
	rectPattern(t, 0, t, t);
	
	pattern(PTN.stripeCircle(t / 12));
	rectPattern(t * 2, 0, t, t);
	
	pattern(PTN.stripePolygon(4, t / 12, t / 6));
	rectPattern(t * 3, 0, t, t);
	
	pattern(PTN.stripePolygon(6, t / 12));
	rectPattern(0, t, t, t);
	
	pattern(PTN.stripeRadial(TAU / 30));
	rectPattern(t, t, t, t);
	
	pattern(PTN.wave(t /2, t / 10, t / 5, t / 10));
	rectPattern(t * 2, t, t, t);
	
	pattern(PTN.dot(t / 10, t / 20));
	rectPattern(t * 3, t, t, t);
	
	pattern(PTN.checked(t / 10));
	rectPattern(0, t * 2, t, t);
	
	pattern(PTN.checked(t / 8, t / 3));
	rectPattern(t, t * 2, t, t);
	
	pattern(PTN.cross(t / 10, t / 40));
	rectPattern(t * 2, t * 2, t, t);
	
	pattern(PTN.triangle(t / 5, t / 10));
	rectPattern(t * 3, t * 2, t, t);
	
	pattern(PTN.noise(0.5));
	rectPattern(0, t * 3, t * 2, t);
	
	pattern(PTN.noiseGrad(0.5));
	rectPattern(t * 2, t * 3, t * 2, t);

}
