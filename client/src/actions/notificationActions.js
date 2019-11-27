import {
  SHOW_NOTI,
} from "./types";
import axios from "axios";
import { log } from "util";
import { NotificationContainer, NotificationManager } from 'react-notifications';

export const showNoti = type => dispatch => {
  switch (type) {
    case 'info':
      NotificationManager.info('Info message');
      break;
    case 'success':
      NotificationManager.success('Your data has been updated successfully', 'Success', 2000, {}, true);
      break;
  }
  dispatch({ type: SHOW_NOTI, payload: type })
};

