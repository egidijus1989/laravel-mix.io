const ajaxService = (address,city)=>{
    const url="https://api.postit.lt/v2/?city=";
    const key="JmHrHdBFqOTNu5UPrkJv";
    return fetch(`${url}${city}&address=${address}&key=${key}`)
    .then(response=>response.json())
}

export default ajaxService