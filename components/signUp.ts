"use server";

import bcrypt from 'bcrypt';
import { prisma } from "@/lib/Prisma";


export const Register = async(data: any) => {
  const { username, email, password, confirmPassword } = data;
  console.log(username, email, password, confirmPassword);

  try {
    const checkUserExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (checkUserExists) {
      return { message: "User already exists", status: 400 };
    }

    const saltRounds = 10;
    const myPlaintextPassword = password;

    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

    await prisma.user.create({
      data: {
        name: username,
        email,
        password: hash,
      },
    });
  return { message: "success", status: 200 };

  } catch (error) {
    console.log(error);
    return { message: "failed to register, try again later", status: 400 };
  }

};
