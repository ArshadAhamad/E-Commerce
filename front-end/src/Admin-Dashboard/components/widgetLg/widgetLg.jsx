import "./widgetLg.css";
import { Delete, Edit } from "@material-ui/icons";
import Checkbox from "@mui/material/Checkbox";
import { Icon } from "@iconify/react";
import Button from '@mui/material/Button';


export default function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Super Admin</h3>
      <h4 className="widgetSub">User</h4>
      <div>
        <div className="widgetRole">
          Role : All <Icon icon="mdi:chevron-down"/>  <Button className="button">Add Users</Button>
        </div>
      </div>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">
            <Checkbox className="widgetCheckbox"/>
            Name
          </th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Role</th>
          <th className="widgetLgTh">Recent Activity</th>
          <th className="widgetLgTh">Actions</th>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Super Admin</td>
          <td className="widgetLgAct">5 Minutes Ago</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Admin</td>
          <td className="widgetLgAct">5 Hours Ago</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Admin</td>
          <td className="widgetLgAct">Jan 22, 2022</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Customer Service</td>
          <td className="widgetLgAct">15 Minutes Ago</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Super Admin</td>
          <td className="widgetLgAct">5 Minutes Ago</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Super Admin</td>
          <td className="widgetLgAct">5 Minutes Ago</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Super Admin</td>
          <td className="widgetLgAct">5 Minutes Ago</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Super Admin</td>
          <td className="widgetLgAct">5 Minutes Ago</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
        <tr className="widgetLgTr1">
          <td className="widgetLgUser">
            <Checkbox className="widgetCheckbox"/>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgEmail">abc@gmail.com</td>
          <td className="widgetLgRole">Super Admin</td>
          <td className="widgetLgAct">5 Minutes Ago</td>
          <td className="widgetLgStatus">
            <Edit /> <Delete />
          </td>
        </tr>
      </table>
    </div>
  );
}
