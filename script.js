// Toggle hamburger menu saat diklik
document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".header-center nav ul").classList.toggle("active");
});

// Menambahkan kelas 'scrolled' pada header saat scroll
document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;

    // Menambahkan atau menghapus kelas 'scrolled' pada header saat scroll
    if (scrollPosition > 0) {
        document.querySelector("header").classList.add("scrolled");
    } else {
        document.querySelector("header").classList.remove("scrolled");
    }

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);

        if (section) {
            // Mengecek apakah bagian (section) sedang terlihat pada jendela scroll
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
});
