const form = document.getElementById("form");
const tabledata = document.querySelector(".showdata-table tbody");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = form.newtask_input.value;

  const new_tr = document.createElement("tr");
  new_tr.innerHTML = `
                    <td><input type="checkbox" class="tickbox"></td>
                    <td>${task}</td>
                    <td><button class="delete"> Delete </button></td>
                    <td><button class="incomplete" id="incomplete"> Incomplete </button></td>
                     

                    
                    `;
  tabledata.appendChild(new_tr);

  form.reset()

  const deleteBtn = new_tr.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    new_tr.remove();
  });

  const completebtn=new_tr.querySelector(".tickbox");

  let incompletebtn=new_tr.querySelector(".incomplete");
  completebtn.addEventListener("change",()=>{
    if (completebtn.checked){
        incompletebtn.textContent = "Completed";
        incompletebtn.style.backgroundColor="green";
        
    }
    else{
        incompletebtn.style.backgroundColor = "red";
        incompletebtn.textContent = "Incomplete";

    }
    

  });
   
});



