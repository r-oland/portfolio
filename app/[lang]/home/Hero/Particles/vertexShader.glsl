uniform sampler2D uPositions;
uniform float uTime;
uniform vec3 uRayOrigin;
uniform vec3 uRayDirection;
uniform float uMouseStrength;
uniform float uMouseRadius;
uniform float uMousePush;
uniform float uMouseVariation;

varying float vInfluence;

void main() {
  vec3 pos = texture2D(uPositions, position.xy).xyz;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);

  // Push particles away from the ray cast through the cursor
  vec3 toParticle = modelPosition.xyz - uRayOrigin;
  vec3 closest = uRayOrigin + uRayDirection * dot(toParticle, uRayDirection);
  vec3 offset = modelPosition.xyz - closest;
  float dist = length(offset);
  float falloff = 1.0 - smoothstep(0.0, uMouseRadius, dist);
  falloff *= falloff;
  // Per-particle variation so the displaced particles don't form a clean ring
  float jitter = fract(sin(dot(position.xy, vec2(12.9898, 78.233))) * 43758.5453);
  float influence = falloff * uMouseStrength * mix(1.0 - uMouseVariation, 1.0, jitter);
  modelPosition.xyz += normalize(offset + 0.0001) * influence * uMouseRadius * uMousePush;
  vInfluence = influence;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = 3.0;
  // Size attenuation;
  gl_PointSize *= step(1.0 - (1.0 / 64.0), position.x) + 0.5;
}
