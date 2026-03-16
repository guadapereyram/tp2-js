/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

const rowsInput = prompt("Ingresá la cantidad de filas.");
const columnsInput = prompt("Ingresá la cantidad de columnas.");

const rowCount = Number(rowsInput);
const columnCount = Number(columnsInput);

if (rowsInput === null || columnsInput === null) {
  alert("Operación cancelada.");
} else if (rowsInput.trim() === "" || columnsInput.trim() === "") {
  alert("Por favor, completá ambos valores.");
} else if (isNaN(rowCount) || isNaN(columnCount)) {
  alert("Por favor, ingresá números válidos.");
} else if (!Number.isInteger(rowCount) || !Number.isInteger(columnCount)) {
  alert("Por favor, ingresá números enteros.");
} else if (rowCount <= 0 || columnCount <= 0) {
  alert("Filas y columnas deben ser mayores a 0.");
} else {
  let tableHtml = "<table border='1' cellspacing='0' cellpadding='8'>";
  let currentValue = rowCount * columnCount;

  for (let currentRow = 1; currentRow <= rowCount; currentRow++) {
    tableHtml += "<tr>";

    for (let currentColumn = 1; currentColumn <= columnCount; currentColumn++) {
      tableHtml += `<td>${currentValue}</td>`;
      currentValue--;
    }

    tableHtml += "</tr>";
  }

  tableHtml += "</table>";
  document.body.innerHTML = tableHtml;
}