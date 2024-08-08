const todoArr = [];

// to call function render
renderTodoList();


//function to run html code again i.e to update code
//  "render" means to display something on the page
function renderTodoList() {

    //created scope (accumulator variable )
    let todoListHtml = '';

    // code for generating the HTMl
    for (let i = 0; i < todoArr.length; i++) {
        const todoObj = todoArr[i];
        // ------------------------------
        // const name = todoObj.name;
        // const dueDate = todoObj.dueDate;
        // ---------------------------------
        // shortcut for above code (only works if property and value name is same) 
        const { name, dueDate } = todoObj;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoArr.splice(${i}, 1);
                renderTodoList();
            " class="del-buttn">Delete</button>
            `;
        todoListHtml += html;
    }
    // console.log(todoListHtml);

    // put todoListHtml code into the div element.
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;
}

// function to add text into the array
function addTodo() {

    // for input text 
    const inputEle = document.querySelector('.js-input');
    const name = inputEle.value;

    // for date input
    const dateEle = document.querySelector('.js-input-date');
    const dueDate = dateEle.value;
    // console.log(name);

    todoArr.push({
        // name: name,
        // dueDate: dueDate

        // if property and value is same use shorthand property
        name,
        dueDate 
    });
    // console.log(todoArr);

  // To reset the input txt after clicking on add button.
    inputEle.value = '';
    renderTodoList();
}