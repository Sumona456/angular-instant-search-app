import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchPipe,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Instant Search App';

  currentDate = new Date();

  timePostFix:string = this.currentDate.getHours()>=12?'PM':'AM';
  
  today:string= this.currentDate.toDateString();
  
  time:string = this.currentDate.getHours()+':'+this.currentDate.getMinutes() + ' '+this.timePostFix;

  bookInput:string;

  searchInput:string;
  constructor(){

    this.searchInput='';
    this.bookInput ='';
  }



programmingLang = ['C++', 'C', 'Python', 'Java', 'Golang', 'Ruby', 'R', 'Javascript', 'Go', 'C-sharp', 'Typescript'
,'Angular', 'jQuery', 'CSS', 'JSON', 'HTML', 'XML' ];

books =['Angels & Demons', 'Origin', 'Da Vinci Code', 'To Kill a Mockingbird', 'Jungle Safari', 'A Walk to remember'];

authors =[

{
  title:'Angels * Demons',
  name:'Dan Brown',
  email : 'dbrown_rocks@gmail.com',
  address:'123 Auckland, NZ',
  cars:['BMW', 'Audi', 'Ferrari']
},

{
  title:'Da vinci code',
  name:'Dan Brown',
  email : 'dbrown_rocks@gmail.com',
  address:'123 Auckland, NZ'
},
{
  title:'Wealth of Nations',
  name:'Adam Smith',
  email : 'smith.adams@gmail.com',
  address:'123 Auckland, NZ'
}

]
}