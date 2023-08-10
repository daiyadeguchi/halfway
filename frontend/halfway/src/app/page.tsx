'use client'
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';

const Home: NextPage = () => {
  const libraries: string[] = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 35.652832, lng: 139.839478 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions> (
    () => ({
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        onLoad={() => console.log('Map Componetn Loaded...')}
      />
    </div>
  ); 
};

export default Home;