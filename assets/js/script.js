var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
var apiKey = '11a69bdecfa361ac52d7de87b1f518d9'

var rootUrl = 'https://api.openweathermap.org'
function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = `${rootUrl}/data/2.5/weather?q=chandler&appid=${apiKey}`;
console.log ('hello')
console.log (requestUrl)
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var requestUrl2 = `${rootUrl}/data/3.0/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`;
            console.log (requestUrl2)
            fetch(requestUrl2)
            
                .then(function (data2) {
                    for (var i = 0; i < 6; i++) {
                     var temp=document.getElementById(`temp${i+1}`)
                    temp.innerText="temp"+i
                    var humid=document.getElementById(`humid${i+1}`)
                    humid.innerText="humid"+i
                    var wind=document.getElementById(`wind${i+1}`)
                    wind.innerText="wind"+i
                    var uv=document.getElementById(`uv${i+1}`)
                    uv.innerText="uv"+i
                    var icon=document.getElementById(`icon${i+1}`)
                    icon.src="icon"+i
                    }

                })


        });
}

fetchButton.addEventListener('click', getApi);