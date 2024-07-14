// src/components/FloorSection.tsx
import React from 'react';
import Image from 'next/image';
import redImage from '../assets/red.jpg';
import yellowImage from '../assets/yellow.jpg';
import greenImage from '../assets/green.jpg';

interface RoomData {
  number: string;
  availability: ('red' | 'yellow' | 'green')[];
}

interface Props {
  floorNumber: string;
  rooms: RoomData[][];
}

const FloorSection: React.FC<Props> = ({ floorNumber, rooms }) => (
  <div className="mb-8 p-4 border rounded-md bg-white">
    <h2 className="text-xl font-bold mb-4">{floorNumber}<sup>th</sup> Floor</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
      {rooms.map((column, colIdx) => (
        <div key={colIdx} className="text-center">
          {/* Show heading for each column on larger screens */}
          <div className="mb-4 hidden md:flex justify-between">
            <span className="font-extralight text-sm">Room No.</span>
            <span className="font-extralight text-sm mr-14">Occupancy Availability</span>
          </div>
          {/* Render rooms */}
          {column.map((room, roomIdx) => (
            <div key={roomIdx} className="flex justify-between items-center mt-1 mr-20">
              <span>{room.number}</span>
              <div className="flex space-x-2 ml-2">
                {/* Render occupancy availability icons */}
                {room.availability.map((status, idx) => {
                  let imageSrc;
                  switch (status) {
                    case 'red':
                      imageSrc = redImage;
                      break;
                    case 'yellow':
                      imageSrc = yellowImage;
                      break;
                    case 'green':
                      imageSrc = greenImage;
                      break;
                    default:
                      imageSrc = greenImage; // Default to green if status doesn't match
                  }
                  return (
                    <div key={idx} className="w-4 h-4 rounded-full">
                      <Image src={imageSrc} alt={status} width={16} height={16} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default FloorSection;
