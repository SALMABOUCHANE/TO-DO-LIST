let txt = document.getElementById('txt');
let add = document.getElementById('add');
let list = document.getElementById('list');

//data_storage
let data;
if(localStorage.pp != null){
    data=JSON.parse(localStorage.pp)
}else{
    data = [];
}


// Create list
add.onclick = function (movement) {
    movement.preventDefault(); // Prevent form submission

    let newpro = {
        txt: txt.value
    };
    data.push(newpro);

    
    //suite_save_locale_storage
    localStorage.setItem('pp' , JSON.stringify(data));
    console.log(data);
    Clear();
    read();


}

// Clear the input 
function Clear(){
    txt.value='';

}

//read data
function read(){
    let table='';
    for(let i=0; i<data.length;i++){

        table += ` <tr>
                    <td>${data[i].txt}</td>
                    
                    <td><button onclick='deletdata(${i})'>🗑️</button></td>
                  </tr>`;
        
    }
    document.getElementById('tb').innerHTML=table;
}

//delet
function deletdata(i){
    data.splice(i,1);
    data.pp =JSON.stringify(data);
    read()
}














//update
  