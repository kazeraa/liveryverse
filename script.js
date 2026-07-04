const $ = (selector) => document.querySelector(selector);

let currentGarage = null;
let currentLivery = null;

function setTheme(themeId) {
  const theme = CONFIG.theme.themes.find(t => t.id === themeId) || CONFIG.theme.themes[0];
  document.documentElement.style.setProperty("--c1", theme.color1);
  document.documentElement.style.setProperty("--c2", theme.color2);
  localStorage.setItem("liveryTheme", theme.id);
}

setTheme(localStorage.getItem("liveryTheme") || CONFIG.theme.default);

window.addEventListener("load", () => {
  setTimeout(() => {
    $("#loader").style.display = "none";
  }, 1300);
});

const waNumber = CONFIG.whatsapp.replace(/^0/, "62");
const waLink = `https://wa.me/${waNumber}?text=Halo%20bos,%20saya%20mau%20request%20livery`;

$("#loaderLogo").textContent = CONFIG.intro.logo;
$("#loaderText").textContent = CONFIG.intro.text;
$("#brandName").textContent = CONFIG.siteName;
$("#footerTitle").textContent = CONFIG.siteName;
$("#heroTitle").textContent = CONFIG.hero.title;
$("#heroDesc").textContent = CONFIG.hero.desc;
$("#heroImage").src = CONFIG.hero.image;
$("#waBtn").href = waLink;
$("#floatWa").href = waLink;

if (CONFIG.hero.video) {
  $("#heroVideo").src = CONFIG.hero.video;
} else {
  $("#heroVideo").style.display = "none";
}

CONFIG.theme.themes.forEach(theme => {
  const btn = document.createElement("button");
  btn.className = "theme-btn";
  btn.textContent = theme.name;
  btn.onclick = () => setTheme(theme.id);
  $("#themeButtons").appendChild(btn);
});

function animateCounter(el, target) {
  let current = 0;
  const speed = Math.max(1, Math.floor(target / 80));

  const timer = setInterval(() => {
    current += speed;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    el.textContent = current.toLocaleString("id-ID") + "+";
  }, 20);
}

let counterStarted = false;

function renderGarage() {
  $("#garageGrid").innerHTML = "";

  DATABASE.garage.forEach(garage => {
    const card = document.createElement("div");
    card.className = "card tilt";

    card.innerHTML = `
      <img src="${garage.cover || CONFIG.hero.image}" alt="${garage.name}">
      <div class="card-content">
        <h3>${garage.name}</h3>
        <p>${garage.desc}</p>
        <span class="card-badge">${garage.liveries.length} Livery</span>
      </div>
    `;

    card.onclick = () => openGarage(garage.id);
    $("#garageGrid").appendChild(card);
  });

  activateTilt();
}

function openGarage(id) {
  const garage = DATABASE.garage.find(item => item.id === id);
  if (!garage) return;

  currentGarage = garage;
  playEnterSound();
  currentLivery = garage.liveries[0] || null;

  $("#garageName").textContent = garage.name;
  $("#garageDesc").textContent = garage.desc;
  $("#liverySearch").value = "";

  renderLiveryList(garage.liveries);

  if (currentLivery) {
    selectLivery(currentLivery);
  } else {
    resetSelectedLivery();
  }

  $("#garageModal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeGarage() {
  $("#garageModal").classList.remove("show");
  document.body.style.overflow = "";
}

$("#closeGarage").onclick = closeGarage;

$("#garageModal").onclick = (e) => {
  if (e.target.id === "garageModal") closeGarage();
};

function resetSelectedLivery() {
  $("#selectedLiveryName").textContent = "Belum ada livery";
  $("#selectedCreator").textContent = "-";
  $("#selectedVersion").textContent = "-";
  $("#selectedSize").textContent = "-";
  $("#selectedCategory").textContent = "-";
  $("#garagePreview").src = currentGarage?.cover || CONFIG.hero.image;
  $("#downloadBtn").href = "#";
  $("#downloadBtn").classList.add("disabled");
}

function renderLiveryList(liveries) {
  $("#liveryList").innerHTML = "";

  if (!liveries.length) {
    $("#liveryList").innerHTML = `<p>Belum ada livery boskuh.</p>`;
    return;
  }

  liveries.forEach(livery => {
    const item = document.createElement("div");
    item.className = "livery-item";

    if (currentLivery && currentLivery.id === livery.id) {
      item.classList.add("active");
    }

    item.innerHTML = `
      <h4>${livery.name}</h4>
      <p>${livery.category}</p>
      <div class="livery-tags">
        <span>${livery.version}</span>
        <span>${livery.size}</span>
      </div>
    `;

    item.onclick = () => selectLivery(livery);
    $("#liveryList").appendChild(item);
  });
}

function selectLivery(livery) {
  currentLivery = livery;

  $("#selectedLiveryName").textContent = livery.name;
  $("#selectedCreator").textContent = livery.creator;
  $("#selectedVersion").textContent = livery.version;
  $("#selectedSize").textContent = livery.size;
  $("#selectedCategory").textContent = livery.category;

  $("#garagePreview").src = livery.preview || currentGarage?.cover || CONFIG.hero.image;
  $("#downloadBtn").href = livery.download || "#";

  if (livery.download && livery.download !== "#") {
    $("#downloadBtn").classList.remove("disabled");
  } else {
    $("#downloadBtn").classList.add("disabled");
  }

  document.querySelectorAll(".livery-item").forEach(item => {
    item.classList.remove("active");
    const title = item.querySelector("h4")?.textContent;
    if (title === livery.name) item.classList.add("active");
  });
}

$("#liverySearch").addEventListener("input", (e) => {
  if (!currentGarage) return;

  const keyword = e.target.value.toLowerCase();

  const filtered = currentGarage.liveries.filter(item => {
    return (
      item.name.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword) ||
      item.creator.toLowerCase().includes(keyword)
    );
  });

  renderLiveryList(filtered);
});

