String.prototype.interpolate = function (params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
}

const template = '${data.text} ${data.name} ${data.file.fileName} ${data.userEmail}';
const text = {
  text: "Brian"
}
const payload = {
  name: "Demo Data"
};

const file = {
  fileName: "Demo File",
  size: "123MB"
}
const userEmail = "patrick";
const result = template.interpolate({
  data: { ...text, ...payload, file, userEmail }
});
const messageField = document.getElementById('messageField');
messageField.innerHTML = result;
console.log(result);