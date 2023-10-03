const Input = (attributes) => {
  const changeHandler = (event) => {
    if (attributes.name === "title") {
      const currentText = event.target.value;
      attributes.onChange((oldText) =>
        currentText.length <= 50 ? currentText : oldText
      );
    } else {
      attributes.onChange(event.target.value);
    }
  };

  return (
    <>
      {attributes.type === "textarea" ? (
        <textarea
          style={{
            width: "500px",
            height: "50px",
            fontWeight: "bold",
            paddingLeft: "10px",
            paddingTop: "30px",
            borderRadius: "20px",
          }}
          {...attributes}
          value={attributes.value}
          spellCheck={false}
          onChange={changeHandler}
        />
      ) : (
        <input
          style={{
            height: "50px",
            fontWeight: "bold",
            paddingLeft: "10px",
            borderRadius: "20px",
          }}
          {...attributes}
          spellCheck={false}
          value={attributes.value}
          onChange={changeHandler}
        />
      )}
    </>
  );
};

export default Input;
