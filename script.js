let notes = ["Banana", "Rasen mähen"];

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML="";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];   
        contentRef.innerHTML += getNoteTemplate(indexNote);     
    }    
}

function getNoteTemplate(indexNote) {
    return `<p>- ${notes[indexNote]} <button onclick="deleteNote(${indexNote})"> x </button> </p`
}
function addNote () {
    let noteInputRef = document.getElementById("note-input");
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value="";
}

function deleteNote (indexNote) {
    notes.splice(indexNote, 1);
    renderNotes();
}