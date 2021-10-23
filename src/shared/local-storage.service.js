
 const setLsItem = (key, item) => { 
    localStorage.setItem(key, JSON.stringify(item));
};  

 const getLsItem = (key) => {
  let element = localStorage.getItem(key)
  if(element){
    return JSON.parse(element);
  }
  return null;   
}
  
const removeLsItem = (key) => {
  localStorage.removeItem(key);
}

 const removeLsAll =  () => localStorage.clear();

 export const localStorageService = {
    setLsItem,
    getLsItem,
    removeLsItem,
    removeLsAll
 }

