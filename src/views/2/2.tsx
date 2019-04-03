import * as React from "react";
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { generate } from 'shortid';
//
import Generate from '../generator/generator';
//
import { LoaderBasisProps } from '../../interface/basis';
import { LoaderBasisPropTypes, LoaderBasisDefaultProps } from '../../propTypes/basis';
//
import './2.scss';

const DOT_LIST: Array<any> = Array.from(Array(5), item => item = { key: generate() })

export interface LoaderProps extends LoaderBasisProps {
};

export default class Loader extends React.PureComponent<LoaderProps, {}> {
  static propTypes = {
    ...LoaderBasisPropTypes,
  };

  static defaultProps = {
    ...LoaderBasisDefaultProps,
  }

  state = {};

  render() {
    const {
      children, isLoading, isGlobal,
      bgColor, contentClassName,
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
        <ul
          className={classNames(
            'rcp-loader-2__box',
            {
              [contentClassName]: !!contentClassName,
            }
          )}
        >
          {DOT_LIST.map(item => <li key={item.key} />)}
        </ul>
      </Generate>
    );
  }
}
