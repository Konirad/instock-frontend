import "./InputAndLabel.scss"



function InputAndLabel(props) {



  return (
    <>
      <label className="textBoxLabel" >
        {props.label}
      </label>
      <input
        type="text"
        className={"inputTextBox " + (props.className)}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onClick={props.onClick}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}

export default InputAndLabel;