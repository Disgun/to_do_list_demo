// Получаем элементы из DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');
const countSpan = document.getElementById('count');

let taskCount = 0;

// Функция обновления счетчика
const updateCounter = () => {
    countSpan.textContent = taskCount;
};

// Функция добавления задачи
const addTask = () => {
    const text = taskInput.value.trim();

    // Проверка на пустое поле
    if (text === '') {
        alert('Пожалуйста, введите текст задачи!');
        return;
    }

    // Создаем элемент списка (li)
    const li = document.createElement('li');

    // Создаем span для текста
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    // Создаем кнопку удаления
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Удалить';

    // Обработчик удаления конкретной задачи
    deleteBtn.addEventListener('click', () => {
        li.remove();
        taskCount--;
        updateCounter();
    });

    // Собираем элемент списка
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Обновляем счетчик и очищаем поле
    taskCount++;
    updateCounter();
    taskInput.value = '';
    taskInput.focus();
};

// Обработчик кнопки "Добавить"
addBtn.addEventListener('click', addTask);

// Добавление задачи по нажатию Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Обработчик кнопки "Очистить всё"
clearBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
    taskCount = 0;
    updateCounter();
});