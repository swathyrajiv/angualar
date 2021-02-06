import { Component, OnInit } from '@angular/core';
import quizquestion  from './quiz.json';
import { FormsModule } from '@angular/forms';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
 interface Quiz{
  question:String;
  option:String;
  myVar:String;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = 'json-file-read-angular';
  // quiz: Quiz = new Quiz();
  myVar1:string ="";
  ans1:string = "B";
  ans2:string = "C";
  ans3:string = "A";
  ans4:string = "A";
  ans5:string = "A";
  myVar2:string ="";
  myVar3:string ="";
  myVar4:string ="";
  myVar5:string ="";
  decimal: number = 0;
  public questions:Quiz[] = quizquestion;
    constructor() { }

  ngOnInit(): void {
  }
 
  verifyAnswer(){
    if(!this.myVar1)
    alert("please enter an answer");
    else{
    if(this.myVar1 == this.ans1){
    console.log(this.myVar1);
    this.decimal++;
    alert("right");
    }else
    alert("wrong");
  }
  if(!this.myVar2)
  alert("please enter an answer");
  else{
    if(this.myVar2 == this.ans2){
      console.log(this.myVar2);
      this.decimal++;
      alert("right");
      }else
      alert("wrong");
    }
    if(!this.myVar3)
  alert("please enter an answer");
  else{
      if(this.myVar3 == this.ans3){
        console.log(this.myVar3);
        this.decimal++;
        alert("right");
        }else
        alert("wrong");
      }
      if(!this.myVar4)
  alert("please enter an answer");
  else{
        if(this.myVar4 == this.ans4){
          console.log(this.myVar4);
          this.decimal++;
          alert("right");
          }else
          alert("wrong");
        }if(!this.myVar5)
        alert("please enter an answer");
        else{
          if(this.myVar5 == this.ans5){
            console.log(this.myVar5);
            this.decimal++;
            alert("right");
            
            }else
            alert("wrong");
          }
            console.log(this.decimal);
  }

}