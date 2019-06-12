import { Component, OnInit } from '@angular/core';
import { MainService } from '../_services/main.service';
import { AuthService } from '../_services/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable, Observer} from 'rxjs';
import PlantifyUser from '../schema/user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {ProfileService}from '../_services/profile.service'

@Component({
  selector: 'app-a-main',
  templateUrl: './a-main.component.html',
  styleUrls: ['./a-main.component.css']
})
export class AMainComponent implements OnInit {

  articlesList:any[];
  label: string;
  content: string;

  tasks:any[] = [
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Write a letter',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Make a mathematical model',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},
    // {dpurl:'https://s.ndtvimg.com/images/entities/120/kane-williamson-1058.png',title:'Android Layout Design',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu'},

  ];
  userId: string;
  noOfAssignments:any ;
  pageSize:any ;
  pageSizeOptions:any[] = [20];
  loading:any=true;
  isLoggedIn = false;
  user = new PlantifyUser;

  constructor(public mainService:MainService,
    public authService:AuthService,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    private profileService: ProfileService,) { }

  ngOnInit() {
    this.mainService.getCollection("articles")
    .then(list => {
      this.articlesList = list;
      list.forEach(list => {
        console.log('Found subcollection with id:', list.id);
      });
    })
    .then(list => {
      //this.articlesList = list;
      console.log(this.articlesList);
      
      return "got documents from database";
    })
    .then(temp => {
        console.log("this is temp"+ temp);
        
    })
  
    .catch(err => {
        console.log(err);
    });


    this.authService.getLoggedInUpdates().subscribe(user=> {
        if(user==null || user==undefined){
          this.isLoggedIn = false;
        }
        else {
          this.isLoggedIn = true;
        }
    });


  
  }
  // liking(articleid){
  //  // let admin = require('firebase-admin');
  //   // var addDoc =this.db.collection('articles').doc(articleid).update({      
    
  //   //   likedUserIds:admin.firestore.FieldValue.arrayUnion(this.user.id)
  //   }).then(ref => {
  //     console.log('Added like with ID: ', this.user.id);
      
  //     this.router.navigateByUrl('/');    
  // });
  // }


}
