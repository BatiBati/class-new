import { Button } from "@/components/ui/button"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
export const PaginationPage = () => {
    return (<div className="bg-red-500"><Pagination>
        <PaginationContent className="gap-3.5">
            <PaginationItem>
                <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#"><Button className="rounded-full">1</Button></PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#"><Button className="rounded-full">2</Button></PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationEllipsis className="" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#"><Button className="rounded-full">20</Button></PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationNext href="#" />
            </PaginationItem>
        </PaginationContent>
    </Pagination></div>)
}