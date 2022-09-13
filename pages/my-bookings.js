import Layout from "./layout";

export default function MyBookings() {
  return <div>List of bookings...</div>;
}

MyBookings.getLayout = function getLayout(page) {
  return <Layout defaultTab={1}>{page}</Layout>;
};
