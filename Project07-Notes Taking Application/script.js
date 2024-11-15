const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main');


addBtn.addEventListener("click",addNote);

function addNote(){

    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>
        <textarea></textarea>
    `;

    const trashIcon = note.querySelector(".trash");
    const saveIcon = note.querySelector(".save");
    const textarea = note.querySelector("textarea");

    trashIcon.addEventListener("click",()=>{
        note.remove();
        saveNote();

    });

    saveIcon.addEventListener("click",saveNote);
    textarea.addEventListener("input",saveNote);

    main.appendChild(note);
}


function saveNote(){

    const notes = document.querySelectorAll(".note textarea")
    const data = [];

    for(let i = 0; i < notes.length; i++)
    {
        data.push(notes[i].value);
    }

    if(data.length === 0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }

}

function loadNotes(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if(lsNotes !== null){
        lsNotes.forEach(noteText =>{
            addNote();

            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length - 1];
            lastNote.value = noteText;

        });

    }else{
        addNote();
    }

}

loadNotes();