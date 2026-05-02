"use client"

import { SingUpForm } from "@/types/SingUpForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./components/Input";


export default function Home() {

  const { handleSubmit, control, setValue } = useForm<SingUpForm>();

  const handleFormSubmit: SubmitHandler<SingUpForm> = (data) => {
    console.log(data);
  }

  return (
    <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <Input 
            control={control}
            name="name"
            rules={{required: true, minLength: 2}}
          />

          <Input 
            control={control}
            name="password"
            rules={{required: true, minLength: 2}}
          />

          <Input 
            control={control}
            name="age"
            rules={{required: 'Informe seu nome', min: 18, max: 120 }}
          />

          <input type="submit" value="Enviar" />
        </form>

        <button onClick={() => setValue('age', 18)}>Definir idade</button>
    </div>
  );
}
