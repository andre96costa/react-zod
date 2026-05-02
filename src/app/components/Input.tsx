import { SingUpForm } from "@/types/SingUpForm";
import { useController, UseControllerProps } from "react-hook-form"

export const Input = (props: UseControllerProps<SingUpForm>) => {
    const { field, fieldState } = useController(props);

    return (
        <div className="my-3">
            <input 
                {...field}
                value={field.value ?? ""} 
                placeholder={props.name}
                className={`border ${fieldState.invalid ? 'border-red' : 'border-white'} p-3 text-black`}
            />
            { fieldState.error?.type === 'required' && <p>Campo Obrigatório</p>}
        </div>
    )
}