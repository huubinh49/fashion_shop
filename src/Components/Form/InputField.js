import React, { useState, forwardRef, useEffect, useImperativeHandle } from 'react'


const InputField = forwardRef((props, ref)=>{
    const [value, setValue] = useState(undefined)
    const [error, setError] = useState("")

    const handleChange = (event)=>{
        setValue(event.target.value);
        setError("");
    }
    useEffect(() => {
       props.onChange(props.name, value, error);
    }, [value, error])
    
    useImperativeHandle(ref,() => ({
          validate: ()=>validate(),
          name : props.name
    }))
    const validate = () => {
        
        if(props.rules){
            const rules = props.rules.split("|");
            rules.forEach(rule=>{
                switch (rule) {
                    case "required":
                        if(!value) setError("This field needs to filled!")
                        break;
                    case "confirmPassword":
                        if(!props.password || value !== props.password) setError("Type the correctly password!");
                        break;
                    default:
                        const pairRule = rule.split(":");
                        switch (pairRule[0]) {
                            case "max":
                                if(value && value.length > parseInt(pairRule[1])) setError(`This field only contains lower than ${pairRule[1]} characters!`);
                                break;
                        
                            case "min":
                                if(value && value.length < parseInt(pairRule[1])) setError(`This field only contains greater than ${pairRule[1]} characters!`);
                                break;
                        
                            default:
                                break;
                        }
                        break;
                }
            })
        }
    }
    return(
        <div className = 'form__input'>
            <label htmlFor = {`${props.name}`}>{props.label}</label>
            <input onBlur = {validate} onChange = {handleChange} type = {`${props.type}`} name = {`${props.name}`} value = {value} />
            <span className = "form__error">{error}</span>
        </div>
    )
})
export default InputField;