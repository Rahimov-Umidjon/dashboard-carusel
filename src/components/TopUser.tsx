"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingDown } from "lucide-react"

interface Employee {
    id: number
    name: string
    email: string
    operations_count: number
    messages_count: number
}

interface Props {
    top: Employee[]
    bottom: Employee[]
    generated_at: string
}

export default function EmployeeStatistics({
                                               top,
                                               bottom,
                                           }: Props) {


    return (
        <div className="w-full space-y-6 mt-6">

            {/*/!* Header *!/*/}
            {/*<div>*/}
            {/*    <h2 className="text-xl font-semibold">*/}
            {/*        Hodimlar Statistikasi*/}
            {/*    </h2>*/}
            {/*    <div className="text-xs text-muted-foreground">*/}
            {/*        Yangilangan: {generated_at}*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* TOP */}
            <Card >
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-emerald-600 text-sm">
                        <Trophy className="h-4 w-4" />
                        Eng faol hodimlar
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">

                    {top.slice(0, 5).map((employee, index) => {


                        return (
                            <div
                                key={employee.id}
                                className="flex items-center justify-between p-3 rounded-lg bg-red-50/40 dark:bg-red-950/30 text-sm"
                            >

                                <div className="leading-tight flex gap-x-2">
                                    <Badge
                                        className={`text-white text-xs px-2 w-12 h-12 py-0.5 ${
                                            index === 0
                                                ? "bg-yellow-500"
                                                : index === 1
                                                    ? "bg-gray-400"
                                                    : index === 2
                                                        ? "bg-orange-500"
                                                        : "bg-emerald-500"
                                        }`}
                                    >

                                        {/*#{index + 1}*/}
                                        <img className={'w-12 '} src="public/profile.png" alt="foto"/>

                                    </Badge>
                                   <div className=""> <div className="font-medium text-sm">
                                       {employee.name}
                                   </div>
                                       <div className="text-[10px] text-muted-foreground truncate max-w-[150px]">
                                           {employee.email}
                                       </div></div>

                                </div>

                                <div className="text-right text-xs whitespace-nowrap">
                                    <div>{employee.operations_count} op</div>
                                    <div className="text-muted-foreground whitespace-nowrap">
                                        {employee.messages_count} msg
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </CardContent>
            </Card>

            {/* LOW PERFORMANCE */}
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-red-600 text-sm">
                        <TrendingDown className="h-4 w-4" />
                        Past natija
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">

                    {bottom.slice(0, 5).map((employee) => (
                        <div
                            key={employee.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-red-50/40 dark:bg-red-950/30 text-sm"
                        >

                            <div className="leading-tight">
                                <div className="font-medium text-sm">
                                    {employee.name}
                                </div>
                                <div className="text-[10px] text-muted-foreground truncate max-w-[150px]">
                                    {employee.email}
                                </div>
                            </div>

                            <div className="text-right text-xs">
                                <div>{employee.operations_count} op</div>
                                <div className="text-muted-foreground">
                                    {employee.messages_count} msg
                                </div>
                            </div>

                        </div>
                    ))}

                </CardContent>
            </Card>
        </div>
    )
}
