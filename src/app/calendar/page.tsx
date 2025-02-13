"use client";

import { useState } from "react";
import BackgroundLayout from "../components/Background";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isWrongDate, setIsWrongDate] = useState(false);
    const router = useRouter();
    const handleSubmit = () => {
        if (!selectedDate) {
            alert("Please select a date.");
            return;
        }

        // Check if the selected date is 02/19/22
        const correctDate = new Date("2022-02-19");
        if (
            selectedDate.getFullYear() === correctDate.getFullYear() &&
            selectedDate.getMonth() === correctDate.getMonth() &&
            selectedDate.getDate() === correctDate.getDate()
        ) {
            router.push("/flowers"); // Navigate to success page
        } else {
            setIsWrongDate(true); // Show sticker and "You are not meme" message
        }
    };

    return (
        <BackgroundLayout>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="card z-0 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg p-6 shadow-xl text-center space-y-4"
            >
                <h2 className="text-2xl font-bold text-gray-900">When did we meet?</h2>
                <DatePicker 
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    className="input input-bordered w-full max-w-xs text-center"
                    placeholderText="Select a date"
                    showYearDropdown // Enables year selection dropdown
                    showMonthDropdown // Enables month selection dropdown
                    scrollableYearDropdown // Allows scrolling through years
                    yearDropdownItemNumber={100} // Show 100 years to pick from
                />
                <button 
                    className="btn btn-primary w-full"
                    onClick={handleSubmit}
                >
                    Submit
                </button>

                {isWrongDate && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 p-4 bg-red-500 text-white rounded-lg shadow-lg"
                    >
                        <p className="text-lg font-bold">You are not meme!</p>
                        <Image 
                            src="/images/Slap Mocking Sticker.gif" 
                            alt="Not meme sticker" 
                            className="mx-auto mt-2 w-32 h-32"
                            width={400}   // Adjust based on your layout
  height={300} 
                        />
                    </motion.div>
                )}
            </motion.div>
        </BackgroundLayout>
    );
}
