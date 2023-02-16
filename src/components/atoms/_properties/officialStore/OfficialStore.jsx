import React from "react";
import { OfficialStoreWrapper } from "./officialStoreStyled";
import officialStoreLogo from "../../../../assets/official-store-logo.png";

const OfficialStore = ({ placecCenter, storeType }) => {
  return (
    <OfficialStoreWrapper>
      {storeType === 0 && (
        <img src={officialStoreLogo} alt="logo-official-store" />
      )}
      {storeType === 1 && (
        <img
          src="https://images.tokopedia.net/img/goldmerchant/pm_activation/badge/Power%20Merchant%20Pro@2x.png"
          alt="king-merchant-store"
        />
      )}
      {storeType === 2 && (
        <img
          src="https://images.tokopedia.net/img/restriction-engine/bebas-ongkir/DilayaniTokopedia_Icon.png"
          alt="logo-official-store"
        />
      )}
      <p>{storeType === 2 ? "dilayani tokopedia" : placecCenter}</p>
    </OfficialStoreWrapper>
  );
};

export default OfficialStore;
