"use client";
import DeleteUser from "@/components/DeleteUser";
import GetSession from "@/components/getSession";
import { SignOut } from "@/components/signOut";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  UpdatePassword,
  UserDataFromDatabase,
  VerifyEmail,
} from "@/lib/prismaData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const ProtectedPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(true);

  const [session, setSession] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    GetUserData();
  }, []);
  const GetUserData = async () => {
    const session = await GetSession();
    const userData = await UserDataFromDatabase();

    setSession(session);
    setUserData(userData);
  };

  const imageLink = session?.user?.image as string;

  async function handleSignOut() {
    await SignOut();
  }

  async function handleVerifyEmail() {
    await VerifyEmail();
    await GetUserData();
    await userData?.emailVerified;
  }

  async function handleUpdatePassword(e: any) {
    e.preventDefault();
    await UpdatePassword(password).then(() => {
      setPassword("");
      setConfirmPassword("");
      GetUserData();
    });
  }

  return (
    <main className="flex flex-col md:flex-row min-h-screen gap-5">
      <section className="flex flex-col gap-5 md:w-3/12 items-center mt-20">
        <div>Protected Page</div>
        <div className="border border-slate-950 w-60"></div>
        <Image
          className="rounded-full"
          src={imageLink ? imageLink : "https://i.pravatar.cc/300"}
          alt="Avatar"
          width={180}
          height={37}
          priority
        />
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </section>
      <div className="border border-slate-950"></div>
      <section className="mt-20">
        {!isMobile ?
          <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
          :
          <p className="text-center text-red-500">View In Desktop to See more Details</p>
        }
        <div className="inline-flex gap-3 pt-10 items-center p-2">
          <p>Email: {userData?.email} </p>
          {userData?.emailVerified ? (
            (<p className="text-green-500">Verified</p>)
          ) : (
            <Button onClick={handleVerifyEmail}>Verify Now</Button>
          )}
        </div>
        <div>
          <form
            onSubmit={handleUpdatePassword}
            className="flex flex-col p-2 md:flex-row gap-3 pt-10"
          >
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setConfirmPassword("");
                setPassword(e.target.value);
              }}
            />
            <Input
              name="confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError(e.target.value === password);
              }}
            />

            <div>
              <Button
                variant={"secondary"}
                className="inline-flex gap-4 px-6 py-3 w-full border border-slate-800"
                disabled={!confirmPasswordError}
              >
                Update Password
              </Button>
              {!confirmPasswordError && (
                <p className="text-red-500 text-sm text-center">
                  Passwords do not match
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="inline-flex gap-3 pt-10 items-center mb-20 p-2">
          <p className="text-red-700">Dangerous Action Delete User:</p>
          <DeleteUser />
        </div>
      </section>
    </main>
  );
};

export default ProtectedPage;
