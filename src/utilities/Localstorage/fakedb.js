// use local storage to manage cart data

const addToDb = id =>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        const x = parseInt(quantity)+1;
        localStorage.setItem(id,x);
    } else {
        localStorage.setItem(id,1);
    }
    
}

export {addToDb}