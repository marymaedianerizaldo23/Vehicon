const currentURL = window.location.pathname;

const navLinks = document.querySelectorAll('.sidenav a').
forEach(link =>{

    if(link.href.includes(`${currentURL}`)){
        link.classList.add('active')
    }

}); 


let nameOfParts = [
        {name: "Motor Oil", 
        frequency: "Every 4k to 10k KM / Every 3 months"},
        {name: "Coolant",
        frequency: "Every 160k KM / Every 10 years"},
        {name:"Drive/Accessory Belts",
        frequency:"Every 20k KM / Every year"},
        {name: "Air Filter",
        frequency: "Every 12k / Every year"},
        {name: "Oil Filter",
        frequency: "Every 10k KM / Every 3 months"}
   
]

for(let i=0; i<nameOfParts.length;i++){
    let option = document.createElement("option");
    option.text = nameOfParts[i].name;
    document.getElementById('parts').appendChild(option);
}


 function addReminder() {
    let carparts = document.getElementById('parts').value;
    let frequent = "";
    for(let i=0; i<nameOfParts.length; i++){
        if(nameOfParts[i].name === carparts)
        frequent = nameOfParts[i].frequency;
    }
    
    let reminderTable = document.querySelector('#table-body');
    let remRow = document.createElement("tr");

    
    let item = document.createElement("td");
    item.innerHTML = carparts;
    remRow.append(item);
    

    let frequency = document.createElement("td");
    frequency.innerText = frequent;
    remRow.append(frequency);


    let repeats = document.createElement("td");
    let notification = document.createElement("td");
    let removeBtn = createRemoveButton(remRow);
    
    
    
    repeats.innerText = "Yes";
    notification.innerText = "SMS Email";
    removeBtn.innerText = "Remove";
    
    
    
    remRow.append(repeats);
    remRow.append(notification);
    remRow.append(removeBtn);
    
    reminderTable.appendChild(remRow);

}

function createRemoveButton(row) {
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeRow(row);

    };

    removeButton.style.backgroundColor = "#FEC16380";
    removeButton.style.padding = "10px";
    removeButton.style.color = "black";
    removeButton.style.margin = "15px";
    removeButton.style.border = "none";
    removeButton.style.cursor = "pointer";
    removeButton.style.left = "-10px";
    removeButton.style.borderRadius = "5px";

    return removeButton;
  }

  function removeRow(row) {
    let table = document.getElementById('table-body');    
    table.removeChild(row);
  
  }

