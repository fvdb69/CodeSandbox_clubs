import { Component } from "@angular/core";
import { soccerdata } from "./Soccerdata";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Sandbox Angular";

  soccerclubs = [
    new soccerdata("Ajax", "Amsterdam"),
    new soccerdata("PSV", "Eindhoven"),
    new soccerdata("Feyenoord", "Rotterdam"),
    new soccerdata("Nac", "Breda")
  ];

  public addSoccerClub(name: string, place: string) {
    let club = new soccerdata(name, place);
    this.soccerclubs.push(club);
  }
}
