import Form from "../components/form";
import Button from "../components/button";

export default function Register() {
  return (
    <>
      <div className="max-w-3xl mx-auto border rounded-xl">
        <div className="gap-4 flex flex-wrap  justify-between p-10">
          <Form type="text" id="1" label="Veículo" />
          <Form type="text" id="2" label="Placa" />
          <Form type="text" id="3" label="Local de partida" />
          <Form type="text" id="4" label="Destino" />
          <Form type="date" id="6" label="Data de partida" />
          <Form type="time" id="7" label="Horário de partida" />
          <Form type="text" id="5" label="Lugares disponíveis" />

          <div className="flex flex-col w-80">
            <label htmlFor="acessbilidade">Acessibilidade</label>
            <select
              name="acessbilidade"
              id="8"
              className="h-10 w-20 mt-2 border rounded focus:outline-none focus:border-sky-500 focus:ring-1 px-2"
            >
              <option value="" disabled={true}></option>
              <option value="">Sim</option>
              <option value="">Não</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mb-10 self-end">
          <Button label="Registrar" href="/register" px="px-10" />
        </div>
      </div>
    </>
  );
}
