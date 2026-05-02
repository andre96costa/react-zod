"use client"

import { singUpFormSchema } from "@/types/SingUpForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export default function Home() {

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(singUpFormSchema)
  });

  const handleSubmitForm = () => {
    console.log('vai enviar');
  }

  return (
    <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input
            {...register('name')} 
            type="text" 
            className="border bg-white p-3 m-3 text-black"
          />

          <input
            {...register('password')}  
            type="text" 
            className="border bg-white p-3 m-3 text-black"
          />

          <input
            {...register('age', { valueAsNumber: true})}  
            type="number" 
            className="border bg-white p-3 m-3 text-black"
          />
        
          <input type="submit" value="Enviar" />
        </form>

    </div>
  );
}
