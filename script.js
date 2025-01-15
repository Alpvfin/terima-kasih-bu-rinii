/* General Styling */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: #ffe4e1; /* Pink muda aesthetic */
  color: #333;
  overflow-x: hidden;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  color: #d0006f; /* Pink yang lebih bold */
}

section {
  margin-bottom: 30px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.gallery img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery img:hover {
  transform: scale(1.05);
}

iframe {
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
}

/* Floating Hearts Animation */
.heart-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background: url('heart.png') no-repeat center/cover;
  animation: float 5s linear infinite;
  opacity: 0;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(var(--x-pos, 0) * 1vw), -100vh) rotate(360deg);
    opacity: 0;
  }
}
