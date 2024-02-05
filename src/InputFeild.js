

export const InputFeild = ({ label,name, type, placeholder,value,onChange,disabled }) => {
    return (
      <div>
        <div>
          <label htmlFor={name}>
            {label}
          </label>
        </div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value ={value}
          onChange={onChange}
          disabled = {disabled}
        />
        <br/>
      </div>
    )
  }