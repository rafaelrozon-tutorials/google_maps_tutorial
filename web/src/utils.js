import * as Constants from './constants';

export const createMap = (config = { zoom: 11, center: Constants.DEFAULT_POSITION }) => {
    return new google.maps.Map(document.getElementById('map'), config);
};
