function get_key() {
    console.log(document.getElementById('Master_key').value);
    console.log(document.getElementById('service').value);

    $.post("https://passmage-backend.herokuapp.com/get_encr",
    {
      name: document.getElementById('service').value
    },
    function(data,status){
      var decrypted = CryptoJS.AES.decrypt(data, document.getElementById("Master_key").value).toString(CryptoJS.enc.Utf8);
      document.getElementById("pass_display").value = decrypted;
    });
}

function set_key() {
  navigator.clipboard.writeText(document.getElementById("add_passowrd").value);
  var encrypted = CryptoJS.AES.encrypt(document.getElementById("add_passowrd").value, document.getElementById("add_Master_key").value);   
  $.post("https://passmage-backend.herokuapp.com/set_encr",
    {
      name: document.getElementById('service_name').value,
      "pass_encr":encrypted.toString()
    },
    function(data,status){
    });

    add_ser_to_view(document.getElementById('service_name').value);
    document.getElementById('service_name').value='';
    document.getElementById('add_passowrd').value='';
    document.getElementById('add_Master_key').value='';
}