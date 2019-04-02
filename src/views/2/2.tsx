import * as React from "react";
import './2.scss';

export default () =>
  (
    <section className="rcp-2__mask">
      <ul className="rcp-2__loader">
        {
          Array(5).fill(1).map(() => <li />)
        }
      </ul>
    </section>
  );
