var app = new Vue({
    el: '#app',
    data: {
        newItem: "",
        todos: [],
        nextId: 1
    },
    methods: {
        addItem: function(){
            this.todos.push({
                id: this.nextId,
                text: this.newItem,
                done: false
            });
            this.newItem = "";
            this.nextId++;
        },
        toggleItemDone: function(item){
            let foundIndex = this.todos.findIndex(x => x.id === item.id);
            this.todos[foundIndex].done = !this.todos[foundIndex].done;
        },
        deleteItem: function(item){
            let foundIndex = this.todos.findIndex(x => x.id === item.id);
            this.todos.splice(foundIndex, 1);
        }
    }
});