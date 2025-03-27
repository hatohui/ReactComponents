import ListTable from "@/components/ListTable";

const Page = () => {
  type User = {
    name: string;
    age: number;
    gender: "M" | "F";
    what?: string;
  };

  const userData: User[] = [
    { name: "Hello", age: 12, gender: "M", what: "Haa" },
    { name: "Alice", age: 25, gender: "F" },
  ];

  return (
    <>
      <ListTable data={userData} />
    </>
  );
};

export default Page;
