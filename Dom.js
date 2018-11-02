// delete a book


// let deleteBtns = document.querySelectorAll('#book-list .delete');
// Array.from (deleteBtns)
//     .forEach( deleteBtn => {
//     deleteBtn.addEventListener('click', function(e){
//         const clickedButtonParent = e.target.parentElement;
//         clickedButtonParent.parentNode.removeChild(clickedButtonParent);
//     })
// })

// delete using events bubbling

// first lets grab the parentElement which is a "ul"

let ul = document.querySelector("#book-list ul");
ul.addEventListener('click', function(e){
    if( e.target.className == 'delete'){
        const clickedButtonParentElement = e.target.parentElement;
        ul.removeChild( clickedButtonParentElement )
    }
})

// PREVENT DEFAULT BEHAVIOUR AND EXTRACT THE VALUE OF WHAT HAS BEEN TYPED

    // first lets grab the form
const addForm = document.forms['add-book'];
    // lets attach a submit event and a listener to the form
addForm.addEventListener('submit', function(e){
    // lets prevent default so the page doesn't refrresh
    e.preventDefault();
    // lets grab what is typed into the form and save it as value
    const value = addForm.querySelector('input[type = "text"]').value;
    
    //create elements
        // first is the li tag
    const li = document.createElement('li');
        // next is the two span tags
    const bookName = document.createElement('span');
    const deleteButton = document.createElement('span');


// APPEND CHILD
// lets add the bookName span tag into the li tag
    li.appendChild(bookName);
 // lets add the deleteButton span tag into the li tag 
    li.appendChild(deleteButton);
// lets grab the ul tag and append the li tag into it
    // we have grabbed the ul before
    ul.appendChild(li);

// ADD TEXT CONTENT
    // to the delete button
    deleteButton.textContent = "delete";
    //to the bookName 
    bookName.textContent = value


});