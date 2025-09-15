import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Category } from "@/lib/types"

interface CategorySelectProps {
    categories: Category[]// dynamic list
    placeholder?: string
    label?: string
    onCategorySelect: (value: string) => void // pass selected to parent
}

export function CategorySelect({
    categories,
    placeholder = "Select category",
    label = "Categories",
    onCategorySelect,
}: CategorySelectProps) {
    return (
        <Select onValueChange={onCategorySelect}>
            <SelectTrigger className="w-[220px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {categories.map((cat) => (
                        <SelectItem key={cat.name} className="relative" value={cat.name}>
                            {cat.name}
                            <span className="absolute top-1 text-[10px] rounded-full right-4 bg-slate-100 p-1">{cat.count}</span>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
