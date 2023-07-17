import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import pic from "@/dishes.jpg";

const TaskListDisplay = () => {
  return (
    <div>
      <Card>
        <div className="flex flex-1 items-center">
          <div className="px-4 py-4">
            <Image src={pic} width={300} height={400} alt="Wash Dishes"></Image>
          </div>
          <div>
            <CardTitle>Washing Dishes and organizing dish drainer</CardTitle>
            <CardDescription>
              Summary: Wash dishes in one side of sink
            </CardDescription>
            <CardDescription>Category: Chores</CardDescription>
            <CardDescription>Priority: Medium</CardDescription>
          </div>
          <div className="flex flex-col gap-y-4 ml-auto mr-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View Details</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when done
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="outline">Actions V</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TaskListDisplay;
