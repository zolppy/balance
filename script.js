// Funções auxiliares

const clearField = (field) => (field.value = "");

const UUID = () => crypto.randomUUID();

const saveInLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));

const loadFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const renderText = (element, value) => (element.textContent = value);

const convertToBRL = (value) =>
  Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value
  );

const getTotalValue = (items) =>
  items.map((item) => item.value).reduce((curr, acm) => curr + acm, 0);

const getHighestValue = (items) =>
  items.map((item) => item.value).reduce((curr, acm) => Math.max(curr, acm), 0);

const getHighestValueItemID = (items) => {
  const highestValue = getHighestValue(items);

  return items.find((item) => item.value === highestValue).id;
};

const getCurrentMonthName = () =>
  [
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
  ][new Date().getMonth()];

const openAddMoveModal = () => {
  const addMoveModal = document.querySelector(".add-move-modal");

  addMoveModal.showModal();
};

const closeAddMoveModal = () => {
  const addMoveModal = document.querySelector(".add-move-modal");

  addMoveModal.close();
};

const showElement = (element) => (element.style.display = "initial");

const hideElement = (element) => (element.style.display = "none");

// Funções

const renderTableRow = (table, row) => {
  const { id, day, value, reason } = row;
  const treatedDay = day.toString().padStart(2, "0");
  const treatedValue = convertToBRL(value);
  const container = table.querySelector("tbody");

  const tr = document.createElement("tr");
  const tds = [
    document.createElement("td"),
    document.createElement("td"),
    document.createElement("td"),
  ];

  tr.id = id;

  [treatedDay, treatedValue, reason].forEach((value, index) => {
    tds[index].textContent = value;
  });

  tds.forEach((td) => tr.appendChild(td));
  container.appendChild(tr);
};

const markRow = (table, id) => {
  const rows = table.querySelectorAll("tbody tr");

  Array.from(rows)
    .find((row) => row.id === id)
    .classList.add("highlighted");
};

// Variáveis globais

const receivedValues = loadFromLocalStorage("receivedValues");
const spentValues = loadFromLocalStorage("spentValues");

// Mapeamento de elementos

const addMoveButton = document.querySelector(".add-move-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const applyModalBtn = document.querySelector(".apply-modal-btn");
const formModal = document.querySelector(".add-move-modal form");

// Eventos

window.addEventListener("DOMContentLoaded", () => {
  const totalReceived = getTotalValue(receivedValues);
  const totalSpent = getTotalValue(spentValues);
  const balance = totalReceived - totalSpent;
  const modalDayField = document.querySelector(".add-move-modal #day");
  const modalValueField = document.querySelector(".add-move-modal #value");
  const modalReasonField = document.querySelector(".add-move-modal #reason");
  const modalTypeField = document.querySelector(".add-move-modal #type");
  const totalReceivedEl = document.querySelector(".total-received");
  const totalSpentEl = document.querySelector(".total-spent");
  const balanceEl = document.querySelector(".balance");
  const receivedTable = document.querySelector(".received table");
  const spentTable = document.querySelector(".spent table");
  const currentMonthName = getCurrentMonthName();
  const currentMonthNameEls = document.querySelectorAll(".month");

  clearField(modalDayField);
  clearField(modalValueField);
  clearField(modalReasonField);
  clearField(modalTypeField);

  renderText(totalReceivedEl, convertToBRL(totalReceived));
  renderText(totalSpentEl, convertToBRL(totalSpent));
  renderText(balanceEl, convertToBRL(balance));

  receivedValues.forEach((receivedValue) => {
    renderTableRow(receivedTable, receivedValue);
  });

  spentValues.forEach((spentValue) => {
    renderTableRow(spentTable, spentValue);
  });

  Array.from(currentMonthNameEls).forEach((currentMonthNameEl) => {
    renderText(currentMonthNameEl, currentMonthName);
  });

  receivedValues.length > 1 &&
    markRow(receivedTable, getHighestValueItemID(receivedValues));
  spentValues.length > 1 &&
    markRow(spentTable, getHighestValueItemID(spentValues));
});

addMoveButton.addEventListener("click", function () {
  openAddMoveModal();
  hideElement(this);
});

closeModalBtn.addEventListener("click", () => {
  const addMoveButton = document.querySelector(".add-move-btn");

  closeAddMoveModal();
  showElement(addMoveButton);
});

applyModalBtn.addEventListener("click", () => {
  const addMoveButton = document.querySelector(".add-move-btn");
  const modalDayField = document.querySelector(".add-move-modal #day");
  const modalValueField = document.querySelector(".add-move-modal #value");
  const modalReasonField = document.querySelector(".add-move-modal #reason");
  const modalTypeField = document.querySelector(".add-move-modal #type");
  const receivedTable = document.querySelector(".received table");
  const spentTable = document.querySelector(".spent table");
  const type = modalTypeField.value;

  const newRow = {
    id: UUID(),
    day: modalDayField.value.slice(8),
    value: Number(modalValueField.value),
    reason: modalReasonField.value,
  };

  if (type === "received") {
    receivedValues.push(newRow);
    saveInLocalStorage("receivedValues", receivedValues);
    renderTableRow(receivedTable, newRow);
  } else {
    spentValues.push(newRow);
    saveInLocalStorage("spentValues", spentValues);
    renderTableRow(spentTable, newRow);
  }

  closeAddMoveModal();
  showElement(addMoveButton);

  const totalReceived = getTotalValue(receivedValues);
  const totalSpent = getTotalValue(spentValues);
  const balance = totalReceived - totalSpent;
  const totalReceivedEl = document.querySelector(".total-received");
  const totalSpentEl = document.querySelector(".total-spent");
  const balanceEl = document.querySelector(".balance");

  renderText(totalReceivedEl, convertToBRL(totalReceived));
  renderText(totalSpentEl, convertToBRL(totalSpent));
  renderText(balanceEl, convertToBRL(balance));

  receivedValues.length > 1 &&
    markRow(receivedTable, getHighestValueItemID(receivedValues));
  spentValues.length > 1 &&
    markRow(spentTable, getHighestValueItemID(spentValues));

  clearField(modalDayField);
  clearField(modalValueField);
  clearField(modalReasonField);
  clearField(modalTypeField);
});

formModal.addEventListener("submit", (event) => {
  event.preventDefault();
});
