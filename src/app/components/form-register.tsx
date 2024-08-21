"use client";
import { useRouter } from "next/navigation";
import Button from "./button";
import { Input } from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  username: z
    .string()
    .min(3, { message: "Username deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  function handleRegister() {
    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="m-auto w-[420px] space-y-12"
    >
      <h1 className="text-4xl font-bold">Register to Low Racing</h1>

      <div className="flex flex-col gap-3">
        <Input {...register("name")} type="text" placeholder="Nome completo" />
        {errors.name?.message && (
          <p className="text-red-500">{String(errors.name.message)}</p>
        )}

        <Input {...register("username")} type="text" placeholder="Username" />
        {errors.username?.message && (
          <p className="text-red-500">{String(errors.username.message)}</p>
        )}

        <Input {...register("email")} type="email" placeholder="Seu e-mail" />
        {errors.email?.message && (
          <p className="text-red-500">{String(errors.email.message)}</p>
        )}

        <Input
          {...register("password")}
          type="password"
          placeholder="Sua senha"
        />
        {errors.password?.message && (
          <p className="text-red-500">{String(errors.password.message)}</p>
        )}
      </div>

      <Button>Cadastrar</Button>
    </form>
  );
}