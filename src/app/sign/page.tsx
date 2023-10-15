import Form from "../components/form";
import Button from "../components/button";
export default function Find() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 px-10 pt-10 border rounded-xl">
        <Form type="email" id="1" label="E-mail" />
        <Form type="password" id="2" label="Senha" />
        <div className="flex justify-center mt-6 mb-10">
          <Button label="Continuar" href="/register" px="px-10" />
        </div>
      </div>
    </div>
  );
}
