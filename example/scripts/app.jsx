import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//
import Loading1 from '../../src/1/1.tsx';
import Loading2 from '../../src/2/2.tsx';
import Loading3 from '../../src/3/3.tsx';
//
import './app.scss';

const LIST = [
  {
    key: 'loading1',
    comp: Loading1,
  },
  {
    key: 'loading2',
    comp: Loading2,
  },
  {
    key: 'loading3',
    comp: Loading3,
  },
];

export default class App extends PureComponent {
  static propTypes = {

  };

  static defaultProps = {

  }

  state = {

  }

  render() {
    return (
      <ol className="m-loading">
        {
          LIST.map((item, index) => (
            <li key={item.key}>
              <div className="loading-box">
                <item.comp />
              </div>


              <div className="loading-btn-group">
                <h4>{index + 1 }</h4>

                <button type="button">Global Loading</button>
                <button type="button">Not loading</button>
                <button type="button">Loading</button>
              </div>
            </li>
          ))
        }
      </ol>
    );
  }
}
