var editToolBar = [
  ["bold", "italic", "underline", "strike"],
  [{ header: 1 }, { header: 2 }],
  [{ color: ["#05386b", false] }, { background: [] }],
  ["blockquote", "code-block"],
  [{ align: [] }],
  ["image"],
];

var quill = new Quill("#editor", {
  modules: {
    toolbar: editToolBar,
  },
  theme: "snow",
});

// var editor_content = quill.container.innerHTML; // or quill.container.firstChild.innerHTML could also work
// var textValue = quill.container.firstChild.innerHTML;

// setInterval(() => {
//   console.log(textValue.value);
// },2000);

var saveDelta = document.getElementById("saveDelta");
saveDelta.addEventListener("click", function () {
  var quillValue = quill.getText();
  console.log(quillValue);
});
