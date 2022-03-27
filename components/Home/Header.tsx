import Clock from "react-live-clock";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div style={{flex: 2}}>
        <span style={{fontWeight: 'bold'}} className="text-2xl w-36 md:w-full md:text-4xl">{title}</span>
      </div>
      <div style={{flex: 1}}>
        {typeof window !== undefined ? (
          <Clock
            format={"h:mm:ssa"}
            className="text-4xl md:w-full md:text-4xl text-red-500"
            ticking={true}
          />
        ) : null}
      </div>
    </div>
  );
};
