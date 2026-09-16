"use client";
 
import { useActionState, startTransition } from "react";
 
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Form,
} from "@nextui-org/react";
import * as actions from "@/actions";
// import FormButton from "@/components/common/form-button";
 
export default function TopicCreateForm() {
//   const [formState, action, isPending] = useActionState(actions.createTopic, {
//     errors: {},
//   });
 
//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     startTransition(() => {
//       action(formData);
//     });
//   }
 
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button color="primary">Create a List</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form 
        // onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 p-4 w-80">
            <Input
              name="name"
              label="Create A List"
              labelPlacement="outside"
              placeholder="Name"
            //   isInvalid={!!formState.errors.name}
            //   errorMessage={formState.errors.name?.join(", ")}
            />
          
 
            <button 
            // isLoading={isPending}
            >Save</button>
          </div>
        </Form>
      </PopoverContent>
    </Popover>
  );
}