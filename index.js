var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=b66ccf669e5442588f7c6a70f6243298';

let news = document.getElementById("news")

async function getNews() {
    let res = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b66ccf669e5442588f7c6a70f6243298")
    let data = await res.json()
    console.log(data)
    displayData(data)
}
function displayData(data){
     data.articles.map(info=>{
        news.innerHTML += `
        <li>
        <div class="card">
          <img src="${info.urlToImage}">
          <div class="info">
            <h1>
              ${info.title}
            </h1>
            <p>
              ${info.description}
            </p>
            <button><a href="${info.url}" target="_blank">Read</a></button>
          </div>
        </div>
        </li>`
    })
}
getNews()


//  <div class="card">
//           <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg">
//           <div class="info">
//             <h1>
//               News example
//             </h1>
//             <p>
//               This is a news example
//             </p>
//             <button>Read</button>
//           </div>
//         </div>
