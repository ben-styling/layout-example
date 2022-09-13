import Layout from "./layout";

export default function BookATable() {
  return <div>List of restaurants etc...</div>;
}

BookATable.getLayout = function getLayout(page) {
  return <Layout defaultTab={0}>{page}</Layout>;
};
