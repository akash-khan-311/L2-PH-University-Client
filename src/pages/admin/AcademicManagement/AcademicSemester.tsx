/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllSemestersQuery } from "@/redux/features/admin/AcademicManagement.api";
import { TMeta, TSemesterType } from "@/types";
import { Table, type TableColumnsType, } from "antd";

export type TTableData = Pick<TSemesterType , "_id" | "name" | "startMonth" | "endMonth" | "year"> 
const AcademicSemester = () => {
  const { data: semesterData, isLoading } = useGetAllSemestersQuery([{name: 'name', value: 'Fall'}]);
  const semestersData   = semesterData?.data?.result;
  const metaData : TMeta = semesterData?.data?.meta;

  const tableData = semestersData?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];
if(isLoading) return (
  <div className="flex justify-center items-center h-screen w-full">
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">Loading...</h2>
  </div>
)
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-full">
        <Table<TTableData>
          columns={columns}
          dataSource={tableData}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </div>
  );
};

export default AcademicSemester;
