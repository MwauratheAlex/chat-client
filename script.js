import fs from "fs"

fs.readFile("index.html.bac", (err, data) => {
  if (err) {
    console.error("Error reading index.html", err);
    return;
  }

  const htmlString = data.toString();

  const javascriptString = `
(() => {

  const iframe = document.createElement("iframe")
  iframe.srcdoc = \`${htmlString}\`;

  iframe.style.width = "300px";
  iframe.style.height = "600px";
  iframe.style.position = "fixed"
  iframe.style.bottom = "0"
  iframe.style.right = "0"

  document.body.appendChild(iframe)

})()
`

  fs.writeFile("embedscript.js", javascriptString, (err) => {
    if (err) {
      console.error("Error writing embedscript.js",)
    }
    console.log("Written embedable script to embedscript.js");
  });

})


