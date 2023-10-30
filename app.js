var editToolBar = [
  ["bold", "italic", "underline", "strike"],
  [{ header: 1 }, { header: 2 }],
  [{ color: ["#05386b", false] }, { background: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ direction: "rtl" }],
  ["blockquote", "code-block"],
  [{ align: [] }],
  ["image"],
  ["clean"],
];

var quill = new Quill("#editor", {
  modules: {
    toolbar: editToolBar,
  },
  placeholder: "Write as You've Never Written Before",
  theme: "snow",
});

var customButton = document.querySelector("#custom-button");
customButton.addEventListener("click", function () {
  console.log("Clicked!");
});

// console.log(quill.getText());
