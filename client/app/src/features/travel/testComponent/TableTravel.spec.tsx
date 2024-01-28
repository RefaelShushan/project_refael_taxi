import { render, screen } from "@testing-library/react";
import TableComponentTravel from "../component/TableComponentTravel";

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

const testRows = [
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
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    "05448562355",
    212.79
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
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "ptch tcva",
    "05448562355",
    312.44
  ),
];

describe("TableComponentTravel", () => {
  test("should render 'Trips on hold' text", () => {
    render(<TableComponentTravel />);
    const tripsOnHoldText = screen.getByText("Trips on hold");
    expect(tripsOnHoldText).toBeInTheDocument();
  });

  test("should render 'on old...' text", () => {
    render(<TableComponentTravel />);
    const tripsOnHoldText = screen.getByRole("heading", {
      level: 3,
      name: "Trips on hold",
    });
    expect(tripsOnHoldText).toBeInTheDocument();
  });

  test("should render correct number of rows", () => {
    render(<TableComponentTravel />);
    const tableRows = screen.getAllByRole("row");
    expect(tableRows.length).toBe(testRows.length + 1);
  });

  test("should render 'on hold...' text", () => {
    render(<TableComponentTravel />);
    const onHoldButtons = screen.getAllByRole("button", { name: "on hold.." });
    expect(onHoldButtons.length).toBeGreaterThan(0);
    onHoldButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
