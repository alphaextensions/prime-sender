import React from "react";
import { StatisticsCard } from "../widgets/cards";
import { StatisticsChart } from "../widgets/charts";
import { statisticsCardsData } from "../charts_data/statistics-cards-data";
import { statisticsChartsData } from "../charts_data/statistics-charts-data";

export function Home() {
  return (
    <div className="mt-12 mr-10">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement("img", {
              src: icon,
              alt: "Description of the image",
              className: "w-[30px] h-[30px]",
            })}
            // footer={
            //   <Typography className="font-normal text-blue-gray-600">
            //     <strong className={footer.color}>{footer.value}</strong>
            //     &nbsp;{footer.label}
            //   </Typography>
            // }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            // footer={
            //   <Typography
            //     variant="small"
            //     className="flex items-center font-normal text-blue-gray-600"
            //   >
            //     <ClockIcon
            //       strokeWidth={2}
            //       className="h-4 w-4 text-blue-gray-400"
            //     />
            //     &nbsp;{props.footer}
            //   </Typography>
            // }
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
