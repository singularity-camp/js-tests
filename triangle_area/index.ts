export default function triangle(a: number, b: number, c: number) {
  if (c < a + b && b < a + c && a < c + b) {
    const p = (a + b + c) / 2;
    const rawArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    const area = Math.round(rawArea * 100) / 100;
    if (area) return area;
  }
  return 0;
}
