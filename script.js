const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav')
const navLinks = document.querySelector('nav ul')

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (scrollY > 60) {
        navBar.classList.add('bg-white/50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white/50', 'shadow-sm');
    } else {
        navBar.classList.remove('bg-white/50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white/50', 'shadow-sm');
    }
});

  const form = document.querySelector("form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    
    fetch(form.action, {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Show toast
        toast.classList.remove("opacity-0", "pointer-events-none");
        toast.classList.add("opacity-100");

        // Clear form fields
        form.reset();

        // Hide toast after 3 seconds
        setTimeout(() => {
          toast.classList.remove("opacity-100");
          toast.classList.add("opacity-0", "pointer-events-none");
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      alert("Error submitting form.");
    });
  });