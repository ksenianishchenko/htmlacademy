
        var link = document.querySelector(".form-search-hotel");
        var popup = document.querySelector(".form-search");
        var moveIn = popup.querySelector("[name=dateIn]");
        var moveOut = popup.querySelector ("[name=dateOut]");
        
        
        link.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.toggle("show");
            
            setTimeout(function() {
                moveIn.focus();
            }, 2000);
        });


        
        popup.addEventListener("submit", function(event) {
            if (!moveIn.value || !moveOut.value) 
                {event.preventDefault();
                popup.classList.remove("show-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("show-error");}
            else {
                localStorage.setItem("moveIn",moveIn.value);}
        });
        
        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) {
                if (popup.classList.contains("show")) {
                    popup.classList.remove("show");
                }
            }
        });
        
