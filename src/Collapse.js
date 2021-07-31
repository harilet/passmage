function openNav() {
        document.getElementById('fade').style.display='block'
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("right_pannel").style.marginLeft= "250px";
}

function clossNav(){
    document.getElementById('fade').style.display='none'
    document.getElementById('openbtn').textContent='☰';
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("right_pannel").style.marginLeft = "0px";
}