import "./home.css";
import FeaturedInfo from "../../components/FeaturedInfo/featuredInfo";
import Chart from "../../components/chart/chart";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/widgetLg";
import OrderDetails from "../../components/orderDetails/orderDetails";
import AddUser from "../addUser/addUser";
import EditUser from "../editUser/editUser";

export default function Home() {
  return (
    <div className="home">
      <h2>Dashboard</h2>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetLg />
      </div>
      <OrderDetails/>
      <AddUser/>
      <EditUser/>
    </div>
  );
}
