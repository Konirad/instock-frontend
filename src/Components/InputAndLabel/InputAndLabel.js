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
        name={props.name}
        placeholder={props.placeholder}
        onClick={props.onClick}
        onChange={props.onChange}
      />
    </>
  );
}

export default InputAndLabel;