import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lodedFeature = 'Recipe';

  onNavigateAfterReceiving(featuredatareceived : string){
    this.lodedFeature = featuredatareceived;
  }
}
