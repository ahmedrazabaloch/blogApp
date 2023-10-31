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

function publish() {
  var qullvalue = quill.getText();
  localStorage.setItem("textValue", qullvalue);
  var getItem = localStorage.getItem("textValue");
  var postContainer = document.getElementById("postContainer");

  postContainer.innerHTML = `
  <div class="rightSection">
  <div class="rightbox">
    <div class="imgBox">
      <img src="" />
    </div>
    <div class="quote">
      <h2>Getting text from backend</h2>
      <p>${getItem}</p>
    </div>
  </div>
  </div>

  `;
}
