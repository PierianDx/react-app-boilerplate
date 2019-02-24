import React from 'react';
import cx from 'classnames';

export default ({ onClose, active = true, children }) => {
  return (
    <div className={cx('notification is-primary', { 'is-hidden': !active })}>
      <button className="delete" onClick={onClose} />
      {children}
    </div>
  );
};
