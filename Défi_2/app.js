var myButton1=document.getElementById("button1").addEventListener("click",loadCustomer)
var myButton2=document.getElementById("button2").addEventListener("click",loadCustomers)
function loadCustomer() {
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data1=JSON.parse(xhr1.responseText);
        for(var i in data1) {
        document.getElementById("customer").innerHTML ="id : "+data1.id+"<br>"+"name:" +data1.name+"<br>"+"company:"+data1.company+"<br>"+"phone :"+data1.phone

      }
      }
    };
    xhr1.open("GET", "customer.json", true);
    xhr1.send();  
}




function loadCustomers() {
    var xhr2 = new XMLHttpRequest();

    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data2=JSON.parse(xhr2.responseText);
            for (var i in data2) {
                document.getElementById("customers").innerHTML +="id: "+data2[i].id+"<br>"+"name: "+data2[i].name+"<br>"+"company:"+data2[i].company+"<br>"+"phone:"+data2[i].phone+"<hr>";
             
            }

        }else if (this.readyState == 4 && this.status == 200) {
            alert("Erreur 404:/")
            
        }
      };
      xhr2.open("GET", "customers.json", true);
      xhr2.send();
}
