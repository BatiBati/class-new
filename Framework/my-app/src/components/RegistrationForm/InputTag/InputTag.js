"use client";

export const InputTag = ({ error, placeholder, ...rest }) => {
  return (
    <div className="flex flex-col">
      <input
        className="p-2 border-[1px] rounded-[4px] border-[#CBD5E1] hover:border-[#0CA5E9] "
        placeholder={placeholder}
        {...rest}
      />

      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
