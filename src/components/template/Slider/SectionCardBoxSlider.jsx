import ReactOwlCarousel from "react-owl-carousel";
import { CardBoxAndTitle } from "../../card/CardBox";
import SectionTitle from "../SectionTitle";
import Col from "../Flex/Col";
const SectionCardBoxSlider = ({
   titleSection,
   subTitleSection,
   linkSection,
   contents,
}) => {
   return (
      <Col size={"xl"}>
         <SectionTitle
            title={titleSection}
            subtitle={subTitleSection}
            link={linkSection}
         />
         {contents && (
            <ReactOwlCarousel
               className="pl-1"
               center={false}
               dots={false}
               margin={10}
               nav={false}
               responsive={{
                  0: {
                     items: 2,
                  },
                  600: {
                     items: 3,
                  },
               }}>
               {contents.map((ctx, id) => (
                  <CardBoxAndTitle key={id} {...ctx} />
               ))}
            </ReactOwlCarousel>
         )}
      </Col>
   );
};

export default SectionCardBoxSlider;
