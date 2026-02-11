import {useAuth} from "@/context/constext.tsx";
import CargoCard from "@/components/QueryCards.tsx";
import Navbar from "@/components/Navbar.tsx";
import EmployeeStatistics from "@/components/TopUser.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {AnimatePresence , motion}  from "framer-motion";

// const data = {
//     title: "Olma",
//     weight: 1000,
//     price: "150 000 000 UZS",
//     from: "Moskva, Rossiya",
//     to: "Bar, Ukraina",
//     loadDate: "23.12.2025",
//     danger: 8,
// };

// interface Cargo {
//     id: number
//     title: string
//     // boshqa fieldlar
// }

// interface Props {
//     cargos: Cargo[]
// }

const defaultCargos = [
    {
        id: 1,
        title: "Olma",
        weight: 1000,
        price: "150 000 000 UZS",
        from: "Moskva, Rossiya",
        to: "Bar, Ukraina",
        loadDate: "23.12.2025",
        danger: 8,
    },
    {
        id: 2,
        title: "Banan",
        weight: 800,
        price: "120 000 000 UZS",
        from: "Sankt-Peterburg, Rossiya",
        to: "Kiev, Ukraina",
        loadDate: "25.12.2025",
        danger: 5,
    },

    {
        id: 3,
        title: "Apelsin",
        weight: 1200,
        price: "180 000 000 UZS",
        from: "Moskva, Rossiya",
        to: "Odessa, Ukraina",
        loadDate: "28.12.2025",
        danger: 3,
    }, {
        id: 1,
        title: "Olma",
        weight: 1000,
        price: "150 000 000 UZS",
        from: "Moskva, Rossiya",
        to: "Bar, Ukraina",
        loadDate: "23.12.2025",
        danger: 8,
    }, {
        id: 1,
        title: "Olma",
        weight: 1000,
        price: "150 000 000 UZS",
        from: "Moskva, Rossiya",
        to: "Bar, Ukraina",
        loadDate: "23.12.2025",
        danger: 8,
    },
]


function Home() {
    const {user} = useAuth()
    console.log(user, 'home - 6')
    const [data, setData] = useState<any>(null)
    const cargos= defaultCargos


    const [index, setIndex] = useState(0)

    // har 5 sekundda almashtirish
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                const next = prev + 2
                return next >= cargos?.length ? 0 : next
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [cargos?.length])

    // 2 ta card olish
    const visibleCargos = cargos?.slice(index, index + 2)

    const fetchData = async () => {
        try {
            const res = await axios.get('https://telegram.websol.uz/api/stats/top-users')
            console.log(res)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className={'w-full h-screen bg-muted/80 overflow-y-scroll'}>
            <Navbar  />
            <div className="grid grid-cols-4   px-6 gap-6 ">

                <div className={'col-span-3 '}>
                    <div className="relative overflow-hidden ">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -80 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2  "
                            >
                                {visibleCargos?.map((cargo:any) => (
                                    <div key={cargo.id} className="w-full">
                                        <CargoCard type={'TEZ'} {...cargo} />
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                    </div>
                    <div className="relative overflow-hidden ">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -80 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-2  "
                            >
                                {visibleCargos?.map((cargo:any) => (
                                    <div key={cargo.id} className="w-full">
                                        <CargoCard type={'vv'} {...cargo} />
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>
                <div className={'col-span-1'}>
                    {
                        data &&
                        <EmployeeStatistics top={data.top} bottom={data.bottom} generated_at={data.generated_at}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;