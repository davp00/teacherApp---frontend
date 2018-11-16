import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinerService {
  private visible:boolean;
  constructor() {

  }

  public Show()
  {
      this.visible = true;
  }

  public Hide()
  {
      this.visible = false;
  }

  public Visible()
  {
    return this.visible;
  }
}
