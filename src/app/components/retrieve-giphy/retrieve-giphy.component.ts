import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../../SearchService';

@Component({
  selector: 'app-retrieve-giphy',
  templateUrl: './retrieve-giphy.component.html',
  styleUrls: ['./retrieve-giphy.component.css']
})
export class RetrieveGiphyComponent implements OnInit {
  @ViewChild('searchForm') searchForm: NgForm;
  basket: any[] = [];
  userName: string ="username";

  constructor( private searchService : SearchService ){}
  ngOnInit() {
  }
  
  retrieve():void{

    this.basket = [];
    this.userName = this.searchForm.value.username;
    this.searchService.getSavedResult(this.userName)
      .then((resultJson) => {
        console.log(">>> Result : ", resultJson);
        for(let i of resultJson)
        {
         
         this.basket.push({
            username : this.userName,
            image : `https://media0.giphy.com/media/${i.giphyid}/giphy-downsized.gif`,                    
          });
          
        }
      
      })
      .catch(error => {
        console.error(">>> error: ", error)

      });
      console.log(this.basket.length);
    this.searchForm.reset();
  }

}