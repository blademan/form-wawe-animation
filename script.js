const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (oneLetter, idx) =>
        `<span style="transition-delay:${idx * 60}ms">${oneLetter}</span>`
    )
    .join("");
});
