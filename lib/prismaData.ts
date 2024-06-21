"use server";
import GetSession from "@/components/getSession";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/Prisma";


export const UserDataFromDatabase = async () => {
  const session = await GetSession();

  const Email = session?.user?.email || undefined;

  const data = await prisma.user.findFirst({
    where: {
      email: Email,
    },
  });

  return data ? data : null;
};

export const VerifyEmail = async () => {
  const session = await GetSession();

  const Email = session?.user?.email || undefined;

  const data = await prisma.user.update({
    where: {
      email: Email,
    },
    data: {
      emailVerified: new Date(),
    },
  });
};

export const UpdatePassword = async (password: string) => {
  const session = await GetSession();

  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);

  const Email = session?.user?.email || undefined;

  const data = await prisma.user.update({
    where: {
      email: Email,
    },
    data: {
      password: hash,
    },
  });
};

export const DeleteUserFromDatabase = async () => {
  const session = await GetSession();
  const Email = session?.user?.email || undefined;

  const data = await prisma.user.findFirst({
    where: {
      email: Email,
    },
  });

  const UserId = data?.id || undefined;

  try {

    const data = await prisma.user.delete({
      where: {
        id: UserId,
      },
    }).then(async() => {
        await prisma.account.deleteMany({
          where: {
            userId: UserId
          }
        })
    })

  } catch (e) {}
};
