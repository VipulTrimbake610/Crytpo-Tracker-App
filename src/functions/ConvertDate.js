export const ConvertDate = (number) =>{
    var myDate = new Date(number);
    return myDate.getDate() + "/"  + parseInt(parseInt(myDate.getMonth())+parseInt(1));
}