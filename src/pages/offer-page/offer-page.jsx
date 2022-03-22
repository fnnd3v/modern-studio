import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Outlet } from "react-router-dom";

import {
  ContentWrapper,
  EmptyItems,
  HeaderWrapper,
  OfferItem,
  StyledLink,
  Wrapper,
} from "./offer-page.styles";

const OfferPage = () => {
  const [data, setData] = useState([]);

  const [apartments, setApartments] = useState([]);
  const [houses, setHouses] = useState([]);
  const [plots, setPlots] = useState([]);

  const { type } = useParams();

  const [activeCategory, setActiveCategory] = useState(apartments);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    switch (type) {
      case "mieszkania":
        setActiveCategory(apartments);
        break;
      case "domy":
        setActiveCategory(houses);
        break;
      case "dzialki":
        setActiveCategory(plots);
        break;

      default:
        break;
    }
  }, [type]);

  useEffect(() => {
    data.map((item) => {
      if (item.buildingType === "apartment") {
        setApartments((prevState) => [...prevState, item]);
        setActiveCategory((prevState) => [...prevState, item]);
      }
      if (item.buildingType === "house")
        setHouses((prevState) => [...prevState, item]);
      if (item.buildingType === "plot")
        setPlots((prevState) => [...prevState, item]);
    });
  }, [data]);

  window.apartments = apartments;
  window.houses = houses;
  window.plots = plots;
  window.active = activeCategory;

  const endpoint = "https://graphql.datocms.com/";

  const headers = {
    Authorization: "bearer d85514457e45c6b8f6b50354da2788",
  };

  const graphqlQuery = {
    operationName: "fetchOffers",
    query: `{
  allOffers {
    buildingType
    description
    surface
    id
    availability
    title
    adress
    typeOfOffer
    images {
      id
      url
    }
    nameAndSurname
    phoneNumber
    email
  }
}`,
  };

  const fetchData = async () => {
    const { data } = await axios({
      url: endpoint,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
    setData(data.data.allOffers);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <h3>
          <span>Nasza ofe</span>rta
        </h3>
        <p>
          Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ
          nieruchomości, który Cię interesuje.
        </p>
        <div>
          <StyledLink to="/oferty/mieszkania">Mieszkania</StyledLink>
          <StyledLink to="/oferty/domy">Domy</StyledLink>
          <StyledLink to="/oferty/dzialki">Działki</StyledLink>
        </div>
      </HeaderWrapper>
      <ContentWrapper>
        {activeCategory.length > 0 ? (
          activeCategory.map((apartment) => {
            return (
              <OfferItem key={apartment.id} image={apartment.images[0].url}>
                <p> {apartment.adress} </p>
                <h4> {apartment.title} </h4>
              </OfferItem>
            );
          })
        ) : (
          <EmptyItems>
            <p>Niestety, nic tu nie ma.</p>{" "}
          </EmptyItems>
        )}
      </ContentWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default OfferPage;
