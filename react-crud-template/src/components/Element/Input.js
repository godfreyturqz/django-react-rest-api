const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type="text" 
                className="form-control shadow-none" 
                autoComplete="off"
                id={props.id} 
                name={props.name}
                onChange={props.handleInputChange} 
                value={props.value} 
            />
        </div>
    )
}

export default Input
