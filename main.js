const todoInput = document.getElementById('todoInput');
        const addButton = document.getElementById('addButton');
        const toggleModeButton = document.getElementById('toggleMode');
        const todoList = document.getElementById('todoList');
        let darkMode = false;

        addButton.addEventListener('click', () => {
            const task = todoInput.value.trim();
            if (task) {
                const listItem = document.createElement('li');
                listItem.className = 'todo-item';
                
                const span = document.createElement('span');
                span.textContent = task;
                listItem.appendChild(span);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = "✖ o'chirish";
                deleteButton.addEventListener('click', () => {
                    todoList.removeChild(listItem);
                });
                listItem.appendChild(deleteButton);

                listItem.addEventListener('click', () => {
                    listItem.classList.toggle('completed');
                });

                todoList.appendChild(listItem);
                todoInput.value = '';
            }
        });

        toggleModeButton.addEventListener('click', () => {
            darkMode = !darkMode;
            document.body.classList.toggle('dark-mode', darkMode);
            toggleModeButton.textContent = darkMode ? 'tong' : 'tun';
        });