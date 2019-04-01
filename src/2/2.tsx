import * as React from "react";
import './2.scss';

export default () =>
  (
    <ul className="loader-dot">
      {
        Array(5).fill(1).map(() => <li />)
      }
    </ul>
  );
