let myLeads = []

const inputEl = document.getElementById("input-el")

const input = document.getElementById("input-btn")

const deletebtn = document.getElementById("delete-btn")

const savebtn = document.getElementById("save-btn")


let ulEl = document.getElementById("ul-l")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage!=null){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deletebtn.addEventListener("click",function(){
    myLeads = []
    localStorage.clear();
    renderLeads()
})
savebtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify (myLeads) )
        renderLeads()
        
    })
})
input.addEventListener("click",function(){
     myLeads.push(inputEl.value)
     inputEl.value =""
     myLeads = JSON.stringify(myLeads)

     localStorage.setItem("myLeads",myLeads)

     myLeads = JSON.parse(myLeads)

     renderLeads()  
})

function renderLeads(){
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        // listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</li>"

        listItems +=`<li>
                            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}
                            </a>
                    </li>`
    }
    ulEl.innerHTML = listItems;
    
}





