function Button({ tag, onClick }) {
  tag.addEventListener("click", onClick);
}

export { Button };
