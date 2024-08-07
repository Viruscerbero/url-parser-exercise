function InputText({ tag, placeholder, onChange }) {
  tag.placeholder = placeholder;

  tag.addEventListener("input", (event) => {
    onChange(event.target.value);
  });
}

export { InputText };
