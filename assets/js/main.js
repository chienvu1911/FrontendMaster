document.addEventListener("DOMContentLoaded", function(event){
    let searchHeaderElement = document.querySelector(".c-header .c-search");
    let closeSearchHeaderElement = document.querySelector(".c-header .ti-close");
    searchHeaderElement.addEventListener("click", function(){
        document.querySelector(".c-header > .c-container").style.display = "none";
        document.querySelector(".c-header .c-input-search").style.display = "flex";
        document.getElementById("header-search").focus();
    })

    closeSearchHeaderElement.addEventListener("click", function(){
        document.querySelector(".c-header > .c-container").style.display = "flex";
        document.querySelector(".c-header .c-input-search").style.display = "none";
    })
})