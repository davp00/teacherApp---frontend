import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  public months : Array<String> = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  public days   : Array<String> = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

  public year       : Number;
  public day        : String;
  public day_month  : String;
  public month      : String;
  public type       : String;
  public minutes    : String;
  public seconds    : String;
  public hour       : String;

  constructor()
  {
      this.clock();
      setInterval(() => this.clock(), 1000);
  }

  ngOnInit() {
  }

  public clock()
  {
      let date        = new Date(),
          month_num   = date.getMonth(),
          day         = date.getDate(),
          day_num     = date.getDay(),
          hour        = date.getHours(),
          minutes     = date.getMinutes(),
          seconds     = date.getSeconds();

      this.type = "a.m";

      if ( hour > 12) this.type = 'p.m';

      this.year       = date.getFullYear();
      this.month      = this.months[ month_num ];
      this.day        = this.days[ day_num - 1 ];
      this.day_month  = this.Parser( day );
      this.hour       = this.Parser( hour );
      this.minutes    = this.Parser( minutes );
      this.seconds    = this.Parser( seconds );
  }

  private Parser( num : Number)
  {
      if ( num < 10) return "0" + num;
      return "" + num;
  }

}
