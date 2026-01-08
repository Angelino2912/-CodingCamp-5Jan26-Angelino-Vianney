let todos = [];

const todoInput = document.getElementById("todo-input");
const todoDate = document.getElementById("todo-date");
const addBtn = document.getElementById("add-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const list = document.getElementById("todo-list");

function render() {
  list.innerHTML = "";

  if (todos.length === 0) {
    list.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center;">
          <p>Belum ada Input la dulu</p>
        </td>
      </tr>
    `;
    return;
  }

  todos.forEach((todo, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${todo.text}</td>
      <td>${todo.date || "-"}</td>
      <td>Pending</td>
      <td>
        <button onclick="hapus(${index})">Hapus</button>
      </td>
    `;

    list.appendChild(tr);
  });
}

addBtn.addEventListener("click", () => {
  if (!todoInput.value) return;

  todos.push({
    text: todoInput.value,
    date: todoDate.value
  });

  todoInput.value = "";
  todoDate.value = "";

  render();
});

deleteAllBtn.addEventListener("click", () => {
  todos = [];
  render();
});

function hapus(index) {
  todos.splice(index, 1);
  render();
}

render();
