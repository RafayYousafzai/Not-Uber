import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import React from "react";
import { Text } from "react-native";

export default function Map() {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      style={{ height: 300, width: "100%" }}
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      //   initialRegion={}
      showsUserLocation={true}
    >
      <Text>Map</Text>
    </MapView>
  );
}
