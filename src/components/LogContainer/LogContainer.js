import React from 'react';
import Log from './../../components/LogComponent/Log.jsx';
import styles from './LogContainer.css';

const lengthsAreEqual = (prevProps, nextProps) => {
  if (prevProps.logs.length === nextProps.logs.length) return true;

  return false;
};

const LogContainer = props => {
  let logs = props.logs.map((log, i) => {
    let text = JSON.parse(log.req.postData.text);
    return (
      <Log
        key={i}
        operationName={text.operationName}
        query={text.query}
        variables={text.variables}
        logId={i}
        logChange={props.logChange}
      />
    );
  }).reverse();

  return (
    <React.Fragment>
      {logs.length > 0 ? (
        <div id='log-container'>
          <div id='log-header'>
            <h2>Request Log</h2>
            <button
              className='appButton'
              data-log='req-log'
              onClick={e => {
                props.clearLog(e);
              }}
            >
              Clear
            </button>
          </div>
          <div id='logs'>{logs}</div>
        </div>
      ) : <h2>No requests have been made yet.</h2>}
    </React.Fragment>
  );
};

export default React.memo(LogContainer, lengthsAreEqual);
