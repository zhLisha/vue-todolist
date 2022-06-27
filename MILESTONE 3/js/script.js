var app = new Vue(
    {
        el: '#root',
        data: {
            // Array della lista To Do 
            toDo: [
                {
                    toDoText: 'Comprare il pane',
                    toDoDone: false
                },
                {
                    toDoText: 'Andare dal parrucchiere',
                    toDoDone: true
                },
                {
                    toDoText: 'Meeting alle 15:40',
                    toDoDone: false
                }
            ]
        },
        methods: {
            removeToDo(indexSingleToDo) {
                this.toDo.splice(indexSingleToDo, 1)
            }
        }
    }
)