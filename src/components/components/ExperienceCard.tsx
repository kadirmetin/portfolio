interface ExperienceCardProps {
  img: string;
  title: string;
  date: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  img,
  title,
  date,
  description,
}) => {
  return (
    <div className="items-center pt-10 w-full md:w-1/2">
      <div className="flex flex-row justify-between px-4 md:px-0">
        <div className="flex items-center">
          <img src={img} alt="logo" className="w-10 h-10 object-cover " />
          <p className="ml-4 text-white font-poppinsB text-xl">{title}</p>
        </div>
        <p className="font-poppins text-sm text-[#8491A0]">{date}</p>
      </div>
      <p className="font-poppins text-sm text-[#8491A0] mt-4 px-4 md:px-0">
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
