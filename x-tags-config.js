const tagApp = {
    broadcast: function (data) {
        data['app'] = 'tagApp';

        let desired = ['app', 'type', 'from', 'event'];
        for (var r of desired) {
            if (_.isEmpty(data[r]) && !_.isNumber(data[r])) {
                console.log('Missing desirable broadcast element: '.concat(JSON.stringify(data)))
            }
        }

        window.parent.postMessage(JSON.stringify(data), '*');
    },

    icons: {
        "example": {
            width: 16,
            height: 12.268,
            d: 'M2.786,2.795 C3.580,2.795 4.223,2.223 4.223,1.509 C4.223,0.804 3.580,0.223 2.786,0.223 C1.991,0.223 1.348,0.804 1.348,1.509 C1.348,2.223 1.991,2.795 2.786,2.795 L2.786,2.795 Z M1.589,3.321 L0.688,4.705 L2.357,5.750 C2.357,5.750 3.473,6.313 2.946,7.384 C2.446,8.393 0.018,10.607 0.018,10.607 L2.196,11.964 C3.696,8.696 3.607,9.134 3.982,7.955 C4.366,6.759 4.455,5.839 3.795,5.179 C2.946,4.330 2.848,4.250 1.589,3.321 L1.589,3.321 Z M15.714,2.955 C15.714,2.955 15.250,-0.723 7.196,1.554 C7.536,0.955 7.705,0.563 7.705,0.563 L5.696,0.000 C5.696,0.000 4.884,2.643 3.438,3.884 C3.438,3.884 4.839,4.688 4.821,4.661 C5.223,4.268 5.580,3.857 5.893,3.464 C6.214,3.321 6.527,3.188 6.830,3.063 C6.455,3.741 5.857,4.741 5.250,5.375 L6.098,6.116 C6.098,6.116 6.679,5.554 7.313,4.884 L8.027,4.884 L8.027,6.125 L5.223,6.125 L5.223,7.107 L8.027,7.107 L8.027,9.482 C7.991,9.473 7.955,9.473 7.920,9.473 C7.616,9.455 7.125,9.411 6.946,9.107 C6.714,8.750 6.884,8.080 6.893,7.670 L4.955,7.670 L4.884,7.705 C4.884,7.705 4.179,10.884 6.938,10.813 C9.509,10.884 10.991,10.098 11.696,9.554 L11.982,10.607 L13.571,9.946 L12.491,7.313 L11.205,7.705 L11.446,8.616 C11.116,8.857 10.732,9.045 10.321,9.179 L10.321,7.107 L13.054,7.107 L13.054,6.125 L10.321,6.125 L10.321,4.884 L13.071,4.884 L13.071,3.902 L8.188,3.902 C8.536,3.473 8.813,3.080 8.893,2.830 L8.036,2.598 C11.688,1.295 13.723,1.518 13.705,3.661 L13.705,9.304 C13.705,9.304 13.920,11.241 11.696,11.107 L10.500,10.848 L10.214,11.991 C10.214,11.991 15.402,13.464 15.821,9.482 C16.250,5.491 15.714,2.955 15.714,2.955 L15.714,2.955 Z'
        }
    },

    imageLimits: {
        focus: 5,
        blur: 3,
        width: 500,
    },

    map: {
        key: 'AIzaSyDmnopY6JoZqF_E0MSGn6odXjZwSU1JZqI',
        zoom: 10,
        mapType: 'terrain',
    },

    format: {
        date: 'Y-MM-DD',

        money: function (price) {
            let decimals = 0;
            let seperator = ',';

            let symbol = price.substring(0, 1);
            let num = Number(price.substring(1))
            return symbol + parseFloat(Math.round(num * 100) / 100)
                .toFixed(decimals)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, seperator)
        },

        feature: function (keyword) {

            return keyword
                .replace('AMENITY_', '')
                .replace('SERVICE_', '')
                .replace('LOCATION_TYPE_', '')
                .replace('_', ' ')
                .toLowerCase();
        }
    },

    servers: {
        production: "https://staging.LacureData.com",
        development: "http://LacureData.test"
    },

    rendition: [null, "Marriott"][0],
    channels: ['LacureVillas.com']
}