var name;
var a=0;
var student=[];
function submit(){
    if(document.getElementById("stname").value==="")
    {
        alert("LOL..Please enter a Name First!!!");
    }
    else{
    if (student.length==0)
    {
        student.push(document.getElementById("stname").value);
        document.getElementById("stname").value="";
        remove();}
    else
    { for(i=0;i<student.length;i++)
      {
        console.log(document.getElementById("stname").value);
            
          
            if(student[i].toUpperCase()==(document.getElementById("stname").value).toUpperCase()) {    
                 a++;
                break; }
             }
       if (a==0)
       {   
        student.push(document.getElementById("stname").value);
           document.getElementById("stname").value = "";
           remove();
           }
       else
       {
           alert("Name already exists!!!! :)")
       }
        a=0;
       
    }
  }
}
function remove()
{
    studentOrder.innerHTML = "";
    student.forEach(function (n, i)
         {
            studentOrder.innerHTML += `<li> ${n} <span ><button class="buttonorg" onclick='removeItem("${i}")'; type="submit">Remove</button></li>`;})
}
function removeItem(i) {
    student.splice(i, 1);
    remove();
}


  