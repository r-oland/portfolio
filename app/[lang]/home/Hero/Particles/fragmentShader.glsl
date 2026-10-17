uniform float uHighlight;

varying float vInfluence;

void main() {
  vec3 color = vec3(0.247, 0.424, 0.357);
  vec3 highlight = vec3(0.494, 0.773, 0.643);
  gl_FragColor = vec4(mix(color, highlight, vInfluence * uHighlight), 1.0);
}
