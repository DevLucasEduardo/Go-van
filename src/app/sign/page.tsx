import Form from "../components/form";
import Button from "../components/button";
export default function Find() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-20 border rounded-xl max-w-3xl px-20 py-10 gap-4">
        <Form type="email" id="1" label="E-mail" />
        <Form type="password" id="2" label="Senha" />
        <Button label="Continuar" href="/register" px="px-10" />
      </div>
    </div>
  );
}
