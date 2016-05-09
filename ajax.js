function loadXMLDoc(){
   $.ajax({
     type:"get",
      url:"E:/nginx/demo/data.json",
      async:true,
      error:function(){
      	alert("error");
      },
      success:function(json){

      	alert(json);
      	var json=eval("("+json+")");
        alert (json);
      }

   })

}