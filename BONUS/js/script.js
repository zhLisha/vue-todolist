var app = new Vue(
    {
        el: '#root',
        data: {
            // Input dell'utente 
            userInput: '',

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
                this.toDo.splice(indexSingleToDo, 1);
            },

            // Aggiunta di un nuovo elemento alla lista toDo solo se e' maggiore di 0
            addNewToDo() {
                if(this.userInput.length > 0) {
                    // Creo una costante per tutti gli input che inserira' l'utente
                    const newInput = {
                        toDoText: this.userInput,
                        toDoDone: false
                    };

                    this.toDo.push(newInput);

                    this.userInput = '';
                }
            }
        }
    }
)