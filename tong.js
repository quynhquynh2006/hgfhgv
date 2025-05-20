 function toggleMenu() {
            const menu = document.querySelector(".menu");
            menu.classList.toggle("show");
        }
       document.getElementById("search-form").addEventListener("submit", function(e) {
            e.preventDefault();
        const keyword = document.getElementById("search-input").value;
            alert("Từ khóa bạn tìm là: " + keyword);
        });