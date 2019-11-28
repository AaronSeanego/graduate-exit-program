import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-view-grads',
  templateUrl: './view-grads.component.html',
  styleUrls: ['./view-grads.component.scss']
})
export class ViewGradsComponent implements OnInit {
  GraduateArray = [];
  categories : any = [];
  category: any = [];
  working = 0;
  not_working = 0;
  total_grads = 0;
  idColl = '6wLBSRMo5yfA705vmkSb';
  constructor(  private db: AngularFirestore) { }
  GraphData = [];
  ngOnInit() {

    // this.spazaRef = this.afs.doc(`Graduate/${this.spazauid}`)      ref   6wLBSRMo5yfA705vmkSb
    

    // this.categories = this.db.doc(`Graduate/${"6wLBSRMo5yfA705vmkSb"}`);
    // this.postRef = this.afs.doc('posts/testPost')
    // this.commentsRef = this.spazaRef.collection('comments', ref => ref.orderBy('createdAt', 'desc'))
    // this.spaza$ = this.spazaRef.valueChanges();
    // this.users = this.afs.collection('users').valueChanges();

       this.categories = this.db.collection('Graduate/').valueChanges();
       this.category = this.db.collection('category/').valueChanges();
       
    // .then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // console.log(doc.data().Address);
    //     this.categories.push(doc.data());
    //     this.total_grads = this.total_grads + 1;
    //     if(doc.data().Status == true){
    //       this.working = this.working + 1;
    //     }else{
    //       this.not_working = this.not_working + 1;
    //     }

    //     this.GraphData.push({
    //       Working: this.working,
    //       NotWorking: this.not_working,
    //       TotalGrads: this.total_grads
    //     })
    //     });
    // });
  }

}
