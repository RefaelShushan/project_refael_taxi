// import { useState } from "react";
import {
  TableRow,
  TableCell,
  Table,
  TableHeader,
} from "../../global/styled-component/table.styled";
import { ButtonStyled } from "../../global/styled-component/button.styled";
import { Title } from "../../global/styled-component/title.styled";

function createData(
  id: number,
  date: string,
  name: string,
  port_address: string,
  arrival_address: string,
  cellphone_number: string,
  amount: number
) {
  return {
    id,
    date,
    name,
    port_address,
    arrival_address,
    cellphone_number,
    amount,
  };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "ptch tcva",
    "05448562355",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ",
    "05448562355",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    "05448562355",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    "05448562355",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    "05448562355",
    212.79
  ),
];


export default function TableComponentTravel() {
//   const [hoverText, setHoverText] = useState("Hover Text");
  return (
    <>
    <Title><h3>Trips on hold</h3></Title>
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Date</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>port address</TableHeader>
          <TableHeader>arrival address</TableHeader>
          <TableHeader>cellphone number</TableHeader>
          <TableHeader>travel price</TableHeader>
          <TableHeader></TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.port_address}</TableCell>
            <TableCell>{row.arrival_address}</TableCell>
            <TableCell>{row.cellphone_number}</TableCell>
            <TableCell>{`$${row.amount}`}</TableCell>
            <TableCell align="right">
              <ButtonStyled bg='rgb(66, 189, 66)'>
                on hold..
              </ButtonStyled>
              {/* <ButtonStyled
                bg="#e74c3c"
                onMouseEnter={() => setHoverText("Custom Red Button")}
                onMouseLeave={() => setHoverText("Hover Text")}
              >
                <span>{hoverText}</span>
                <span className="hover-text" style={{ display: "none" }}>
                  Hover Text
                </span>
              </ButtonStyled> */}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
    </>
  );

}
