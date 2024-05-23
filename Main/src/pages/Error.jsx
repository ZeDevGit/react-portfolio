import React from "react";

export default function Error() {
  const error = new Error('This is an error message');
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center my-8">Welcome to my Error Page!</h1>
        <p className="text-lg text-center">Oh no this is unexpected! You can navigate back to other pages at the top with the navigation bar!</p>
    </div>
  );
}