

  let rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    fname = document.getElementById("company name").value,
                    lname = document.getElementById("tel").value,
                    age = document.getElementById("company address").value,
                    ename = document.getElementById("email").value,
                    iname = document.getElementById("items").value,
                    aname = document.getElementById("amount").value,
                    dname = document.getElementById("date").value;
            
                if(fname === ""){
                    alert("Company Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(lname === ""){
                    alert("Company Number Connot Be Empty");
                    isEmpty = true;
                }
                else if(age === ""){
                    alert("Address Connot Be Empty");
                    isEmpty = true;
                }
                else if(ename === ""){
                    alert("Email Connot Be Empty");
                    isEmpty = true;
                }
                else if(iname === ""){
                    alert("items Connot Be Empty");
                    isEmpty = true;
                }
                else if(aname === ""){
                    alert("Amount Connot Be Empty");
                    isEmpty = true;
                }
                else if(dname === ""){
                    alert("Date Connot Be Empty");
                    isEmpty = true;
                }

                return isEmpty;
            }
            // add Row
            function addHtmlTableRow() 
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    cell7 = newRow.insertCell(6),
                    fname = document.getElementById("company name").value,
                    lname = document.getElementById("tel").value,
                    address = document.getElementById("company address").value
                    ename = document.getElementById("email").value,
                    iname = document.getElementById("items").value,
                    aname = document.getElementById("amount").value,
                    dname = document.getElementById("date").value;            
                cell1.innerHTML = fname;
                cell2.innerHTML = lname;
                cell3.innerHTML = address;
                cell4.innerHTML = ename;
                cell5.innerHTML = iname;
                cell6.innerHTML = aname;
                cell7.innerHTML = dname;
                // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("company name").value = this.cells[0].innerHTML;
                      document.getElementById("tel").value = this.cells[1].innerHTML;
                      document.getElementById("company address").value = this.cells[2].innerHTML;
                      document.getElementById("email").value = this.cells[3].innerHTML;
                      document.getElementById("items").value = this.cells[4].innerHTML;
                      document.getElementById("amount").value = this.cells[5].innerHTML;
                      document.getElementById("date").value = this.cells[6].innerHTML;
                    };
                }
            }
            selectedRowToInput();
           
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("comapny name").value = "";
                document.getElementById("tel").value = "";
                document.getElementById("company addres").value = "";
                document.getElementById("email").value = "";
                document.getElementById("items").value = "";
                document.getElementById("amount").value = "";
                document.getElementById("date").value = "";
            }
/*Filter*/
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
//filter


  //Set up an associative array
 
 //The values represent the cost of the various inch of pipes i.e A 10" pipe cost's $35
 var pipe_prices = new Array();
 pipe_prices["Round6"]=20;
 pipe_prices["Round8"]=25;
 pipe_prices["Round10"]=35;
 pipe_prices["Round12"]=75;
 
 //Set up an associative array 
 //The keys represent the fitting type
 //The value represents the cost of the fitting i.e. elbow filling is $5,Tee filling is $9
 //We use this this array when the user selects a filling from the form
 var fitting_prices= new Array();
 fitting_prices["None"]=0;
 fitting_prices["elbow"]=5;
 fitting_prices["coupling"]=5;
 fitting_prices["union"]=7;
 fitting_prices["nipple"]=8;
 fitting_prices["reducer"]=10;
 fitting_prices["brushing"]=5;
 fitting_prices["tee"]=9;
 fitting_prices["tee2"]=5;
 fitting_prices["cap"]=5;
 fitting_prices["plug"]=8;
 fitting_prices["valve"]=7;
 fitting_prices["wye"]=12;
 
   
   
// getCakeSizePrice() finds the price based on the size of the pipe.
// Here, we need to take user's the selection from radio button selection
function getPipeSizePrice()
{  
    var pipeSizePrice=0;
    //Get a reference to the form id="pipeform"
    var theForm = document.forms["pipeform"];
    //Get a reference to the cake the user Chooses name=selectedpipe":
    var selectedPipe = theForm.elements["selectedpipe"];
    //Here since there are 4 radio buttons selectedpipe.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedPipe.length; i++)
    {
        //if the radio button is checked
        if(selectedPipe[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" pipe we set it to 25
            //by using the pipe_prices array
            //We get the selected Items value
            //For example pipe_prices["Round8".value]"
            pipeSizePrice = pipe_prices[selectedPipe[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return pipeSizePrice;
}

//This function finds the fitting price based on the 
//drop down selection
function getFittingPrice()
{
    var pipeFittingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["pipeform"];
    //Get a reference to the select id="filling"
     var selectedFitting = theForm.elements["fitting"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    pipeFittingPrice = fitting_prices[selectedFitting.value];

    //finally we return cakeFillingPrice
    return pipeFittingPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function candlesPrice()
{
    var candlePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["pipeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["includecandles"];

    //If they checked the box set candlePrice to 5
    if(includeCandles.checked==true)
    {
        candlePrice=5;
    }
    //finally we return the candlePrice
    return candlePrice;
}

function insciptionPrice()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0
    var inscriptionPrice=0;
    //Get a refernce to the form id="cakeform"
    var theForm = document.forms["pipeform"];
    //Get a reference to the checkbox id="includeinscription"
    var includeInscription = theForm.elements["includeinscription"];
    //If they checked the box set inscriptionPrice to 20
    if(includeInscription.checked==true){
        inscriptionPrice=20;
    }
    //finally we return the inscriptionPrice
    return inscriptionPrice;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var pipePrice = getPipeSizePrice() + getFittingPrice() + candlesPrice() + insciptionPrice();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Pipe $"+pipePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}








