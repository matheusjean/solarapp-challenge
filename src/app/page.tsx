"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
} from "@react-google-maps/api";
import * as S from './styles';
import Heading from 'components/Heading';
import { ApiResponse } from 'models/api-response';
import { api } from 'service/apiClient';
import Title from 'components/Title';
import Card from 'components/Card';
import Description from 'components/Description';
import { API_KEY } from 'service/api-key';
import SelectedAddress from 'components/SelectedAddress';

type PositionProps = {
  lat: number,
  lng: number,
  city?: string,
  description?: string,
  neighbourhood?: string,
  streetNumber?: number,
}
const MapPage = () => {
  const [address, setAddress] = useState<ApiResponse[]>([])
  const [position, setPosition] = useState<PositionProps>({
    lat: -30.0846697,
    lng: -51.2458384,
    city: "Dourados",
    description: "Shopping Avenida Center",
    neighbourhood: "Jardim Paulista",
    streetNumber: 3600
  })

  const mapRef = useRef<GoogleMap>()
  const onLoad = useCallback(map => (mapRef.current = map), [])

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/addresses')
      setAddress(response.data)
      return response
    }
    fetchData()
  }, [])

  return (
    <>
      <Heading title="Solar Info" />
      <S.Container>

        <LoadScript
          googleMapsApiKey={API_KEY}
          libraries={["places"]}
        >
          <S.MapContainer>
            <GoogleMap
              onLoad={onLoad}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={position}
              zoom={15}
            >
              <Marker position={position} />
            </GoogleMap>
          </S.MapContainer>
        </LoadScript>

        <S.SideContainer>
          <S.Wrapper>
            {address.map((addr) => {
              return (
                <Card key={addr.uuid} onClick={() => {
                  setPosition({
                    lat: Number(addr.latitude),
                    lng: Number(addr.longitude),
                    city: addr.city,
                    description: addr.description,
                    neighbourhood: addr.neighbourhood,
                    streetNumber: addr.streetNumber
                  })
                }}>
                  <Title>{addr.city}</Title>
                  <Description>{`${addr.streetName},
                  ${addr.streetNumber},
                  ${addr.zipcode},
                  ${addr.state}`}
                  </Description>
                </Card>
              )
            })}
            <SelectedAddress key={position.city}>
              <Title>{position.city}</Title>
              <Description>{`Local: ${position.description}`}</Description>
              <Description>{`Bairro: ${position.neighbourhood}, ${Number(position.streetNumber)} `}</Description>
            </SelectedAddress>
          </S.Wrapper>
        </S.SideContainer>
      </S.Container>
    </>
  );
};

export default MapPage;