$("#garagePreview").onclick = () => {
  if (!$("#garagePreview").src) return;
  $("#popupImg").src = $("#garagePreview").src;
  $("#imagePopup").classList.add("show");
};

$("#closeImagePopup").onclick = () => {
  $("#imagePopup").classList.remove("show");
};

$("#imagePopup").onclick = (e) => {
  if (e.target.id === "imagePopup") {
    $("#imagePopup").classList.remove("show");
  }
};

function renderCreators() {
  $("#creatorGrid").innerHTML = "";

  CONFIG.creators.forEach(creator => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-content">
        <h1>${creator.rank}</h1>
        <h3>${creator.name}</h3>
        <p>${creator.role}</p>
      </div>
    `;

    $("#creatorGrid").appendChild(card);
  });
}

function renderEvents() {
  $("#eventList").innerHTML = "";

  CONFIG.events.forEach(event => {
    const div = document.createElement("div");
    div.className = "timeline-item";

    div.innerHTML = `
      <span>${event.date}</span>
      <h3>${event.title}</h3>
      <p>${event.desc}</p>
    `;

    $("#eventList").appendChild(div);
  });
}

function renderFaq() {
  $("#faqList").innerHTML = "";

  CONFIG.faq.forEach(item => {
    const div = document.createElement("div");
    div.className = "faq-item";

    div.innerHTML = `
      <h3>${item.q}</h3>
      <p>${item.a}</p>
    `;

    div.onclick = () => div.classList.toggle("active");
    $("#faqList").appendChild(div);
  });
}

$("#openBox").onclick = () => {
  const item = CONFIG.mysteryBox[Math.floor(Math.random() * CONFIG.mysteryBox.length)];

  $("#boxResult").style.display = "block";
  $("#boxResult").innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  `;
};

const audio = $("#audio");

if (CONFIG.music.enabled) {
  $("#musicTitle").textContent = CONFIG.music.title;
  audio.src = CONFIG.music.file;
} else {
  $("#musicPlayer").style.display = "none";
}

let playing = false;

$("#musicToggle").onclick = () => {
  if (!CONFIG.music.file) {
    alert("File musik belum diisi di config.js boskuh.");
    return;
  }

  if (!playing) {
    audio.play();
    $("#musicToggle").textContent = "⏸";
  } else {
    audio.pause();
    $("#musicToggle").textContent = "▶";
  }

  playing = !playing;
};

if (CONFIG.assistant.enabled) {
  $("#botName").textContent = CONFIG.assistant.name;

  CONFIG.assistant.messages.forEach(msg => {
    const p = document.createElement("p");
    p.textContent = msg;
    $("#botMessages").appendChild(p);
  });
} else {
  $("#kazeBot").style.display = "none";
}

$("#botToggle").onclick = () => {
  $("#botPanel").classList.toggle("show");
};

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");

      if (entry.target.classList.contains("stats") && !counterStarted) {
        counterStarted = true;
        animateCounter($("#stat1"), CONFIG.stats.liveries);
        animateCounter($("#stat2"), CONFIG.stats.garage);
        animateCounter($("#stat3"), CONFIG.stats.downloads);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => revealObserver.observe(el));

function activateTilt() {
  document.querySelectorAll(".tilt").forEach(card => {
    card.onmousemove = (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      const rx = ((y / r.height) - 0.5) * -10;
      const ry = ((x / r.width) - 0.5) * 10;

      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    card.onmouseleave = () => {
      card.style.transform = "";
    };
  });
}

const canvas = $("#particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < 90; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.7,
    dy: (Math.random() - 0.5) * 0.7
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,217,255,.75)";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dist = Math.hypot(p.x - q.x, p.y - q.y);

      if (dist < 110) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(0,217,255,${1 - dist / 110})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    }

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(drawParticles);
}

renderGarage();
renderCreators();
renderEvents();
renderFaq();
activateTilt();
drawParticles();

const boot = document.getElementById("bootScreen");
const sysLoad = document.getElementById("systemLoading");
const sysProgress = document.getElementById("sysProgress");
const sysText = document.getElementById("sysText");

