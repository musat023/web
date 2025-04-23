// Filtrování tabulky
document.getElementById("city-filter").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#city-table tbody tr");
  
    rows.forEach(row => {
      const city = row.cells[1].textContent.toLowerCase();
      row.style.display = city.includes(filter) ? "" : "none";
    });
  });
  
  // Filtrování select menu
  document.getElementById("select-filter").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const options = document.getElementById("city-select").options;
  
    Array.from(options).forEach(option => {
      option.style.display = option.textContent.toLowerCase().includes(filter) ? "" : "none";
    });
  });
  
  // Zpracování formuláře
  document.getElementById("city-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const city = document.getElementById("city-select").value;
  
    const message = `Jméno: ${firstName}, Příjmení: ${lastName}, Město: ${city}`;
    document.getElementById("form-result").textContent = message;
  });
  