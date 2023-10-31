var editToolBar = [
  ["bold", "italic", "underline", "strike"],
  [{ header: 1 }, { header: 2 }],
  [{ color: ["#05386b", false] }, { background: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ direction: "rtl" }],
  ["blockquote", "code-block"],
  [{ align: [] }],
  ["clean"],
];

var quill = new Quill("#editor", {
  modules: {
    toolbar: editToolBar,
  },
  placeholder: "Write as You've Never Written Before",
  theme: "snow",
});

// var img = document.querySelector("input[type=file]");
// var file = event.target.file[0];
// var url = window.URL.createObjectURL(file);

function publish() {
  var postTitle = document.getElementById("form12").value;
  var qullvalue = quill.root.innerHTML;
  localStorage.setItem("title", postTitle);
  localStorage.setItem("postTaxt", qullvalue);
  var getText = localStorage.getItem("postTaxt");
  var getTitle = localStorage.getItem("title");

  var postContainer = document.getElementById("postContainer");
  postContainer.innerHTML += `
  <div class="rightSection">
  <div class="rightbox">
    <div class="imgBox">
      <img src="img/codeImg.png" />
    </div>
    <div class="quote">
      <h2>${getTitle}</h2>
      <p>${getText}</p>
    </div>
  </div>
  </div>

  `;
}
