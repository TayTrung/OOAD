import {
  SHOW_NOTI,
} from "./types";
import axios from "axios";
import { log } from "util";
import { NotificationContainer, NotificationManager } from 'react-notifications';

//visit https://www.npmjs.com/package/react-notifications for more noti template ^^

export const showNoti = type => dispatch => {
  switch (type) {
    case 'failure':
      alert('te');
      NotificationManager.error('Sorry, your data could not be saved!');
      break;
    case 'success':
      NotificationManager.success('Your data has been updated successfully', 'Success', 2000, {}, true);
      break;
    case 'warning-order':
      NotificationManager.warning('You have not ordered yet!', 'Warning', 2000, {}, true);
      break;
    default:
      break;
  }
  dispatch({ type: SHOW_NOTI, payload: type })
};

