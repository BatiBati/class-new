"use client";

import {
  PaginationContent,
  Pagination,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

export const PageNumber = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem className="cursor-pointer">
          <PaginationLink></PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem className="cursor-pointer">
          <PaginationLink></PaginationLink>
        </PaginationItem>

        <PaginationItem className="cursor-pointer">
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
