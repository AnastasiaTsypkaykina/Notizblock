let notes = ["Banana", "Orange", "Rasen mähen", "Abendessen vorbereiten"];
let notesTitle = ["Einkaufsliste", "", "Aufgaben", ""];

function init() {
    getFromLocalStorage();
    renderNotes();
}
function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(indexNote);    
  }  
}

function getNoteTemplate(indexNote) {
  return `<h2>${notesTitle[indexNote]}</h2>
    <br><p>- ${notes[indexNote]} 
    <button onclick="deleteNote(${indexNote})"> x </button> </p><br>`;
}
function addNote() {
  let noteInputRef = document.getElementById("note-input");
  let noteInput = noteInputRef.value;
  let titleInputRef = document.getElementById("title-input");
  let titleInput = titleInputRef.value;
  if(noteInput != ""){
    notes.push(noteInput);
  }
  if (titleInput != "") {
    notesTitle.push(titleInput);
  }
  
  saveToLocalStorage();
  renderNotes();
  noteInputRef.value = "";
  titleInputRef.value = "";
}

function deleteNote(indexNote) {
  notes.splice(indexNote, 1);
  notesTitle.splice(indexNote, 1);
  renderNotes();
}
function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("titles", JSON.stringify(notesTitle));
}
function getFromLocalStorage() {
  const notesFromStorage = localStorage.getItem("notes");
  let noteArr = JSON.parse(notesFromStorage);
  if (noteArr != null) {
    notes = noteArr;
  }

  const titlesFromStorage = localStorage.getItem("titles");
  let titleArr = JSON.parse(titlesFromStorage);
  if (titleArr != null) {
    notesTitle = titleArr;
  }
}
