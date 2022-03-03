const basicURL='http://localhost:1998/employees';
export const getAll=()=>{
    return fetch(basicURL)
.then((response)=>response.json())
.catch((err)=>console.log(err))
}