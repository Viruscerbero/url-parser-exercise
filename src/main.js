import "./normalize.css";
import "./style.css";
import { InputText, Button, Display } from "./components/index.js";
import { urlParser } from "./urlParser.js";

let app = document.querySelector("#app");
app.className = "app";
app.innerHTML = `
    <header>
      <h1>URL Parser Exercise</h1>
    </header>
    <main>
      <h3>Enter both a URL format and an actual URL to parse</h3>
      <input id="url-format" type="text" name="url-format" class="input" />
      <input id="url" type="text" name="url" class="input" />
      <button id="parse" class="button">Parse</button>
      <div id="display" class="display"></div>
    </main>
    <footer></footer>
`;

// URL format state
let urlFormatPrompt = "";

// URL format state setter
function setURLFormatPrompt(prompt) {
  urlFormatPrompt = prompt;
}

// URL state
let urlPrompt = "";

// URL state setter
function setURLPrompt(prompt) {
  urlPrompt = prompt;
}

// Display state
const display = {
  content: "",
};

function parse() {
  // Get the hash object
  const hashObject = urlParser(urlFormatPrompt, urlPrompt);

  // Display the hash object
  display.content = hashObject;
}

InputText({
  tag: document.querySelector("#url-format"),
  placeholder: "URL format",
  onChange: setURLFormatPrompt,
});

InputText({
  tag: document.querySelector("#url"),
  placeholder: "URL",
  onChange: setURLPrompt,
});

Button({
  tag: document.querySelector("#parse"),
  onClick: parse,
});

Display({
  tag: document.querySelector("#display"),
  watch: display,
  prop: "content",
});
