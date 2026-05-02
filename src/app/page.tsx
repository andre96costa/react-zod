"use client"

import { SingUpForm } from "@/types/SingUpForm";
import { Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";


export default function Home() {

  const { handleSubmit, control } = useForm<SingUpForm>();

  const handleFormSubmit: SubmitHandler<SingUpForm> = (data) => {
    console.log(data);
  }

  return (
    <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>

          <Controller 
            control={control}
            name="name"
            render={({ field, fieldState }) => <Input { ...field } value={field.value ?? ""} error={fieldState.invalid} />}
            rules={{required: true, minLength: 2, maxLength: 20}}
          />

          <Controller 
            control={control}
            name="password"
            render={({ field, fieldState }) => <Input { ...field } value={field.value ?? ""} error={fieldState.invalid} />}
          />

          <Controller 
            control={control}
            name="age"
            render={({ field, fieldState }) => <Input { ...field } value={field.value ?? ""} error={fieldState.invalid} />}
            rules={{required: true, min: 18, max: 120}}
          />

          <input type="submit" value="Enviar" />
        </form>

    </div>
  );
}
