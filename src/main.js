$.get("https://passmage-backend.herokuapp.com/",
{
  async:false

},function(data,status){
  console.log('hi')
  console.log(data)
  data=data.split(",");
  data.forEach(function (a) {   
    if(a!='')
    add_ser_to_view(a);
  });
});