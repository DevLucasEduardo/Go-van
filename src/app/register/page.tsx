import Form from "../components/form";

export default function Register() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-20 border rounded-sm max-w-3xl px-20 py-10 gap-4">
        <Form type="text" id="1" label="Veículo" />
        <Form type="text" id="1" label="Destino" />
        <Form type="text" id="1" label="Lugares disponíveis" />
        <Form type="date" id="1" label="Data de partida" />
        <Form type="time" id="1" label="Data de partida" />
      </div>
    </div>
  );
}
