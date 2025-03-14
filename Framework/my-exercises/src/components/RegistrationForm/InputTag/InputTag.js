"use client";

export const InputTag = ({ error, ...rest }) => {
  return (
    <div className="flex flex-col">
      <input className="p-2 border-1 " placeholder="Type here ..." {...rest} />

      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
