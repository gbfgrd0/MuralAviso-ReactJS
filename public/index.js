document.addEventListener('DOMContentLoaded', RecarregarPost())

function RecarregarPost(){
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()})
        .then(json =>{
        let posts = JSON.parse(json);
        let ElementosPost = '';
        posts.forEach(post =>{
            let ElementoPost = `        
            <div id="${post.id}" class="container borda-preta mb-3 maxWidt">
            <h1 class="p-1 ">${post.titulo}</h1>
            <h5 class="p-2 ">${post.desc}</h5>
            </div>`
            ElementosPost += ElementoPost;
            document.getElementById("postHTML").innerHTML = ElementosPost;
        })
    })
};

function GerarPost(){
    let titulo = document.getElementById("titulo").value;
    let desc = document.getElementById("desc").value;

    let post = { titulo, desc } 

    let options = {
        method: "POST",
        headers: new Headers({'content-type':'application/json'}),
        body: JSON.stringify(post)
    }
    
    fetch("http://localhost:3000/api/new", options).then(res => {
        console.log("Post criado com sucesso", res)
    })

    RecarregarPost()
};