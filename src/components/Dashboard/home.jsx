import DashboardImg from "../../../public/images/Dark analytics-bro.png"
export function Home() {
  return (
    <>
      <div className="w-[60%] m-auto mt-8 flex flex-col items-center max-xs:w-[100%]">
        <img src={DashboardImg} className="w-[70%] h-max max-xs:w-[100%]" alt="" />
        <span className=" font-semibold text-[28px] text-[#009a88]">Coming Soon..!</span>
      </div>
    </>
  );
}

export default Home;
