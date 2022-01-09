import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { trackType } from 'src/app/types';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  showContent: boolean = true;
  tracks: trackType[];

  constructor(private router: Router, private uiService: UiServiceService) {
    this.tracks = uiService.tracksAfterRequestAccept;
    this.uiService
      .onChangeCurrentTrack()
      .subscribe((_tracks) => (this.tracks = _tracks));
  }

  onClickDone(track: trackType) {
    let tempTrack = this.tracks;
    let clickedTracksIndex = tempTrack.indexOf(track);

    if (track == this.uiService.tracksAfterRequestAccept[2]) {
      this.router.navigateByUrl('car-details');
    }

    tempTrack[clickedTracksIndex].isDone = true;

    this.uiService.setCurrentTrack(tempTrack);
  }

  navigate() {
    this.router.navigateByUrl('uploadproof');
  }

  ngOnInit() {}
}
