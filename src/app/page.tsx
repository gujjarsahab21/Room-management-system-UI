'use client'
import Head from 'next/head';
import { useState } from 'react';
import FloorSection from '../components/FloorSection';

interface RoomData {
  number: string;
  availability: ('red' | 'yellow' | 'green')[];
}

const floor0: RoomData[][] = [
  [
    { number: 'G001', availability: ['red', 'red', 'green', 'green'] },
    { number: 'G002', availability: ['red', 'red', 'green'] },
    { number: 'G003', availability: ['red', 'green', 'green'] },
    { number: 'G004', availability: ['green'] },
    { number: 'G005', availability: ['green', 'green', 'green'] },
  ],
  [
    { number: 'G006', availability: ['red', 'green'] },
    { number: 'G007', availability: ['red', 'red'] },
    { number: 'G008', availability: ['red', 'yellow'] },
    { number: 'G009', availability: ['red', 'green', 'green'] },
    { number: 'G010', availability: ['red', 'green'] },
  ],
  [
    { number: 'G012', availability: ['red'] },
    { number: 'G014', availability: ['yellow'] },
    { number: 'G015', availability: ['red', 'red', 'green'] },
    { number: 'G016', availability: ['red', 'green'] },
  ],
];

const floor1: RoomData[][] = [
  [
    { number: '101', availability: ['red', 'red', 'red', 'green'] },
    { number: '102', availability: ['red', 'red', 'green'] },
    { number: '103', availability: ['red', 'green', 'green'] },
    { number: '104', availability: ['green'] },
    { number: '105', availability: ['green', 'green', 'green'] },
  ],
  [
    { number: '106', availability: ['green', 'yellow'] },
    { number: '107', availability: ['red', 'red', 'green'] },
    { number: '108', availability: ['red', 'green'] },
    { number: '109', availability: ['red', 'red', 'green'] },
    { number: '110', availability: ['red', 'red', 'red', 'green'] },
  ],
  [
    { number: '111', availability: ['red'] },
    { number: '112', availability: ['green'] },
    { number: '114', availability: ['red', 'red', 'green'] },
    { number: '116', availability: ['red', 'green'] },
  ],
];

export default function Home() {
  const [selectedFloor, setSelectedFloor] = useState('0');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Room Management</title>
      </Head>
      <div className="max-w-screen-lg mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Room Management</h1>
          <div className="flex items-center border p-2 rounded">
            <input type="text" placeholder="Search Room no." className="outline-none" />
            <button className="ml-2">🔍</button>
          </div>
        </header>
        <div className="bg-white p-4 rounded shadow mb-8">
          <div className="flex justify-between">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">80</div>
              <div className="text-black">Total Beds in PG</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">15</div>
              <div className="text-green-500">Total Available Beds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">04</div>
              <div className="text-orange-500">Vacating in 60 days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">65</div>
              <div className="text-red-500">Total Occupied Beds</div>
            </div>
          </div>
        </div>
        <div className="md:hidden mb-4">
          <select
            className="w-full p-2 border rounded"
            value={selectedFloor}
            onChange={(e) => setSelectedFloor(e.target.value)}
          >
            <option value="0">0th Floor</option>
            <option value="1">1st Floor</option>
          </select>
        </div>
        <div className="md:block relative">
          <FloorSection floorNumber="0" rooms={floor0} />
          <div className="absolute top-[-20px] right-0 bg-white p-2 text-orange-500">
            3 beds vacating in 60 days
          </div>
        </div>
        <div className="md:block relative">
          <FloorSection floorNumber="1" rooms={floor1} />
          <div className="absolute top-[-20px] right-0 bg-white p-2 text-orange-500">
            1 bed vacating in 60 days
          </div>
        </div>
        {selectedFloor === '0' && (
          <div className="md:hidden relative">
            <div className="flex justify-between mb-4">
              <span className="font-extralight text-sm">Room No.</span>
              <span className="font-extralight text-sm mr-14">Occupancy Availability</span>
            </div>
            <FloorSection floorNumber="0" rooms={floor0} />
            <div className="absolute top-[-20px] right-0 bg-white p-2 text-orange-500">
              3 beds vacating in 60 days
            </div>
          </div>
        )}
        {selectedFloor === '1' && (
          <div className="md:hidden relative">
            <div className="flex justify-between mb-4">
              <span className="font-extralight text-sm">Room No.</span>
              <span className="font-extralight text-sm mr-14">Occupancy Availability</span>
            </div>
            <FloorSection floorNumber="1" rooms={floor1} />
            <div className="absolute top-[-20px] right-0 bg-white p-2 text-orange-500">
              1 bed vacating in 60 days
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
