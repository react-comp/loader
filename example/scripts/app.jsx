import React, { PureComponent } from 'react';
//
import Loading1 from '../../src/views/1/1.tsx';
import Loading2 from '../../src/views/2/2.tsx';
import Loading3 from '../../src/views/3/3.tsx';
//
import './app.scss';

export default class App extends PureComponent {
  static propTypes = {

  };

  static defaultProps = {

  }

  state = {
    loadingList: [
      {
        key: 'loading1',
        comp: Loading1,
        isLoading: true,
        isGlobal: true,
      },
      // {
      //   key: 'loading2',
      //   comp: Loading2,
      //   isLoading: true,
      //   global: false,
      // },
      // {
      //   key: 'loading3',
      //   comp: Loading3,
      //   isLoading: true,
      //   global: false,
      // },
    ],
  }

  toggleLoading(index, state) {
    const { loadingList } = this.state;
    loadingList[index].isLoading = state;

    this.setState({ loadingList: [...loadingList] });
  }

  render() {
    const { loadingList } = this.state;

    return (
      <ol className="m-loader">
        {
          loadingList.map((item, index) => (
            <li key={item.key} className="loader__list">
              <item.comp
                isLoading={item.isLoading}
                isGlobal={item.isGlobal}
              >
                <div className="loader__box" />
              </item.comp>


              <div className="loader__btn-group">
                <h4>{index + 1}</h4>

                <button type="button" onClick={() => this.toggleLoading(index, false)}>Not loading</button>
                <button type="button">Global Loading</button>
                <button type="button" onClick={() => this.toggleLoading(index, true)}>Loading</button>
              </div>
            </li>
          ))
        }
      </ol>
    );
  }
}
