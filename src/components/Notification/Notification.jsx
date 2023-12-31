import React from 'react';

import css from '../Feedbacks/Feedbacks.module.css';

function Notification({ message }) {
  return <p className={css.notification}>{message}</p>;
}

export default Notification;
