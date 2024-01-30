// import { useState } from "react";
import {
  TableRow,
  TableCell,
  Table,
  TableHeader,
} from "../../global/styled-component/table.styled";
import { ButtonStyle } from "../../global/styled-component/button.styled";
import { Title } from "../../global/styled-component/title.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

interface data {
  _id: string;
  date: string;
  name: string;
  port_address: string;
  arrival_address: string;
  cellphone_number: string;
  amount: number;
  status: string;
}

const handleStatusUpdate = async (id: string) => {
  try {
    const statusToSet = "in travel";
    await axios.put(`http://localhost:3000/travel/${id}`, {
      status: statusToSet,
    });
  } catch (error) {
    console.error("Server error while updating data:", error);
  }
};

export default function TableComponentTravel() {
  const [travelData, setTravelData] = useState<data[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/travel/");
        setTravelData(response.data);
      } catch (error) {
        console.error("server error get data:", error);
      }
    };

    fetchData();
  }, []);

  // const filteredTravelData = travelData?.filter(
  //   (row) => row.status === "on hold"
  // );

  return (
    <>
      <Title>
        <h3>Trips on hold</h3>
      </Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Date</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>port address</TableHeader>
            <TableHeader>arrival address</TableHeader>
            <TableHeader>cellphone number</TableHeader>
            <TableHeader>travel price</TableHeader>
            <TableHeader>status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {travelData?.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.port_address}</TableCell>
              <TableCell>{row.arrival_address}</TableCell>
              <TableCell>{row.cellphone_number}</TableCell>
              <TableCell>{`$${row.amount}`}</TableCell>
              <TableCell>
                <ButtonStyle
                  background="rgb(66, 189, 66)"
                  onClick={() => handleStatusUpdate(row._id)}
                >
                  on hold..
                </ButtonStyle>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
}
