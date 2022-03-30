import Clock from "react-live-clock";

interface HeaderProps {
  title: string;
  deviceType : "desktop" | "mobile";
}

export const Header = ({ title, deviceType }: HeaderProps) => {

  const isMobile = deviceType === "mobile";

  return (
    <div className="flex flex-col items-center md:flex-row" style={{marginBottom: -30}}>
      <div style={{flex: 2, marginBottom: isMobile ? 15 : 0}}>
        <span style={{fontWeight: 'bold'}} className="text-2xl w-36 md:w-full md:text-4xl">{title}</span>
      </div>
      <div >
        {typeof window !== undefined ? (
          <Clock
            format={"h:mm:ssa"}
            className="text-4xl md:w-full md:text-4xl text-red-500 font-bold"
            ticking={true}
          />
        ) : null}
      </div>
    </div>
  );
};
