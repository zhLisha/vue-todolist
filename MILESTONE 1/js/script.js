var app = new Vue(
    {
        el: '#root',
        data: {
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

        }
    }
)