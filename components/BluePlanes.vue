<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="737"
    viewBox="0 0 277 737"
    fill="none"
    :style="svgStyle"
  >
    <path
      d="M0 0L277 200.592L277 736.5L0 736.5L0 0Z"
      fill="#007AEB"
      fill-opacity="0.8"
      :style="getShapeStyle(0)"
    />
    
    <path
      d="M92.33 0L369.33 200.592L369.33 736.5L92.33 736.5L92.33 0Z"
      fill="#007AEB"
      fill-opacity="0.6"
      :style="getShapeStyle(1)"
    />
    
    <path
      d="M184.66 0L461.66 200.592L461.66 736.5L184.66 736.5L184.66 0Z"
      fill="#007AEB"
      fill-opacity="0.5"
      :style="getShapeStyle(2)"
    />
  </svg>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const svgStyle = ref({
  position: 'fixed',
  left: '50%',
  bottom: '0',
  transform: 'translateX(-50%) translateY(0)',
  marginBottom: '-400px',
  willChange: 'transform',
});

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
let requestId;

const smoothFactor = 0.2; // Facteur de lissage augmenté pour plus de réactivité

const moveShapes = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  cancelAnimationFrame(requestId);
  requestId = requestAnimationFrame(updateTransform);
};

const updateTransform = () => {
  // Lissage des coordonnées pour plus de réactivité
  currentX += (mouseX - currentX) * smoothFactor;
  currentY += (mouseY - currentY) * smoothFactor;

  const x = (currentX - window.innerWidth / 2) * 0.08; // Peut aller en négatif
  const y = Math.max(0, (currentY - window.innerHeight / 2) * 0.08); // Toujours positif
  svgStyle.value.transform = `translateX(-50%) translate(${x}px, ${y}px)`;

  requestId = requestAnimationFrame(updateTransform);
};

const getShapeStyle = (index) => {
  const factorX = 0.1 + 0.03 * index;
  const factorY = 0.1 + 0.03 * index;
  const delay = `${index * 0.05}s`; // Délai réduit pour plus de réactivité
  
  const x = (currentX - window.innerWidth / 2) * factorX;
  const y = Math.max(0, (currentY - window.innerHeight / 2) * factorY);

  return {
    transform: `translate(${x}px, ${y}px)`,
    transition: `transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1) ${delay}`,
  };
};

onMounted(() => {
  window.addEventListener('mousemove', moveShapes);
});
</script>

<style scoped>
svg {
  position: relative;
  width: 100%;
  will-change: transform;
}
</style>
