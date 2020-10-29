import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  pos=550;

  ngOnInit(): void {
  	this.digital();
  }
  public async digital() {
    const Digital = document.getElementById("digital") as HTMLImageElement;
    const Mov = document.getElementById("digital") as HTMLStyleElement;
    let num = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    console.log(num);
    if (num==1) {
      for (let n=6;n<8;n++) {
        Digital.src = "../../assets/img/terr/terr" + n + ".png";
        this.pos=this.pos+12;
        if (this.pos>800) {
          this.pos=800;
        }
        Mov.style.left = this.pos+"px";
        await new Promise(r => setTimeout(r, 1000));
      }
      Digital.src = "../../assets/img/terr/terr8.png";
      await new Promise(r => setTimeout(r, 1000));
    }
    if (num==2) {
      for (let n=2;n<4;n++) {
          Digital.src = "../../assets/img/terr/terr" + n + ".png";
          this.pos=this.pos-12;
          if (this.pos<0) {
            this.pos=0;
          }
          Mov.style.left = this.pos+"px";
          await new Promise(r => setTimeout(r, 1000)); 
      }
      Digital.src = "../../assets/img/terr/terr4.png";
      await new Promise(r => setTimeout(r, 1000));
    }
    this.digital();
  }


  
}
