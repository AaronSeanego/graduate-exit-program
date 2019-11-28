import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DisplayGradsDataSource, DisplayGradsItem } from './display-grads-datasource';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {MatTableDataSource} from '@angular/material'
@Component({
  selector: 'app-display-grads',
  templateUrl: './display-grads.component.html',
  styleUrls: ['./display-grads.component.scss']
})
export class DisplayGradsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource: any;
  // displayedColumns = ['Name', 'Surname','Address'];
  displayedColumns = ['Name', 'Surname','Gender','Age','Email','Contact','Address','Category','Price'];
  array
  constructor(private afs: AngularFirestore){

  }

  ngOnInit() {
    this.afs.collection('Graduate/').snapshotChanges().subscribe((data: any) => {
      this.array = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });

      console.log(this.array)
      this.dataSource = new MatTableDataSource(this.array)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
