import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  //TODO: inject the Spotify service
  constructor(private service: SpotifyService) { }

  ngOnInit() {
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */

  public aboutMe(): void{
    this.service.aboutMe().then(
      (res) => {
        this.name = res.name;
        this.profile_link = res.spotifyProfile;
        this.profile_pic = res.imageURL;
      }
    );
  }

}
