function Display({ tag, watch, prop }) {
  let value = watch[prop];

  Object.defineProperty(watch, prop, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        value = newValue;
        tag.innerHTML = `<pre>${newValue}</pre>`;
      }
    },
  });
}

export { Display };
