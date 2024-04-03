import Image from "next/image";

import deleteIcon from "@/app/assets/delete-icon.png";

interface CardProps {
  name?: string;
  city?: string;
  role?: string;
  onOpenModal?: () => void;
}

function Card({ name, city, role, onOpenModal }: CardProps) {
  return (
    <div className="relative flex flex-col gap-y-4 p-8 w-full bg-white rounded-[10px]">
      {role === "superadmin" && (
        <div
          onClick={onOpenModal}
          className="absolute -top-3 -right-3 w-7 h-7 rounded-full"
        >
          <Image
            src={deleteIcon}
            alt="delete icon"
            className="w-full h-full object-cover object-center cursor-pointer"
          />
        </div>
      )}
      <p className="font-semibold text-lg text-black">{name}</p>
      <div className="flex flex-col w-6/12 justify-center items-start bg-secondary rounded-[5px] pl-3 py-1.5">
        <p className="text-xs text-white">{city}</p>
      </div>
    </div>
  );
}

export default Card;
