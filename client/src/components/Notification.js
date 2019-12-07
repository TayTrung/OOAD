import React, { Component } from "react";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import MemberModal from "../components/Content/Member/MemberModal";
import Member from "../components/Content/Member/Member";
export default class Notification extends Component {

    createNotification = (type) => {
        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':
                NotificationManager.success('Your data has been updated successfully', 'Success', 2000, {}, true);
                break;
        }
    };

    render() {
        const { type } = this.props;
        return (
            <div>
                {this.createNotification(type)}
                <NotificationContainer />
            </div>

        )
    }
}