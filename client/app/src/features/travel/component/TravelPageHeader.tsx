import { DivBox } from "../../global/styled-component/box.styled";
import { Title } from "../../global/styled-component/title.styled";

export default function TravelPageHeader() {
  return (
    <DivBox way="column">
      <DivBox margin="0px 5px 0px">
        <Title>
          <h1>Travels Page</h1>
        </Title>
      </DivBox>
      <DivBox margin="0px 5px 0px">
        <Title>
          <h3>in this page you can see your travels...</h3>
        </Title>
      </DivBox>
      <hr />
    </DivBox>
  );
}
