import React from "react";
import { useParams } from "react-router-dom";
function ThankYou(){
    //const name =Register.thankname.rname;
    let { a } = useParams();
    return(
           <>
             <h1> You Have Successfully Submitted {a}</h1>
           </>
    )
}
export default ThankYou;