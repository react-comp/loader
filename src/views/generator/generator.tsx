import * as React from "react";
import * as ReactDom from "react-dom";
import * as PropTypes from 'prop-types';
import classNames from "classnames";
//
import './generator.scss';
//
import { MASK_BG_COLOR } from '../../constant/config-default';

export interface GeneratorProps {
  isLoading?: boolean;
  isGlobal?: boolean;
  bgColor?: string;
  children?: React.ReactNode;
  childTransfer?: React.ReactNode,
};

export default class Generator extends React.PureComponent<GeneratorProps, {}> {
  static propTypes = {
    isLoading: PropTypes.bool,
    isGlobal: PropTypes.bool,
    bgColor: PropTypes.string,
    children: PropTypes.element,
    childTransfer: PropTypes.element,
  };

  static defaultProps = {
    isLoading: true,
    isGlobal: false,
    children: null,
    childTransfer: null,
  }

  state = {};

  renderLoader() {
    const {
      isLoading, children, isGlobal,
      bgColor,
    } = this.props;

    return (
      <div
        className={classNames(
          'rcp-loader__mask',
          {
            fadeIn: isLoading,
            fadeOut: !isLoading,
            'rcp-loader__mask--global': isGlobal,
          }
        )}
        style={{ backgroundColor: bgColor ||  MASK_BG_COLOR }}
      >
        {children}
      </div>
    )
  }

  render() {
    const { childTransfer, isLoading, isGlobal } = this.props;

    return (
      <section className="m-rpc-loader">
        {
          (isGlobal && isLoading)
          ?
            ReactDom.createPortal(
              this.renderLoader(),
              document.body
            )
          :
            this.renderLoader()
        }

        {childTransfer}
      </section>
    );
  }
}
