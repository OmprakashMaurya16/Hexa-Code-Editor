"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: {
        accounts: true,
      },
    });

    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.error("getUserById failed:", error.message);
    } else {
      console.error("getUserById failed with unknown error:", error);
    }
    throw error;
  }
};

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.account.findFirst({
      where: { userId },
    });

    return account;
  } catch (error) {
    if (error instanceof Error) {
      console.error("getAccountByUserId failed:", error.message);
    } else {
      console.error("getAccountByUserId failed with unknown error:", error);
    }
    throw error;
  }
};

export const currentUser = async ({}) => {
  try {
    const user = await auth();
    return user?.user;
  } catch (error) {
    if (error instanceof Error) {
      console.error("getAccountByUserId failed:", error.message);
    } else {
      console.error("getAccountByUserId failed with unknown error:", error);
    }
    throw error;
  }
};
