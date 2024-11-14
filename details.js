const urlparams = new URLSearchParams(window.location.search);
const src = urlparams.get("src");
const author = urlparams.get("author");
const link = urlparams.get("link");

const key = "hg5H3J3diPRT2pecN3Z0qIfTvu6prtj1c4cASCrVEr81pW4veklDte5r";

const imgW = document.getElementById("imageWrapper");
const nameAuthor = document.getElementById("name");
const linkW = document.getElementById("linkWrapper");
imgW.innerHTML = `
<img src="${src}" style="height: 250px; width: 250px" alt="">
`;
linkW.innerHTML = `<a href="${link}">${link}</a>`;

nameAuthor.innerText = author;
