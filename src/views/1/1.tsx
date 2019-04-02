import * as React from "react";
import * as ReactDom from "react-dom";
import * as PropTypes from 'prop-types';
import * as classNames from "classnames";
import * as shortid from 'shortid';
//
import './1.scss';

const DOT_LIST = Array.from(Array(7), item => item = { key: shortid.generate() })

export interface LoadingProps {
  isLoading: boolean,
  isGlobal: boolean,
  children: any,
}

class Loading extends React.PureComponent<LoadingProps> {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isGlobal: PropTypes.bool,
    children: PropTypes.any,
  };

  static defaultProps = {
    isGlobal: false,
    children: null,
  }

  state = {};

  renderLoader = () => {
    const { isLoading } = this.props;

    return (
      <div className={classNames(
        'rcp-loader-1__mask',
        {
          fadeIn: isLoading === true,
          fadeOut: !isLoading,
        }
      )}>
        <div className="rcp-loader-1__box">
          <h2 className="rcp-loader-1__content">LOADING...</h2>

          {DOT_LIST.map(item => <span key={item.key} />)}
        </div>
      </div>
    )
  }

  render() {
    const { children, isGlobal } = this.props;

    return (
      <section className="m-rpc-loader-1">
        {
          isGlobal
          ?
            ReactDom.createPortal(
              this.renderLoader(),
              document.body
            )
          :
            this.renderLoader()
        }

        {children}
      </section>
    );
  }
}

export default Loading;
