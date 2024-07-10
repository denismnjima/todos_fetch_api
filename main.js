
const URL_ENDPOINT = `http://localhost:3000/todo`
const ul = document.createElement('ul')
const container = document.querySelector('.todos-container')
async function getData(){
try{

    let response = await fetch(URL_ENDPOINT)
    if(!response.ok) throw new Error('request failed')
    let data = await response.json()
    createDOM(data)
}
catch(err){
 console.log(err.message)
}
}
getData()

function createDOM(data){
    for(i=0;i<data.length; i++){
        let li = document.createElement('li')
        li.innerHTML=`<p>${data[i].title}</p>
                <button class="del" onclick="deleteItem(${data[i].id})"><i class="bi bi-x-lg"></i></button>
                <button class="complete"><i class="bi bi-check2"></i></button>`
        ul.appendChild(li)
    }
    container.appendChild(ul)
} 

async function deleteItem(id){
    const deleteRes = await fetch(`${URL_ENDPOINT}/${id}`,{method:'DELETE'})
    let deleteData = await deleteRes.json()

}