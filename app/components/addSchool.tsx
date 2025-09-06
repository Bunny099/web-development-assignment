"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import { useState } from "react"
type Input = {
  name: string,
  city: string,
  address: string,
  contact: string,
  state: string,
  email: string,
  image: string


}
export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm<Input>()
  const [message, setMessage] = useState<string>("")
  const addData: SubmitHandler<Input> = async (data) => {

    try {
      const res = await axios.post("/api/school", data);
      if (!res.data) {
        console.error("Failed to created school data!")
      } else {
        setMessage("School Added Successfully!")

      }

    } catch (err) {
      setMessage("Failed to add school, Try latter!")
      console.error(err)
    }

  }
  return <div className="  flex flex-col px-6 justify-center items-center p-4  ">
    <div className=" rounded-lg shadow-2xl bg-white ">
      <h1 className="text-3xl text-center text-purple-500 pt-4 font-bold">Add School</h1>
      <form className="flex flex-col p-8 w-[620px] space-y-4 " onSubmit={handleSubmit(addData)}>

        <div className="flex flex-col">
          <label className="text-xl text-gray-600">School Name</label>
          <input type="text" {...register("name", { required: "Name is required!" })} placeholder="e.g. UCLA " className="p-2 focus:outline-purple-500 border border-gray-400 rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-xl text-gray-600">Address</label>
          <input type="text" {...register("address", { required: "Address is Required!" })} placeholder="Enter Address " className="p-2 focus:outline-purple-500 border border-gray-400 rounded" />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-xl text-gray-600">City</label>
          <input type="text" {...register("city", { required: "City is Required!" })} placeholder="e.g.New York " className="p-2 focus:outline-purple-500 border border-gray-400 rounded" />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-xl text-gray-600">State</label>
          <input type="text" {...register("state", { required: "State is Required!" })} placeholder="e.g.CA " className="p-2 focus:outline-purple-500 border border-gray-400 rounded" />
          {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-xl text-gray-600">Contact</label>
          <input type="text" {...register("contact", {
            required: "Contact is Required!",
            pattern: { value: /^[0-9]{10}$/, message: "Mobile number must a 10 digits." }
          })} placeholder="e.g.9265365352 " className="p-2 focus:outline-purple-500 border border-gray-400 rounded" />
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-xl text-gray-600">Email</label>
          <input type="text" {...register("email", { required: "Email is Required!", pattern: /^\S+@\S+$/i })} placeholder="e.g. nyc.school@gmail.com " className="p-2 focus:outline-purple-500 border border-gray-400 rounded" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-xl text-gray-600">Image URL</label>
          <input type="text" {...register("image", { required: "Image is Required!" })} placeholder="https://image.com/random?=1 " className="p-2 focus:outline-purple-500 border border-gray-400 rounded" />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>
        <button type="submit" className="px-6 py-3 bg-purple-700 text-white font-bold text-xl rounded-2xl mt-4 hover:bg-purple-600 transition-all duration-200">Add</button>
        {message && <p className="text-xl pt-4 text-purple-600">{message}</p>}
      </form>
    </div>

  </div>
}