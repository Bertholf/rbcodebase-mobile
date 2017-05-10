function getData (data){
    if(Array.isArray(data)){
        return data.posts.reduce((acc,curr) => {
            acc.concat(getData(curr))
        },[])
    }else{
        return data
    }
}

const getFlat = (Json) => {
    const tempFlat = Json.data.map(getData);
    return tempFlat.reduce((acc,curr) => {
        return acc.concat(curr.posts)
    },[])
    
}

module.exports = getFlat;