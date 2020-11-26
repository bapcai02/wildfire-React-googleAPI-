import GoogleMapReact from 'google-map-react'
import WhatshotIcon from '@material-ui/icons/Whatshot';

const LocationMarket = ( {lat, lng} ) =>  <WhatshotIcon className="location-icon" />;

const Map = ({eventData, center, zoom}) => {
    const markers = eventData.map((ev,key) => {
        if (ev.categories[0].id === 8){
            return <LocationMarket  key = {key} lat={ev.geometries[0].coordinates[1] } lng={ev.geometries[0].coordinates[0]}/>
        }
    })

    console.log(markers);
    return(
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAgt9BNJ7T3NiwwbW_GWDyQ7cZ9uVTepXw'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map