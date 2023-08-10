import Text from "../atoms/typography/Text";
import Col from "../template/Flex/Col";

const CardVoucher = ({ title, description, price }) => {
   return (
      <Card>
         <div className="flex justify-between py-3 font-semibold items-center">
            <Col size={"sm"}>
               <Text size={"sm"}>{title}</Text>
               <Text size={"md"} active>
                  {description}
               </Text>
            </Col>
            <Text size={"md"} active>
               Rp{price}
            </Text>
         </div>
      </Card>
   );
};

const Card = ({ children, className }) => {
   return <div className={`card-horizontal ${className}`}>{children}</div>;
};

export default CardVoucher;
