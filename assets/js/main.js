(() => {
  const $ = (sel) => document.querySelector(sel);

  const year = new Date().getFullYear();
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(year);

  const stampEl = $("#buildStamp");
  if (stampEl) stampEl.textContent = `Build: ${new Date().toISOString()}`;

  const ping = $("#pingBtn");
  const status = $("#status");

  function toast(msg){
    if (!status) return;
    status.textContent = msg;
  }

  function sparkle(){
    const s = document.createElement("div");
    s.textContent = ["✨","⚡","🟣","🔹"][Math.floor(Math.random()*4)];
    s.style.position = "fixed";
    s.style.left = (Math.random()*90+5)+"vw";
    s.style.top = "14vh";
    s.style.fontSize = (Math.random()*18+18)+"px";
    s.style.transition = "transform .9s ease, opacity .9s ease";
    s.style.opacity = "1";
    document.body.appendChild(s);
    requestAnimationFrame(() => {
      s.style.transform = "translateY(60vh) rotate(160deg)";
      s.style.opacity = "0";
    });
    setTimeout(() => s.remove(), 1000);
  }

  ping?.addEventListener("click", (e) => {
    e.preventDefault();
    toast("Status: Assets geladen (Bilder + Font) ✅");
    sparkle();
  });
})();