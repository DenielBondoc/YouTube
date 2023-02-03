function toggleNav() {
    var sidenav = document.getElementById("mySidenav"),
    main = document.getElementById("main");
    sidenav.style.width = sidenav.style.width === "250px" ? '0' : '250px';
    main.style.marginLeft = main.style.marginLeft === "250px" ? '0' : '250px';
}


function showMeIcon(){
        var hideMe = document.getElementById("searchIcon");
        var showMe = document.getElementById("search");  
        
        document.onclick = function(e){
           if(e.target.id !== "searchIcon"){
              hideMe.style.display = "none";
           }if(e.target.id === "search"){
              hideMe.style.display = "inline";
           }
        };
     };
