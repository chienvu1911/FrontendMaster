document.addEventListener("DOMContentLoaded", function(event){
    let searchHeaderIconElement = document.querySelector(".c-header .c-search"); 
    searchHeaderIconElement.addEventListener("click", function(){
        document.querySelector(".c-header > .c-container").style.display = "none";
        document.querySelector(".c-header .c-input-search").style.display = "flex";
        document.getElementById("header-search").focus();
    })

    let closeSearchHeaderElement = document.querySelector(".c-header .ti-close");
    closeSearchHeaderElement.addEventListener("click", function(){
        document.querySelector(".c-header > .c-container").style.display = "flex";
        document.querySelector(".c-header .c-input-search").style.display = "none";
    })

    let searchInputHeaderElement = document.querySelector('.c-header #header-search');
    searchInputHeaderElement.addEventListener("keyup", function(e) {
        if(e.keyCode === 13) {
            e.preventDefault();
            window.location.href = '/search?key='+ e.target.value.trim();
        }
    })
})

