import { buttonsclasses } from "../assets/buttonsClasses"

export const Button = ({
    label,
    class:buttonClass,
    columns,
    function:buttonFunction,
    buttonsFunctions
      
    
})=>{
    return (
        <td colSpan={columns}>
        <button 
        className={buttonsClasses[buttonClass]}
        type='button'
        onClick={()=> buttonsFunction[buttonFunction]({label})}
        >
            {label}
          </button>
          </td>
    )
}
Button.prototypes={

}