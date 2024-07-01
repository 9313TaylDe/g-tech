let meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

for (let d = 1; d <= 32; d++) {
  dia.innerHTML += `<option>${d}</option>`;
}

for (let m = 0; m < 12; m++) {
  mes.innerHTML += `<option>${meses[m]}</option>`;
}

for (let a = 2024; a >= 1974; a--) {
  ano.innerHTML += `<option>${a}</option>`;
}

document.addEventListener("DOMContentLoaded", () => {});
