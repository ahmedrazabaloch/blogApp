var quill = new Quill("#editor", {
  theme: "snow",
});
quill.format("color", "var(--secondaryColor)");

var delta = quill.getContents();

// var text = quill.getText();
// var textValue = textValue.textValue ;
var text = quill.getText().String;

// setInterval(() => {
//   console.log(text);
// }, 1000);
