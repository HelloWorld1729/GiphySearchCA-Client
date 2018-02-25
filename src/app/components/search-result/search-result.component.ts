import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from "@angular/common/http";

import * as _ from 'underscore';
import { PaginationService } from '../../PaginationService';

@Component({
  selector: 'app-searchresult',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

        // array of all items to be paged
        private imageItems: any[];
 
        //pager object
        pager: any = {} ;
     
       // paged items
        pagedItems: any[];
  

  @Input() imageSource: any[] = [];

  constructor(private http: HttpClient,private paginationService: PaginationService) { }

  ngOnInit() {
    this.imageItems = this.imageSource;
    this.setPage(1);
  }

  onClicked(img:any):void {
    console.log(" username = ", img.username);
    console.log(" id = ", img.id);
    console.log(" Url = ", `/GiphyServer/saveGiphy/${img.username}-${img.id}`);
    this.http.get(`/GiphyServer/saveGiphy/${img.username}-${img.id}`).subscribe({ error: e => console.error(e) });
    img.disable = true;
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    //get pager object from service
   this.pager = this.paginationService.getPager(this.imageItems.length, page);

   // get current page of items
   this.pagedItems = this.imageItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}



