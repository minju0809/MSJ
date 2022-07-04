// 행 추가, 삭제하기
function addRow() {
  const table = document.getElementById('fruits');
  
  const newRow = table.insertRow();
  
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  
  newCell1.innerText = '새 과일';
  newCell2.innerText = 'New Fruit';
}

function deleteRow(rownum) {
  const table = document.getElementById('fruits');
  
  const newRow = table.deleteRow(rownum);
}

// 열 추가, 삭제하기
function addColumn() {
  const table = document.getElementById('fruits');

  for(let i=0; i<table.rows.length; i++) {
    const newCell = table.rows[i].insertCell(-1);
    newCell.innerText = 'New';
  }
}

function deleteColumn() {
  const table = document.getElementById('fruits');

  for(let i=0; i<table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }
}