/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Your location is</h1>
            <iframe
              style={{border: 0, width: '100%', minHeight: 500}}
              frameBorder="0" 
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBQsV-QF4G-CJi22R7oaLOKzUGkaZvhHYI
    &q=Space+Needle,Seattle+WA" 
            >
            </iframe>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
