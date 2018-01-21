import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  notodoCollection: AngularFirestoreCollection<Note>;
  notodo: Observable<Note[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.notodoCollection = this.afs.collection('notodo');
    this. notodo = this.notodoCollection.valueChanges();
  }

}
