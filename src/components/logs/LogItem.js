import React from 'react';
import format from 'date-fns/format';
import enUS from 'date-fns/locale/en-US';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  const formatedDate = format(new Date(log.date), 'MMM do yyyy, hh:mm aaa' , {
    locale: enUS,
  });
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{' '}
          <span className="black-text">{log.tech}</span> on{' '}
          <span>{formatedDate}</span>
        </span>
        <a href="#!" className="secondary-content"><i className="material-icons grey-text">delete</i></a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
