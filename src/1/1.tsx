import * as React from "react";
import './1.scss';

class Loading extends React.PureComponent {
  state = {};

  render() {
    return (
      <div className="rcp-mask">
        <div className="rcp-loading1">
          <h2>LOADING...</h2>

          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

export default Loading;
