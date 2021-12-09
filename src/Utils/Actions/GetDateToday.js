import { useCallback } from "react";

export const GetDateToday = useCallback(() => {
     // get month by name:
    // const monthNames = ["January", "February", "March", "April", "May", "June",
    //                     "July", "August", "September", "October", "November", "December"];
    // const DateToday = (monthNames[today.getMonth()])+' '+today.getDate()+', '+today.getFullYear()
    
    const today = new Date()
    var DateDay = today.getDate()
    if(DateDay < 9){
        DateDay = `0${DateDay}`
    }
    const DateToday = (today.getFullYear()+'-'+today.getMonth()+'-'+DateDay)

    return DateToday;

},[today])