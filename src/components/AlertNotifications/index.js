// Write your code here
import Notifictaion from '../Notification'
import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'

import './index.css'

const AlertNotification = () => (
  <div className="app-container">
    <div className="responsive-container">
      <h1 className="app-heading">Alert Notifications</h1>
      <Notifictaion>
        <AiFillCheckCircle className="circle-icon" />
        <div className="details-container">
          <h1 className="success-heading">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </Notifictaion>
      <Notifictaion>
        <RiErrorWarningFill className="error-icon" />
        <div className="details-container">
          <h1 className="error-heading">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notifictaion>
      <Notifictaion>
        <MdWarning className="warning-icon" />
        <div className="details-container">
          <h1 className="warning-heading">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notifictaion>
      <Notifictaion>
        <MdInfo className="info-icon" />
        <div className="details-container">
          <h1 className="info-heading">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notifictaion>
    </div>
  </div>
)

export default AlertNotification
