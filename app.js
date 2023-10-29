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

$("#saveDelta").click(function () {
  window.delta = quill.contents();
  console.log(window.delta);
});
