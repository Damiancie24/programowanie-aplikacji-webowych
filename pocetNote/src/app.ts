import { Note } from './note';


export class App {
    notes: Note[] = [];
    constructor() {
            this.start();
    }

    start(): void {
        document.querySelector('#addNewNote')
            .addEventListener('click', () => {
                this.addNewNote();
            });
        this.loadNotes();
    }

    loadNotes(): void{
        const noteList = localStorage.getItem;
        if (noteList === null) {
            return;
        }
        const notes: Note[] = JSON.parse(localStorage.getItem('noteList'));
        this.notes = notes;

        // for(let i = 0; i < notes.length; i++){
        // this.createHTMLNote(notes[i].title, notes[i].content);
        // }

        for (const note of notes) {
            this.createHTMLNote(note.title, note.content);
            }
    }

    addNewNote(): void {
        const newNoteTitle: string = document.querySelector<HTMLInputElement>('#title').value;
        const newNoteContent: string = document.querySelector< HTMLTextAreaElement>('#content').value;
        this.createHTMLNote(newNoteTitle, newNoteContent);

        const note = new Note(newNoteTitle, newNoteContent);
        this.notes.push(note);
        this.updateLocalStorage();
    }

    updateLocalStorage(): void {
        const notes = JSON.stringify(this.notes);
        localStorage.setItem('noteList', notes);
    }
    createHTMLNote(title: string, content: string): void {
        const notes = document.querySelector('#notes');
        const note = document.createElement('div');
        const noteTitleElement = document.createElement('div');
        const noteContentElement = document.createElement('div');

        noteTitleElement.innerHTML = title;
        noteContentElement.innerHTML = content;

        note.classList.add('note');
        note.appendChild(noteTitleElement);
        note.appendChild(noteContentElement);
        notes.appendChild(note);


    }
}
