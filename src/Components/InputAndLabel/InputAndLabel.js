import "./InputAndLabel.scss"



function InputAndLabel(props) {



    return (
      <>
        <label className="textBoxLabel" >
          {props.label}
        </label>
        <input
          type="text"
          className="inputTextBox"
          id={props.id}
          placeholder={props.placeholder}
          onClick={props.onClick}
          onChange={props.onChange}
          value={props.value || props.placeholder}
        />
      </>
    );
  }
  
  export default InputAndLabel;