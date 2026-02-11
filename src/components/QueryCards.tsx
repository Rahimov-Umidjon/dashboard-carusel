import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Truck, Calendar, MapPin } from "lucide-react";

export default function CargoCard({type}: {type: string}) {

    if (!type) return null;
    if (type === "TEZ") {
        return (
            <div className="  p-6 w-ful mx-auto  ">
                {/*/!* STANDARD CARD *!/*/}
                {/*<Card className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">*/}

                {/*    <CardContent className="p-6 space-y-6">*/}

                {/*        /!* Top *!/*/}
                {/*        <div className="flex items-start justify-between">*/}
                {/*            <div>*/}
                {/*                <div className="flex items-center gap-3 mb-1">*/}
                {/*                    <h3 className=" font-semibold text-muted-foreground">*/}
                {/*                        Yuk ID:*/}
                {/*                    </h3>*/}
                {/*                    <h3 className="text-lg font-semibold ">*/}
                {/*                        #89*/}
                {/*                    </h3>*/}

                {/*                </div>*/}
                {/*                <div className="flex items-center gap-3 mb-1">*/}
                {/*                    <h3 className=" font-semibold text-muted-foreground">*/}
                {/*                        Yuk Nomi:*/}
                {/*                    </h3>*/}
                {/*                    <h3 className="text-lg font-semibold ">*/}
                {/*                        Olma*/}
                {/*                    </h3>*/}
                {/*                </div>*/}


                {/*            </div>*/}

                {/*            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2">*/}
                {/*                STANDART*/}
                {/*            </Badge>*/}
                {/*        </div>*/}

                {/*        /!* ROUTE *!/*/}
                {/*        <div className="flex items-center gap-4 text-sm">*/}

                {/*            <div className="flex-1 space-y-1 bg-muted rounded-lg p-3">*/}
                {/*                <div className=" font-semibold text-muted-foreground">*/}
                {/*                    Qayerdan*/}
                {/*                </div>*/}
                {/*                <div className="font-medium flex items-center gap-2">*/}
                {/*                    <MapPin className="h-4 w-4 text-indigo-500" />*/}
                {/*                    Moskva, Rossiya*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="flex flex-col items-center">*/}
                {/*                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition" />*/}
                {/*            </div>*/}

                {/*            <div className="flex-1 space-y-1 text-right bg-muted rounded-lg p-3">*/}
                {/*                <div className=" font-semibold text-muted-foreground">*/}
                {/*                    Qayerga*/}
                {/*                </div>*/}
                {/*                <div className="font-medium flex items-center justify-end gap-2">*/}
                {/*                    Bar, Ukraina*/}
                {/*                    <MapPin className="h-4 w-4 text-indigo-500" />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        /!* INFO GRID *!/*/}
                {/*        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">*/}

                {/*            <div className="bg-muted rounded-lg p-3">*/}
                {/*                <div className="text-xs text-muted-foreground">Og‘irlik</div>*/}
                {/*                <div className="font-semibold">1000 kg</div>*/}
                {/*            </div>*/}

                {/*            <div className="bg-muted rounded-lg p-3">*/}
                {/*                <div className="text-xs text-muted-foreground">Transport</div>*/}
                {/*                <div className="font-semibold flex items-center gap-2">*/}
                {/*                    <Truck className="h-4 w-4" />*/}
                {/*                    Avtomobil*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="bg-muted rounded-lg p-3">*/}
                {/*                <div className="text-xs text-muted-foreground">Yuklash</div>*/}
                {/*                <div className="font-semibold flex items-center gap-2">*/}
                {/*                    <Calendar className="h-4 w-4" />*/}
                {/*                    23 Dec 2025*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*        </div>*/}

                {/*        /!* PRICE + ACTION *!/*/}
                {/*        <div className="pt-4 border-t flex items-center justify-between">*/}

                {/*            <div>*/}
                {/*                <div className="text-xs text-muted-foreground">*/}
                {/*                    Narx*/}
                {/*                </div>*/}
                {/*                <div className="text-2xl font-bold text-emerald-600">*/}
                {/*                    150 000 000 so‘m*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">*/}
                {/*                Taklif yuborish*/}
                {/*            </Button>*/}

                {/*        </div>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}

                {/* STANDARD CARD */}
                <Card className="group  relative overflow-hidden rounded-2xl border bg-gradient-to-br from-red-200 to-orange-200   shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">

                    <CardContent className="p-6 space-y-6">

                        {/* Top */}
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className=" font-semibold text-muted-foreground">
                                        Yuk ID:
                                    </h3>
                                    <h3 className="text-lg font-semibold ">
                                        #89
                                    </h3>

                                </div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className=" font-semibold text-muted-foreground">
                                        Yuk Nomi:
                                    </h3>
                                    <h3 className="text-lg font-semibold ">
                                        Olma
                                    </h3>
                                </div>


                            </div>


                            <Badge className="bg-red-600 text-white animate-pulse px-4 py-2">
                                TEZ YUK
                            </Badge>
                        </div>

                        {/* ROUTE */}
                        <div className="flex items-center gap-4 text-sm">

                            <div className="flex-1 space-y-1 bg-muted rounded-lg p-3">
                                <div className=" font-semibold text-muted-foreground">
                                    Qayerdan
                                </div>
                                <div className="font-medium flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-indigo-500" />
                                    Moskva, Rossiya
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition" />
                            </div>

                            <div className="flex-1 space-y-1 text-right bg-muted rounded-lg p-3">
                                <div className=" font-semibold text-muted-foreground">
                                    Qayerga
                                </div>
                                <div className="font-medium flex items-center justify-end gap-2">
                                    Bar, Ukraina
                                    <MapPin className="h-4 w-4 text-indigo-500" />
                                </div>
                            </div>
                        </div>

                        {/* INFO GRID */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">

                            <div className="bg-muted rounded-lg p-3">
                                <div className="text-xs text-muted-foreground">Og‘irlik</div>
                                <div className="font-semibold">1000 kg</div>
                            </div>

                            <div className="bg-muted rounded-lg p-3">
                                <div className="text-xs text-muted-foreground">Transport</div>
                                <div className="font-semibold flex items-center gap-2">
                                    <Truck className="h-4 w-4" />
                                    Avtomobil
                                </div>
                            </div>

                            <div className="bg-muted rounded-lg p-3">
                                <div className="text-xs text-muted-foreground">Yuklash</div>
                                <div className="font-semibold flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    23 Dec 2025
                                </div>
                            </div>

                        </div>

                        {/* PRICE + ACTION */}
                        <div className="pt-4 border-t flex items-center justify-between">

                            <div>
                                <div className="text-xs text-muted-foreground">
                                    Narx
                                </div>
                                <div className="text-2xl font-bold text-emerald-600">
                                    150 000 000 so‘m
                                </div>
                            </div>

                            <Button className="rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                                Taklif yuborish
                            </Button>

                        </div>
                    </CardContent>
                </Card>


            </div>
        );
    }
    return (
        <div className="  p-6 w-ful mx-auto  ">
            {/*/!* STANDARD CARD *!/*/}
            <Card className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">

                <CardContent className="p-6 space-y-6">

                    {/* Top */}
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className=" font-semibold text-muted-foreground">
                                    Yuk ID:
                                </h3>
                                <h3 className="text-lg font-semibold ">
                                    #89
                                </h3>

                            </div>
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className=" font-semibold text-muted-foreground">
                                    Yuk Nomi:
                                </h3>
                                <h3 className="text-lg font-semibold ">
                                    Olma
                                </h3>
                            </div>


                        </div>

                        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2">
                            STANDART
                        </Badge>
                    </div>

                    {/* ROUTE */}
                    <div className="flex items-center gap-4 text-sm">

                        <div className="flex-1 space-y-1 bg-muted rounded-lg p-3">
                            <div className=" font-semibold text-muted-foreground">
                                Qayerdan
                            </div>
                            <div className="font-medium flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-indigo-500" />
                                Moskva, Rossiya
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition" />
                        </div>

                        <div className="flex-1 space-y-1 text-right bg-muted rounded-lg p-3">
                            <div className=" font-semibold text-muted-foreground">
                                Qayerga
                            </div>
                            <div className="font-medium flex items-center justify-end gap-2">
                                Bar, Ukraina
                                <MapPin className="h-4 w-4 text-indigo-500" />
                            </div>
                        </div>
                    </div>

                    {/* INFO GRID */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">

                        <div className="bg-muted rounded-lg p-3">
                            <div className="text-xs text-muted-foreground">Og‘irlik</div>
                            <div className="font-semibold">1000 kg</div>
                        </div>

                        <div className="bg-muted rounded-lg p-3">
                            <div className="text-xs text-muted-foreground">Transport</div>
                            <div className="font-semibold flex items-center gap-2">
                                <Truck className="h-4 w-4" />
                                Avtomobil
                            </div>
                        </div>

                        <div className="bg-muted rounded-lg p-3">
                            <div className="text-xs text-muted-foreground">Yuklash</div>
                            <div className="font-semibold flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                23 Dec 2025
                            </div>
                        </div>

                    </div>

                    {/* PRICE + ACTION */}
                    <div className="pt-4 border-t flex items-center justify-between">

                        <div>
                            <div className="text-xs text-muted-foreground">
                                Narx
                            </div>
                            <div className="text-2xl font-bold text-emerald-600">
                                150 000 000 so‘m
                            </div>
                        </div>

                        <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
                            Taklif yuborish
                        </Button>

                    </div>
                </CardContent>
            </Card>

            {/* STANDARD CARD */}
            {/*<Card className="group  relative overflow-hidden rounded-2xl border bg-gradient-to-br from-red-200 to-orange-200   shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">*/}

            {/*    <CardContent className="p-6 space-y-6">*/}

            {/*        /!* Top *!/*/}
            {/*        <div className="flex items-start justify-between">*/}
            {/*            <div>*/}
            {/*                <div className="flex items-center gap-3 mb-1">*/}
            {/*                    <h3 className=" font-semibold text-muted-foreground">*/}
            {/*                        Yuk ID:*/}
            {/*                    </h3>*/}
            {/*                    <h3 className="text-lg font-semibold ">*/}
            {/*                        #89*/}
            {/*                    </h3>*/}

            {/*                </div>*/}
            {/*                <div className="flex items-center gap-3 mb-1">*/}
            {/*                    <h3 className=" font-semibold text-muted-foreground">*/}
            {/*                        Yuk Nomi:*/}
            {/*                    </h3>*/}
            {/*                    <h3 className="text-lg font-semibold ">*/}
            {/*                        Olma*/}
            {/*                    </h3>*/}
            {/*                </div>*/}


            {/*            </div>*/}


            {/*            <Badge className="bg-red-600 text-white animate-pulse px-4 py-2">*/}
            {/*                TEZ YUK*/}
            {/*            </Badge>*/}
            {/*        </div>*/}

            {/*        /!* ROUTE *!/*/}
            {/*        <div className="flex items-center gap-4 text-sm">*/}

            {/*            <div className="flex-1 space-y-1 bg-muted rounded-lg p-3">*/}
            {/*                <div className=" font-semibold text-muted-foreground">*/}
            {/*                    Qayerdan*/}
            {/*                </div>*/}
            {/*                <div className="font-medium flex items-center gap-2">*/}
            {/*                    <MapPin className="h-4 w-4 text-indigo-500" />*/}
            {/*                    Moskva, Rossiya*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="flex flex-col items-center">*/}
            {/*                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition" />*/}
            {/*            </div>*/}

            {/*            <div className="flex-1 space-y-1 text-right bg-muted rounded-lg p-3">*/}
            {/*                <div className=" font-semibold text-muted-foreground">*/}
            {/*                    Qayerga*/}
            {/*                </div>*/}
            {/*                <div className="font-medium flex items-center justify-end gap-2">*/}
            {/*                    Bar, Ukraina*/}
            {/*                    <MapPin className="h-4 w-4 text-indigo-500" />*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* INFO GRID *!/*/}
            {/*        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">*/}

            {/*            <div className="bg-muted rounded-lg p-3">*/}
            {/*                <div className="text-xs text-muted-foreground">Og‘irlik</div>*/}
            {/*                <div className="font-semibold">1000 kg</div>*/}
            {/*            </div>*/}

            {/*            <div className="bg-muted rounded-lg p-3">*/}
            {/*                <div className="text-xs text-muted-foreground">Transport</div>*/}
            {/*                <div className="font-semibold flex items-center gap-2">*/}
            {/*                    <Truck className="h-4 w-4" />*/}
            {/*                    Avtomobil*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="bg-muted rounded-lg p-3">*/}
            {/*                <div className="text-xs text-muted-foreground">Yuklash</div>*/}
            {/*                <div className="font-semibold flex items-center gap-2">*/}
            {/*                    <Calendar className="h-4 w-4" />*/}
            {/*                    23 Dec 2025*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}

            {/*        /!* PRICE + ACTION *!/*/}
            {/*        <div className="pt-4 border-t flex items-center justify-between">*/}

            {/*            <div>*/}
            {/*                <div className="text-xs text-muted-foreground">*/}
            {/*                    Narx*/}
            {/*                </div>*/}
            {/*                <div className="text-2xl font-bold text-emerald-600">*/}
            {/*                    150 000 000 so‘m*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <Button className="rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">*/}
            {/*                Taklif yuborish*/}
            {/*            </Button>*/}

            {/*        </div>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}


        </div>
    );
}
