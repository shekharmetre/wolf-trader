import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  withSearch?: boolean; // enable search icon
  onSearch?: (value: string) => void; // parent handler for search
}

function Input({ className, type = "text", withSearch, onSearch, ...props }: InputProps) {
  const [value, setValue] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onSearch) {
      onSearch(value.trim());
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          withSearch && "pr-10", // space for icon
          className
        )}
        {...props}
      />

      {withSearch && (
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-orange-400 p-1 rounded-full hover:text-orange-600 transition-colors"
        >
          <Search className="w-5 h-5 cursor-pointer" />
        </button>
      )}
    </form>
  );
}

export { Input };
