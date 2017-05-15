/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

// import GeoLocationExample from './GeoLocationExample';
let location;

navigator.geolocation.getCurrentPosition((position) => {
  location = `${position.coords.latitude}, ${position.coords.longitude}`;
});

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Your location is: {location}</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

// <GettingStartedGoogleMap
//   containerElement={
//     <div style={{ height: '100%' }} />
//   }
//   mapElement={
//     <div style={{ height: '100%' }} />
//   }
//   onMapLoad={_.noop}
//   onMapClick={_.noop}
//   markers={markers}
//   onMarkerRightClick={_.noop}
// />

// <iframe
//   style={{ border: 0, width: '100%', minHeight: 500 }}
//   frameBorder="0"
//   allowFullScreen
//   src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBQsV-QF4G-CJi22R7oaLOKzUGkaZvhHYI&q=Space+Needle,Seattle+WA"
// />
