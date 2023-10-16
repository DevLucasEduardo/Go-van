import Form from "../components/form";
import Button from "../components/button";
export default function Find() {
  return (
    <>
      <h1 className="text-center bold text-3xl">Entrar</h1>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 px-10 pt-10">
          <Form type="email" id="1" label="E-mail" />
          <Form type="password" id="2" label="Senha" />
          <div className="flex justify-center mt-6">
            <Button label="Continuar" href="/register" px="px-10" />
          </div>
        </div>
      </div>
    </>
  );
}
