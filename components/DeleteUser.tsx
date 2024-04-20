"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { SignOut } from "./signOut";
import { DeleteUserFromDatabase } from "@/lib/prismaData";

export default function DeleteUser() {
  async function handleDeleteUser() {
    try {
      await DeleteUserFromDatabase().then(async () => {
        await SignOut();
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" className="px-10">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the
              item.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose>
              <Button variant="destructive" onClick={handleDeleteUser}>
                Delete
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
