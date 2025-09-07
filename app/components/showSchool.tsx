"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import { Phone, Mail } from "lucide-react"

type Schools = {
    id: string,
    name: string,
    address: string,
    city: string,
    state: string,
    contact: string,
    email: string,
    image: string
}
export default function ShowSchools() {
    const [schools, setSchools] = useState<Schools[]>([])
    const [filter, setFilter] = useState({ city: "", state: "", name: "" })

    const fetchSchools = async () => {

        const params = new URLSearchParams();
        if (filter.name) params.append("name", filter.name);
        if (filter.city) params.append("city", filter.city);
        if (filter.state) params.append("state", filter.state);
        const res = await axios.get(`/api/school?${params.toString()}`);
        setSchools(res.data.schoolData)
    }
    useEffect(() => {
        fetchSchools()
    }, [])

    return (
        <div className="mt-18">

            <div className="flex flex-col md:flex-row justify-center px-8 md:px-2 my-8 gap-4">
                <input
                    value={filter.name}
                    onChange={(e) => setFilter({ ...filter, name: e.target.value })}
                    type="text"
                    placeholder="school name"
                    className="rounded-xl border border-gray-400 p-2 focus:outline-purple-400"
                />
                <input
                    value={filter.city}
                    onChange={(e) => setFilter({ ...filter, city: e.target.value })}
                    type="text"
                    placeholder="city"
                    className="rounded-xl border border-gray-400 p-2 focus:outline-purple-400" />
                <input
                    value={filter.state}
                    onChange={(e) => setFilter({ ...filter, state: e.target.value })}
                    type="text"
                    placeholder="state"
                    className="rounded-xl border border-gray-400 p-2 focus:outline-purple-400" />

                <button onClick={fetchSchools} className="px-6 py-2 rounded-xl bg-purple-500 text-white text-lg font-semibold hover:bg-purple-600 cursor-pointer duration-200 transition">Search</button>

            </div>

            <div className=" px-16 py-4 grid grid-cols-1 md:grid-cols-3 gap-6">

                {schools.length === 0 ? (
                    <p className="col-span-full text-purple-500 text-center">No schools Found.</p>
                ) : (
                    schools.map((item) => (
                        <div key={item.id}
                            className="flex flex-col rounded-xl shadow-sm p-4 hover:shadow-lg transition bg-white my-2">
                            <div className="w-full">
                                <img src={item.image}
                                    alt={item.name}
                                    className="object-cover h-[200px] w-full rounded-lg" />
                            </div>
                            <h1 className="text-lg text-blue-900 font-semibold mt-3">{item.name}</h1>
                            <p className="text-sm text-gray-600">{item.address}</p>
                            <div className="flex gap-3 text-sm font-medium text-gray-700">
                                <span>{item.city}</span> | <span>{item.state}</span>
                            </div>
                            <div className="flex items-center mt-2 gap-2 text-sm">
                                <Phone className="text-purple-500 h-4" /> {item.contact}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 text-purple-500" /> {item.email}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
