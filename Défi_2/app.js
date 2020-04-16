var myButton1=document.getElementById("button1").addEventListener("click",loadCustomer)
var myButton2=document.getElementById("button2").addEventListener("click",loadCustomers)
function loadCustomer() {
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) 
        var data=JSON.parse(xhr1.responseText);
        for(var i in data) {
        document.getElementById("customer").innerHTML ="id : "+data.id+"<br>"+"name:" +data.name+"<br>"+"company:"+data.company
+        }
      }
    };
    xhr1.open("GET", "customer.json", true);
    xhr1.send();  

}


// function loadCustomers() {
//     var xhr2 = new XMLHttpRequest();

//     xhr2.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           document.getElementById("customers").innerHTML =this.responseText;
//         }
//       };
//       xhr2.open("GET", "customers.json", true);
//       xhr2.send();



// }
