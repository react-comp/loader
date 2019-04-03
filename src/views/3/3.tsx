import * as React from "react";
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
//
import Generate from '../generator/generator';
//
import { LoaderBasisProps } from '../../interface/basis';
import { LoaderBasisPropTypes, LoaderBasisDefaultProps } from '../../propTypes/basis';
//
import './3.scss';

export interface LoaderProps extends LoaderBasisProps {
  loadText?: string | React.ReactNode;
};

export default class Loader extends React.PureComponent<LoaderProps, {}> {
  static propTypes = {
    ...LoaderBasisPropTypes,
    loadText: PropTypes.node,
  };

  static defaultProps = {
    ...LoaderBasisDefaultProps,
    loadText: '',
  }

  state = {};

  render() {
    const {
      children, isLoading, isGlobal,
      bgColor, contentClassName,
      loadText,
    } = this.props;

    const generatorProp = {
      isLoading,
      isGlobal,
      bgColor,
    };

    return (
      <Generate
        {...generatorProp}
        childTransfer={children}
      >
        <div
          className={classNames(
            'rcp-loader-3__content',
            {
              [contentClassName]: !!contentClassName,
            }
          )}
        >
          {loadText || 'Loading...'}
        </div>
      </Generate>
    );
  }
}
