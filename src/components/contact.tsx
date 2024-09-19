import React from "react";
import {
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

interface Props {
    onClose(): void;
}

export function Contact({ onClose }: Props) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

    return (
    <>
          <div className="flex items-center justify-between px-4 pb-2">
            <Typography variant="h5" color="blue-gray">
              Contact Us
            </Typography>
        <Button variant="text" color="blue-gray" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <div className="mb-5 px-4">
        <Typography variant="small" color="gray" className="font-normal">
              Write the message and then click button.
            </Typography>
          </div>
      <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit}>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email  
            </Typography>
        <Input type="email" label="Email" required />
        <Input label="Subject" required />
        <Textarea rows={10} className="border border-blue-gray-200" required />
        <button
          type="submit"
          className="w-1/3 bg-sky-600 text-base text-white rounded place-self-center hover:text-sky-100"
        >
              Send
         </button>   
          </form>
          </>
    );
  }