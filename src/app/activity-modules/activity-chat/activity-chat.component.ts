import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../services/activity.service';
import {ActivatedRoute} from '@angular/router';
import {Activity} from '../../classes/activity';
import {User} from '../../classes/user';
import {LoadingSpinerService} from '../../services/loading-spiner.service';
import {Socket} from 'ngx-socket-io';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-activity-chat',
  templateUrl: './activity-chat.component.html',
  styleUrls: ['./activity-chat.component.css']
})
export class ActivityChatComponent implements OnInit {

  public activities: Array<Activity>;
  public user   : User;
  public chatBox:any;

  constructor(
    private route: ActivatedRoute,
    private activityService : ActivityService,
    public userService     : UserService,
    public  loadingService: LoadingSpinerService,
    private socket: Socket
  ) { }

  ngOnInit() {
    this.loadingService.Show();
    let groupCode = this.route.snapshot.paramMap.get('groupCode');
    this.activityService.getActivities(groupCode).subscribe(
      (res:any) =>
      {
          this.activities = res.activities as Activity[];
          this.loadingService.Hide();
      },
      () =>
      {
          this.loadingService.Hide();
      }
    );
      this.userService.ProfileInfo().subscribe(
        (res) =>
        {
            this.user = res as User;
            this.socket.emit('user', this.user);
        },
        () =>
        {

        }
      );
      this.SocketFunctions();


    this.chatBox = document.querySelector('.chat > .content');

    // cuando exista un nuevo mensaje

  }

  public ShowActivity(activity: Activity)
  {
      activity.show = !activity.show;

      if (activity.show)
      {
          this.socket.emit('activity', activity.code);
      }
  }

  public SendMessage(activity:Activity)
  {
      let { code, message } = activity;
      this.socket.emit('activity:comment', { code, message });
      activity.message = "";
  }

  public FindActivity(code): Activity
  {
      for (let activity of this.activities)
      {
          if ( activity.code === code) {return activity; }
      }

      return null;
  }


  public SocketFunctions():void
  {
      this.socket.on('activity:newcomment', (data) =>
      {
        let activity:Activity = this.FindActivity(data.data.code);

        if ( activity != null)
        {
            //this.chatBox.scrollTop = this.chatBox.scrollHeight;
            activity.comments.push(data);
        }
      });
  }
}
