import React from "react";
import {
  ButtonCatalogs,
  ButtonCatalogsWrapper,
  ButtonOpenStore,
  CatalogsWrapper,
  ContentArticle,
  ContentWarpper,
  OfferContent,
  OfferWrapper,
  CardCatalogsWrapper,
  Card,
} from "./catalogsStyled";
import Title from "../../atoms/title/Title";
import { article, contents } from "./data";
import LinkTitle from "../../atoms/link/Link";

const Catalogs = () => {
  const [contentNavigate, setContentNavigate] = React.useState("promo");

  React.useEffect(() => {}, [contentNavigate]);
  return (
    <CatalogsWrapper>
      <Title>cari semua di tokopedia!</Title>
      <ButtonCatalogsWrapper>
        {contents.map((content, idx) => (
          <ButtonCatalogs
            key={idx}
            setActive={content.label === contentNavigate}
            onClick={() => setContentNavigate(content.label)}
          >
            {content.label}
          </ButtonCatalogs>
        ))}
      </ButtonCatalogsWrapper>
      <ContentWarpper>
        {contents
          .filter((label) => label.label === contentNavigate)
          .map((element) => {
            return element.content.map((ct, idx) => (
              <LinkTitle padding="5px 0 7px" to="/" key={idx} bb>
                {ct}
              </LinkTitle>
            ));
          })}
      </ContentWarpper>
      <OfferWrapper>
        <OfferContent>
          <h5>Punya Toko Online? Buka cabangnya di Tokopedia</h5>
          <p>
            Mudah, nyaman dan bebas Biaya Layanan Transaksi.{" "}
            <strong>GRATIS!</strong>
          </p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <a href="/" target="_blank">
              <ButtonOpenStore>buka toko gratis</ButtonOpenStore>
            </a>
            <a href="/" target="_blank">
              <span>Pelajari lebih lanjut</span>
            </a>
          </div>
        </OfferContent>
        <OfferContent>
          <img
            src="https://images.tokopedia.net/seocontent/SEOcontent1.jpg?ect=4g"
            alt="image"
          />
        </OfferContent>
      </OfferWrapper>
      <ContentArticle dangerouslySetInnerHTML={{ __html: article }} />
      <CardCatalogsWrapper>
        {cardItems.map((card, idx) => (
          <Card key={idx}>
            <img src={card.urlImage} alt="image-card" />
            <div>
              <p>{card.title}</p>
              <span>{card.subtitle}</span>
            </div>
          </Card>
        ))}
      </CardCatalogsWrapper>
    </CatalogsWrapper>
  );
};

const cardItems = [
  {
    urlImage: "https://images.tokopedia.net/seocontent/SEOcontent2.jpg?ect=4g",
    title: "transparan",
    subtitle:
      "Pembayaran Anda baru diteruskan ke penjual setelah barang Anda terima.",
  },
  {
    urlImage: "https://images.tokopedia.net/seocontent/SEOcontent3.jpg?ect=4g",
    title: "aman",
    subtitle:
      "Bandingkan review untuk berbagai online shop terpercaya se-Indonesia",
  },
  {
    urlImage: "https://images.tokopedia.net/seocontent/SEOcontent4.jpg?ect=4g",
    title: "Fasilitas Escrow Gratis",
    subtitle:
      "Fasilitas Escrow (Rekening Bersama) Tokopedia tidak dikenakan biaya tambahan",
  },
];

export default Catalogs;
