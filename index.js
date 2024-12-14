
let categories={
    "all_categories":["go to the park","sleep","dance","work","exercise","watch football","meeting"],

    "work":["work","meeting","dance"],
    "meeting":["meeting"],
    "shopping":[],
    "football":["go to the park","exercise","watch football"]
}




let buttonPressed=document.getElementById("buttonPressed")

buttonPressed.addEventListener("click",function(){
    fetchMe()
})


function fetchMe(){
    const category = document.getElementById("participants").value
    const searched=document.getElementById("searchBar").value


    let fetchedCategory=categories[category]

    if (fetchedCategory.includes(searched)){
        document.getElementById('results').innerHTML=searched
    }
    else{
        document.getElementById('results').innerHTML=`${searched} is not in the list please`

    }
}



