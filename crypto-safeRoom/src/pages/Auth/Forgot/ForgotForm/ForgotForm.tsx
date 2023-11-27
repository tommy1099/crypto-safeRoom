import { Container } from "../../..";
import { Button, Input } from "../../../../components/ui";

const ForgotForm = () => {
  return (
    <Container
      dir="ltr"
      style="w-[300px] h-[300px] shadow-2xl rounded-lg relative mt-[50%] ml-[15%] lg:mt-[16%] lg:ml-[7%] p-10"
    >
      <form action="/welcome" className="mt-3">
        <label htmlFor="forgot">Email</label>
        <Input
          style="w-full h-10 border-2 border-gray-300 rounded-md"
          placeHolder="email"
          type="text"
          id="forgot"
          required
        />
        <Button
          onClick={() => {}}
          style="text-white bg-patternColors-green p-2 rounded-md mt-[30%] ml-[12%]"
        >
          Reset my password
        </Button>
      </form>
    </Container>
  );
};
export default ForgotForm;
