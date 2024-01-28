import { useForm, SubmitHandler } from "react-hook-form";
import { DivBox } from "../../global/styled-component/box.styled";
import { ButtonStyle } from "../../global/styled-component/button.styled";

interface FormData {
  name: string;
  port_address: string;
  arrival_address: string;
  cellphone_number: string;
  amount: number;
}

export default function AddNewTravel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <DivBox
      backgroundcolor=" #dee3e8"
      margin="50px 160px"
      padding="100px"
      width="70%"
      align="center"
      space="center"
      height="700px"
    >
      <DivBox way="column">
        <DivBox margin="10px" padding="20px">
          <h1>page add travel:</h1>
        </DivBox>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DivBox margin="10px" way="column">
            <div>name </div>
            <input
              {...register("name", { required: "שדה חובה" })}
              style={{ height: "25px" }}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </DivBox>
          <DivBox margin="10px" way="column">
            <div>port address</div>
            <input
              {...register("port_address", { required: "שדה חובה" })}
              style={{ height: "25px" }}
            />
            {errors.port_address && <p>{errors.port_address.message}</p>}
          </DivBox>
          <DivBox margin="10px" way="column">
            <div>arrival address</div>
            <input
              {...register("arrival_address", { required: "שדה חובה" })}
              style={{ height: "25px" }}
            />
            {errors.arrival_address && <p>{errors.arrival_address.message}</p>}
          </DivBox>
          <DivBox margin="10px" way="column">
            <div>cellphone number</div>
            <input
              {...register("cellphone_number", { required: "שדה חובה" })}
              style={{ height: "25px" }}
            />
            {errors.cellphone_number && (
              <p>{errors.cellphone_number.message}</p>
            )}
          </DivBox>
          <DivBox margin="10px" way="column">
            <div>amount</div>
            <input
              {...register("amount", { required: "שדה חובה" })}
              style={{ height: "25px" }}
            />
            {errors.amount && <p>{errors.amount.message}</p>}
          </DivBox>
          <DivBox margin="10px" way="column">
            <ButtonStyle
              type="submit"
              radius="10px"
              // style={{ height: "25px", background: "#1976d2", color: "#fff" }}
            >
              on submit
            </ButtonStyle>
          </DivBox>
        </form>
      </DivBox>
    </DivBox>
  );
}
