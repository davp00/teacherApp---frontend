import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../services/activity.service';
import {ActivatedRoute} from '@angular/router';
import {Activity} from '../../classes/activity';
import {User} from '../../classes/user';
import {LoadingSpinerService} from '../../services/loading-spiner.service';

@Component({
  selector: 'app-activity-chat',
  templateUrl: './activity-chat.component.html',
  styleUrls: ['./activity-chat.component.css']
})
export class ActivityChatComponent implements OnInit {

  public activities: Array<Activity>;
  public teacher   : User;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    public  loadingService: LoadingSpinerService
  ) { }

  ngOnInit() {
    this.loadingService.Show();
    let groupCode = this.route.snapshot.paramMap.get('groupCode');
    console.log(groupCode);
    this.activityService.getActivities(groupCode).subscribe(
      (res:any) =>
      {
          this.activities = res.activities as Activity[];
          this.teacher    = res.teacher as User;
          this.loadingService.Hide();
      },
      () =>
      {
          this.loadingService.Hide();
      }
    )

  }

  public ShowActivity(activity: Activity)
  {
      activity.show = !activity.show;
  }

  public SendMessage(activity:Activity)
  {
      activity.message = "";
  }
}
