// var pageno=1;
// function allData(){
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=english&page=${pageno}`)
//     .then(response => response.json())
//     .then(data => 
        
//         print(data.results)
        
//         );
// }
// allData();

// let parent=document.getElementById("main-div");
// function print(data){
//     // console.log(data);
//     data.forEach((element) => {
//         // console.log(element);
//         // console.log(element.original_title);
//         // console.log(element.poster_path);
//         var outerDiv=document.createElement("div")
//         var posterDiv=document.createElement("div")
//         var img=document.createElement("img");
//         img.src=`https://image.tmdb.org/t/p/w500/${element.poster_path}`
//         var title=document.createElement("p")
//         title=element.original_title;
//         posterDiv.append(img,title);
//         outerDiv.append(posterDiv)
//         parent.append(outerDiv)
//     });
//     const showData=()=>{
//         setTimeout(()=>{
//             pageno++;
//             allData()
//         },300)
//     }
//     window.addEventListener('scroll',()=>{
//             const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
//             if(scrollTop+clientHeight >= scrollHeight){
//                 showData()
//             }
//         })
//     // var outerDiv=document.createElement("div")
//     // var posterDiv=document.createElement("div")
//     // var img=document.createElement("img");
//     // // img.src=
//     // var title=document.createElement("p")

// }


let counter=1;
var parent=document.getElementById("main-div")
const getpost=(start,end)=>{
    try{
        console.log(start,end)
        for(let i=start;i<=end;i++){
            var ptag=document.createElement("p")
            ptag.innerHTML=`<h1>Masai Student ${i++}</h1>`;
            parent.append(ptag)
        }
        
       
    }catch(err){
        console.log(err);
    }
}
getpost(1,30)


function showData(){
    setTimeout(()=>{
      counter++;
      
      end=counter * 30;
      start=end-30;
        getpost(start,end)
       },300)
}

window.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
    if(scrollTop+clientHeight >= scrollHeight){
         console.log("I am Bottom")
         showData()
    }
})