import "./orderDetails.css";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

export default function OrderDetails() {
  const Button = ({ type }) => {
    return <button className={"orderDetailsButton " + type}>{type}</button>;
  };
  return (
    <div className="orderDetails">
      <h3 className="orderDetailsTitle">Latest transactions</h3>
      <div>
        <a href="#1" className="orderDetailsLinls">
          Products
        </a>
        <a href="#1" className="orderDetailsLinls">
          Services
        </a>
        <a href="#1" className="orderDetailsLinls">
          Gifts
        </a>
        <a href="#1" className="orderDetailsLinls">
          Voucher
        </a>
      </div>
      <hr />
      <div className="orderDetailsDiv">
        <TextField className="orderDetailsField" label="Search" />
        <TextField className="orderDetailsField" label="Price" />
        <TextField className="orderDetailsField" label="Status" />
        <TextField className="orderDetailsField" label="Date" />
      </div>
      <table className="orderDetailsTable">
        <tr className="orderDetailsTr">
          <th className="widgetLgTh">
            <Checkbox />
            Order Id
          </th>
          <th className="orderDetailsTh">Order Name</th>
          <th className="orderDetailsTh">Date</th>
          <th className="orderDetailsTh">Price</th>
          <th className="orderDetailsTh">Status</th>
          <th className="orderDetailsTh">Actions</th>
        </tr>
        <tr className="orderDetailsTr">
          <td className="orderDetailsUser">
            <Checkbox />
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="orderDetailsImg"
            />
            <span className="orderDetailsName">Susan Carol</span>
          </td>
          <td className="orderDetailsDate">2 Jun 2021</td>
          <td className="orderDetailsAmount">$122.00</td>
          <td className="orderDetailsAmount">$122.00</td>
          <td className="orderDetailsStatus">
            <Button type="Completed" />
          </td>
          <td className="orderDetailsStatus">
            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#1">Link 1</a>
                <a href="#1">Link 2</a>
                <a href="#1">Link 3</a>
              </div>
            </div>
          </td>
        </tr>
        <tr className="orderDetailsTr">
          <td className="orderDetailsUser">
            <Checkbox />
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="orderDetailsImg"
            />
            <span className="orderDetailsName">Susan Carol</span>
          </td>
          <td className="orderDetailsDate">2 Jun 2021</td>
          <td className="orderDetailsAmount">$122.00</td>
          <td className="orderDetailsAmount">$122.00</td>
          <td className="orderDetailsStatus">
            <Button type="Declined" />
          </td>
          <td className="orderDetailsStatus">
            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#1">Link 1</a>
                <a href="#1">Link 2</a>
                <a href="#1">Link 3</a>
              </div>
            </div>
          </td>
        </tr>
        <tr className="orderDetailsTr">
          <td className="orderDetailsUser">
            <Checkbox />
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="orderDetailsImg"
            />
            <span className="orderDetailsName">Susan Carol</span>
          </td>
          <td className="orderDetailsDate">2 Jun 2021</td>
          <td className="orderDetailsAmount">$122.00</td>
          <td className="orderDetailsAmount">$122.00</td>
          <td className="orderDetailsStatus">
            <Button type="Pending" />
          </td>
          <td className="orderDetailsStatus">
            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#1">Link 1</a>
                <a href="#1">Link 2</a>
                <a href="#1">Link 3</a>
              </div>
            </div>
          </td>
        </tr>
        <tr className="orderDetailsTr">
          <td className="orderDetailsUser">
            <Checkbox />
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="orderDetailsImg"
            />
            <span className="orderDetailsName">Susan Carol</span>
          </td>
          <td className="orderDetailsDate">2 Jun 2021</td>
          <td className="orderDetailsAmount">$122.00</td>
          <td className="orderDetailsAmount">$122.00</td>
          <td className="orderDetailsStatus">
            <Button type="Completed" />
          </td>
          <td className="orderDetailsStatus">
            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#1">Link 1</a>
                <a href="#1">Link 2</a>
                <a href="#1">Link 3</a>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
