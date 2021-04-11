import './style.css';
import 'alpinejs';

//todos
window.todos = function() {
    return {
        todos: [
            {
                id: 1,
                title: 'Finish Alpine',
                isComplete: false
            },
            {
                id: 2,
                title: 'Livewire',
                isComplete: true
            },
            {
                id: 3,
                title: 'Potatoes',
                isComplete: false
            }
        ],
        todoId: 4,
        todoTitle: '',
        addTodo: function () {
            if (this.todoTitle.trim() === '') {
                return;
            }

            this.todos.push({
                id: this.todoId++,
                title: this.todoTitle,
                isComplete: false
            });
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    }
}