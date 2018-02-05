import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

import {LoginService} from '../services/login.service';
import {} from '../directives/note-scroll.directive';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  public title: FormControl;
  public description: FormControl;
  public notodoCollection: AngularFirestoreCollection<Note>;
  public notodo: Observable<Note[]>;
  private user: any;
  
  constructor(private afs: AngularFirestore, private ls: LoginService) {
    this.title = new FormControl();
    this.description = new FormControl();
   }

  add = () => {
    const id = this.afs.createId();
    const notodo: Note = {id: id , title: this.title.value, description: this.description.value, user_id: this.user.uid } ;
    this.notodoCollection.add(notodo);
  }

  update = () => {
    this.notodoCollection.doc('id').update({
      description: this.description.value
    });
  }
  ngOnInit() {
    this.ls.aths.subscribe((res) => {
      if (res) {
        this.user = res;
        this.notodoCollection = this.afs.collection('notodo', ref => {
          return ref.where('user_id', '==', this.user.uid);
        } );
        this.notodo = this.notodoCollection.valueChanges();
      }
    });

    this.description.valueChanges.auditTime(2000).subscribe(val => {
      this.update();
    });
  }

}
