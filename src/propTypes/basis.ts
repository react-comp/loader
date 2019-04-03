import * as PropTypes from 'prop-types';

export const LoaderBasisPropTypes = {
  isLoading: PropTypes.bool,
  isGlobal: PropTypes.bool,
  bgColor: PropTypes.string,
  contentClassName: PropTypes.string,
  children: PropTypes.node,
}

export const LoaderBasisDefaultProps = {
  isLoading: true,
  isGlobal: false,
  bgColor: '',
  contentClassName: '',
  children: null,
}