document.getElementById("startExperience").onclick = () => {
  playSound("boot");
  boot.style.display = "none";
  sysLoad.style.display = "grid";

  let p = 0;
  const texts = [
    "Checking database...",
    "Loading garage...",
    "Starting Kazeraa engine...",
    "Preparing livery system...",
    "Welcome back driver."
  ];

  const timer = setInterval(() => {
    p += Math.floor(Math.random() * 14) + 7;
    if (p >= 100) p = 100;

    sysProgress.style.width = p + "%";
    sysText.textContent = texts[Math.min(Math.floor(p / 25), texts.length - 1)];

    if (p >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        sysLoad.style.display = "none";
      }, 500);
    }
  }, 220);
};

function showAchievement(text = "FIRST DOWNLOAD UNLOCKED") {
  const toast = document.getElementById("achievementToast");
  document.getElementById("achievementText").textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
  playSound("achievement");
}

const enterScreen = document.getElementById("enterGarageScreen");
const enterTitle = document.getElementById("enterGarageTitle");
const enterProgress = document.getElementById("enterProgress");

const oldOpenGarage = openGarage;

openGarage = function(id) {
  playSound("garage");

setTimeout(() => {
    playSound("garage");
}, 1500);
  const garage = DATABASE.garage.find(item => item.id === id);
  const name = garage ? garage.name : "GARAGE";

  enterTitle.textContent = `ENTERING ${name}`;
  enterProgress.style.width = "0%";
  enterScreen.style.display = "grid";

  let p = 0;

  const timer = setInterval(() => {
    p += 13;
    if (p >= 100) p = 100;

    enterProgress.style.width = p + "%";

    if (p >= 100) {
      clearInterval(timer);

      setTimeout(() => {
        enterScreen.style.display = "none";
        oldOpenGarage(id);
      }, 350);
    }
  }, 80);
};

const hoverSound = document.getElementById("hoverSound");
const enterSound = document.getElementById("enterSound");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    if (!hoverSound || !hoverSound.src) return;

    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
  });
});

function playEnterSound() {
  if (!enterSound || !enterSound.src) return;

  enterSound.currentTime = 0;
  enterSound.play().catch(() => {});
}

const sounds = {
  boot: document.getElementById("bootAudio"),
  click: document.getElementById("clickAudio"),
  garage: document.getElementById("garageAudio"),
  engine: document.getElementById("engineAudio"),
  achievement: document.getElementById("achievementAudio")
};

let soundReady = false;

async function unlockSound() {
  if (soundReady) return;
  soundReady = true;

  for (const audio of Object.values(sounds)) {
    if (!audio) continue;
    audio.volume = audio.id === "garageAudio" ? 0.18 : 0.7;
    try {
      await audio.play();
      audio.pause();
      audio.currentTime = 0;
    } catch {}
  }
}

function playSound(name) {
  const audio = sounds[name];
  if (!audio || !soundReady) return;

  audio.currentTime = 0;
  audio.play().catch(() => {});
}

document.getElementById("startExperience")?.addEventListener("click", async () => {
  await unlockSound();
  playSound("boot");

  setTimeout(() => {
    if (sounds.garage) {
      sounds.garage.volume = 0.16;
      sounds.garage.play().catch(() => {});
    }
  }, 1500);
});

document.addEventListener("click", (e) => {
  if (e.target.closest("button, .card, .livery-item, a")) {
    playSound("click");
  }
});

function renderSupport() {
  const btn = document.getElementById("supportBtn");
  const modal = document.getElementById("supportModal");
  const close = document.getElementById("closeSupport");
  const list = document.getElementById("supportList");
  const title = document.getElementById("supportTitle");
  const desc = document.getElementById("supportDesc");
  const qrisModal = document.getElementById("qrisModal");
  const qrisImage = document.getElementById("qrisImage");
  const closeQris = document.getElementById("closeQris");

  if (!btn || !modal || !list) return;

  if (!CONFIG.support || !CONFIG.support.enabled) {
    btn.style.display = "none";
    return;
  }

  title.textContent = CONFIG.support.title;
  desc.textContent = CONFIG.support.description;

  list.innerHTML = "";

  if (CONFIG.support.saweria?.enabled) {
    list.innerHTML += `
      <a href="${CONFIG.support.saweria.url}" target="_blank" class="support-card">
        <div>☕</div>
        <div>
          <h3>Saweria</h3>
          <span>Support via Tako</span>
        </div>
      </a>
    `;
  }

  if (CONFIG.support.qris?.enabled) {
    list.innerHTML += `
      <div class="support-card" id="openQris">
        <div>💳</div>
        <div>
          <h3>QRIS</h3>
          <span>Scan QRIS</span>
        </div>
      </div>
    `;

    qrisImage.src = CONFIG.support.qris.image;
  }

  btn.onclick = () => modal.style.display = "grid";
  close.onclick = () => modal.style.display = "none";

  document.getElementById("openQris")?.addEventListener("click", () => {
    qrisModal.style.display = "grid";
  });

  closeQris.onclick = () => qrisModal.style.display = "none";

  modal.onclick = (e) => {
    if (e.target.id === "supportModal") modal.style.display = "none";
  };

  qrisModal.onclick = (e) => {
    if (e.target.id === "qrisModal") qrisModal.style.display = "none";
  };
}

setTimeout(renderSupport, 300);