import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
        <div className = "middleImg">
        <Image src='./experience-islandsnow-video-snapshot.png' fluid />
        </div>
    );
  }
}
