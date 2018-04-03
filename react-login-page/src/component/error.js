import React, {component} from "react";



  export const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
      {Object.keys(formErrors).map((fieldName, i) => {
  
        if(formErrors[fieldName]!=null && formErrors[fieldName].length>0){
  
          return (
            <p className="errorMessage" key={i}>{fieldName} {formErrors[fieldName]}</p>
          )        
        } else {
          return '';
        }
      })}
    </div>