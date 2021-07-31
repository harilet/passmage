var i=1;
function add_open() {
    document.getElementById('light_add').style.display='block';
    document.getElementById('fade').style.display='block'
}

function get_pass_close() {
    document.getElementById('Master_key').value='';
    document.getElementById('pass_display').value='';
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none'
}

function set_pass_close() {
    document.getElementById('service_name').value='';
    document.getElementById('add_passowrd').value='';
    document.getElementById('add_Master_key').value='';
    document.getElementById('light_add').style.display='none';
    document.getElementById('fade').style.display='none'
}

function add_ser_to_view(a) {

    if(i==4){
        document.getElementById('content').innerHTML+= '</div><div class="row">';
        i=0;
    }
    var list_of_rows=document.getElementById('content').getElementsByClassName('row');
          
    list_of_rows[list_of_rows.length-1].innerHTML+=`
    <div class="column">
        <div class="card" onclick="document.getElementById('service').value='${a}';document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'"">
            <h3>${a}</h3>
        </div>
    </div>`;
    i+=1;
}

function pass_delete() {
    var ser=document.getElementById('service').value;
    $.post("https://passmage-backend.herokuapp.com/delete_encr",
    {
      name: document.getElementById('service').value
    },
    function(data,status){
      location.reload()
    });
    console.log(ser);
}

function random_pass_genetor(params) {
    function make_pass(){
        var pass = ''; 
        var cap_let='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var num='0123456789';
        var sym='!@#$%^&*'
        var str = cap_let+cap_let.toLocaleLowerCase()+num+sym;
            
        for (i = 1; i <= 20; i++) { 
            var char = Math.floor(Math.random() * str.length + 1); 
            pass += str.charAt(char) 
        }
        return pass
    }
    function check(pas){
        var t=0
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if(pass.match(lowerCaseLetters)) {
            t+=1
        }
        
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(pass.match(upperCaseLetters)) {
            t+=1
        }
        
        // Validate numbers
        var numbers = /[0-9]/g;
        if(pass.match(numbers)) {
            t+=1
        }

        if(t>=3)
            return 1
    }
    var pass;
    while (true){
        pass=make_pass()
        if (check(pass)==1){
            break
        }
    }
    navigator.clipboard.writeText(pass);
    document.getElementById("add_passowrd").value=pass;
}