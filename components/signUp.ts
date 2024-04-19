"use server";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

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
    await prisma.user.create({
      data: {
        name: username,
        email,
        password,
      },
    });
  return { message: "success", status: 200 };

  } catch (error) {
    console.log(error);
    return { message: "failed to register, try again later", status: 400 };
  }

};
