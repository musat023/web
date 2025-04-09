document.addEventListener("DOMContentLoaded", function () {
    
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  
   
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();

      document.addEventListener("DOMContentLoaded", function () {
        const audio = document.getElementById('backgroundMusic');
        audio.play();
    });
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var message = document.getElementById("message");
  
    
      if (password.length >= 8) {
        message.textContent = "Login completed!";
        message.style.color = "green";
      } else {
        message.textContent = "Password must be at least 8 characters!";
        message.style.color = "red";
      }
    });
  
   
    document.getElementById("openLogin").addEventListener("click", function() {
      document.getElementById("loginContainer").style.display = "block";
      //startAnimation();

      backgroundMusic.play();
    });
  });

  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Binaları ve ışıkları sabit oluştur
  const buildings = [];
  const numBuildings = 30;
  
  for (let i = 0; i < numBuildings; i++) {
      const width = Math.random() * 50 + 50;
      const height = Math.random() * (canvas.height / 2);
      const x = i * (canvas.width / numBuildings);
      const y = canvas.height - height;
      const color = `rgb(${30 + Math.random() * 30}, ${30 + Math.random() * 30}, ${30 + Math.random() * 30})`;
  
      // Sabit ışıklar
      const lights = [];
      for (let i = 0; i < height / 20; i++) {
          for (let j = 0; j < width / 15; j++) {
              if (Math.random() > 0.8) {
                  lights.push({
                      x: j * 15 + 3,
                      y: i * 20 + 3
                  });
              }
          }
      }
  
      buildings.push({ x, y, width, height, color, lights });
  }
  
  // Şimşek efekti
  let lightning = [];
  
  function createLightning() {
      const startX = Math.random() * canvas.width;
      const startY = 0;
      const segments = [];
  
      let x = startX;
      let y = startY;
  
      for (let i = 0; i < 10; i++) {
          x += (Math.random() - 0.5) * 40;
          y += Math.random() * 40;
          segments.push({ x, y });
      }
  
      lightning.push({ segments, opacity: 1 });
  
      setTimeout(() => lightning.shift(), 150);
  }
  setInterval(createLightning, 1000);
  
  // DVD diskleri
  const disks = [];
  const diskCount = 3;
  
  function getRandomColor() {
      const colors = ['#ff004c', '#00c2ff', '#00ff90', '#ffe600', '#ff8000', '#8e44ad'];
      return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function createDisk(x, y) {
      return {
          x,
          y,
          r: 50,
          dx: (Math.random() - 0.5) * 3,
          dy: (Math.random() - 0.5) * 3,
          color: getRandomColor()
      };
  }
  
  for (let i = 0; i < diskCount; i++) {
      disks.push(createDisk(Math.random() * canvas.width, Math.random() * canvas.height));
  }
  
  // Ana çizim fonksiyonu
  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Gökyüzü
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0f2027");
      gradient.addColorStop(1, "#2c5364");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      // Yıldızlar
      for (let i = 0; i < 100; i++) {
          ctx.fillStyle = "white";
          ctx.beginPath();
          const x = Math.random() * canvas.width;
          const y = Math.random() * (canvas.height / 2);
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
      }
  
      // Binalar ve ışıkları
      for (const building of buildings) {
          ctx.fillStyle = building.color;
          ctx.fillRect(building.x, building.y, building.width, building.height);
  
          ctx.fillStyle = "yellow";
          for (const light of building.lights) {
              ctx.fillRect(building.x + light.x, building.y + light.y, 5, 5);
          }
      }
  
      // Şimşek
      lightning.forEach(l => {
          ctx.beginPath();
          ctx.moveTo(l.segments[0].x, l.segments[0].y);
          for (let i = 1; i < l.segments.length; i++) {
              ctx.lineTo(l.segments[i].x, l.segments[i].y);
          }
          ctx.strokeStyle = `rgba(255,255,255,${l.opacity})`;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 30;
          ctx.shadowColor = "white";
          ctx.stroke();
          ctx.shadowBlur = 0;
      });
  
      // Dönen diskler
      const login = document.getElementById("loginContainer");
      const rect = login.getBoundingClientRect();
  
      for (let disk of disks) {
          const isOverLogin =
              disk.x > rect.left &&
              disk.x < rect.right &&
              disk.y > rect.top &&
              disk.y < rect.bottom;
  
          if (!isOverLogin) {
              ctx.beginPath();
              ctx.arc(disk.x, disk.y, disk.r, 0, Math.PI * 2);
              ctx.fillStyle = disk.color;
              ctx.fill();
  
              ctx.beginPath();
              ctx.arc(disk.x, disk.y, 10, 0, Math.PI * 2);
              ctx.fillStyle = "#fff";
              ctx.fill();
  
              for (let i = 1; i < 4; i++) {
                  ctx.beginPath();
                  ctx.arc(disk.x, disk.y, disk.r * (i / 4), 0, Math.PI * 2);
                  ctx.strokeStyle = "rgba(255,255,255,0.2)";
                  ctx.stroke();
              }
          }
  
          // Hareket
          disk.x += disk.dx;
          disk.y += disk.dy;
  
          if (disk.x + disk.r > canvas.width || disk.x - disk.r < 0) {
              disk.dx *= -1;
              disk.color = getRandomColor();
          }
          if (disk.y + disk.r > canvas.height || disk.y - disk.r < 0) {
              disk.dy *= -1;
              disk.color = getRandomColor();
          }
      }
  
      requestAnimationFrame(draw);
  }
  
  draw();
  
  // Ekran boyutu değişince tekrar ayarla
  window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  });
  
