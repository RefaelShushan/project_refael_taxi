import { DivBox } from "../../global/styled-component/box.styled";
import TableComponentTravel from "./TableComponentTravel";

export default function BadyTravelTable() {
  return (
    <DivBox width="100%">
      <DivBox
        padding="10px"
        way="column"
        backgroundcolor="white"
        box_shadow="0.5px 2px 0px 0px rgba(0, 0, 0, 0.1)"
        radius="5px"
        margin="10px"
        width="100%"
      >
        <TableComponentTravel />
      </DivBox>
    </DivBox>
  );
}
