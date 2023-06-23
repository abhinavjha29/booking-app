let button = document.getElementById('my-form') ;
let item = document.getElementById('items') ;
button.addEventListener('submit' , additem) ;
//let del = document.getElementsByClassName('list-group')[2] ;
//del.addEventListener('click', removeitem) 
function additem(e) {
    e.preventDefault() ;
    let name = document.getElementById('name').value ;
    let mail = document.getElementById('email').value ;
    
    //li.appendChild(document.createTextNode("name " + name + " mail " + mail));
// item.appendChild(li) ;
// item.appendChild(li) ;

let input = {
    name : name ,
    email : mail 
} ;
localStorage.setItem(mail,JSON.stringify(input) )
var li = document.createElement('li') ;
    
li.className= 'list-group' ;
li.appendChild(document.createTextNode("name " + name + " mail " + mail ));


//creating delete button //
let deletebtn = document.createElement('button') ;
deletebtn.style.background = "red" ;
deletebtn.className = 'list-del-btn' ;
deletebtn.id = mail ;
deletebtn.appendChild(document.createTextNode("DEL")) ;
li.appendChild(deletebtn) ;
item.appendChild(li) ;


 let del = document.getElementById(deletebtn.id);
 del.addEventListener('click', removeitem = (e) =>{
   
    if (e.target.classList.contains('list-del-btn')) {
        e.preventDefault() ;
        let li = e.target.parentElement ;
        item.removeChild(li) ;
        localStorage.removeItem(mail) ;
    }
 } ) ;
 //create in edit button //
 let editbtn = document.createElement('button') ;
 editbtn.style.background = 'grey' ;
 editbtn.className = 'list-edit-btn' ;
 editbtn.id = mail ; 
 editbtn.appendChild(document.createTextNode("EDIT")) ;
 li.appendChild(editbtn) ;
 item.appendChild(li) ;

//putting edit function //
//get by class name
let edit = document.getElementsByClassName(editbtn.className)[0] ;
// let edit = edit_class.getElementById(editbtn.id) ;

edit.onclick = (ev) => {
    ev.preventDefault() ;
console.log('B') ;
} 
}

