window.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await axios.get("http://localhost:2600/get");
      for (let i = 0; i < response.data.allusers.length; i++) {
        showdetails(response.data.allusers[i]);
      }
    } catch (error) {
      console.log(error);
    }
  });

function userdetails(e) {
e.preventDefault()
const name = e.target.name.value ;
const email = e.target.email.value ;

const obj =  {
    name , 
    email 
} ;
axios.post('http://localhost:2600/save' ,obj) 
.then(result=>console.log("success"+result))
.catch(err=>console.log(err))




}

function showdetails(user) {
   // user.preventDefault() ;
   
    let name = document.getElementById('name').value ;
    let email = document.getElementById('email').value ;
    var li = document.createElement('li') ;
    
li.className= 'list-group' ;
li.appendChild(document.createTextNode("name " + user.name + " mail " + user.email ));
items.appendChild(li) ;

let deletebtn = document.createElement('button') ;
deletebtn.style.background = "red" ;
deletebtn.className = 'list-del-btn' ;
deletebtn.id = user.id ;
deletebtn.appendChild(document.createTextNode("DEL")) ;
li.appendChild(deletebtn) ;
items.appendChild(li) ;

let del = document.getElementById(deletebtn.id) ;
del.addEventListener('click' , async (e)=>{
    if(e.target.classList.contains('list-del-btn')) {
        try {
            await axios.delete(`http://localhost:2600/delete/${e.target.id}`)
            
        }
       
        
        catch(err) { console.log(err)}
    }
})
}
