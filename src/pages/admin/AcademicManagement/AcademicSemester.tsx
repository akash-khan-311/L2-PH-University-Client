/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllSemestersQuery } from "@/redux/features/admin/AcademicManagement.api";
import { TMeta, TSemesterType } from "@/types";
import { Table, type TableColumnsType, type TableProps } from "antd";
import { useState } from "react";

export type TTableData = Pick<TSemesterType , "_id" | "name" | "startMonth" | "endMonth" | "year"> 
const AcademicSemester = () => {
  const [params,setParams] = useState([])
  const { data: semesterData, isLoading } = useGetAllSemestersQuery(params);
  const semestersData   = semesterData?.data?.result;
  const metaData : TMeta = semesterData?.data?.meta;

  const tableData = semestersData?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
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
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
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

  const onChange: TableProps<TTableData>["onChange"] = (pagination, filters, sorter,extra) => {
    if(extra.action === 'filter'){
      const queryParams = []
      filters.name.forEach(item=> (
        queryParams.push({name: 'name', value: item})
      ))

      setParams(queryParams)
    }
  }
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
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </div>
  );
};

export default AcademicSemester;
