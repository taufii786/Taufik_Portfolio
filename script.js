// Auto-update year
document.getElementById('year').textContent = new Date().getFullYear();

// SPA Navigation
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const pages = document.querySelectorAll(".page");

  function showPage(id) {
    pages.forEach(p => p.id === id ? p.classList.remove("hidden") : p.classList.add("hidden"));
    window.scrollTo(0,0);
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      showPage(targetId);
      links.forEach(l => l.classList.remove("text-indigo-600","font-semibold"));
      link.classList.add("text-indigo-600","font-semibold");
    });
  });
});

// Google Sheet Form
const scriptURL = 'YOUR_GOOGLE_SHEET_SCRIPT_URL';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.textContent = "Message sent successfully!";
      setTimeout(() => msg.textContent = "", 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});


//My service button on home page
document.querySelector(".btn-outline").addEventListener("click", e => {
  e.preventDefault();
  const targetId = e.target.getAttribute("href").substring(1);
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.id === targetId ? p.classList.remove("hidden") : p.classList.add("hidden"));
  window.scrollTo(0,0);
  
  // Optional: update nav link highlight
  document.querySelectorAll("nav a").forEach(l => l.classList.remove("text-indigo-600","font-semibold"));
  document.querySelector('nav a[href="#services"]').classList.add("text-indigo-600","font-semibold");
});

