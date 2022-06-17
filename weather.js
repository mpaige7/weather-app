let apidata = {
    url : 'https://api.openweathermap.org/data/2.5/weather?q=',
    coord : 'springfield,MA,USA',
    APPID : 'APPID=828cc73465742c173254976b0cbe03b5',
};

let{url,coord,APPID} = apidata
let apiURL = `${url}${coord}&units=imperial&${APPID}`
console.log(apiURL)