import React from "react";
type Props = {};

export default function Calendar({}: Props) {
  return (
    <div className="relative flex items-center justify-center text-center overflow-hidden text-7xl pt-48 max-h-none pb-20">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        Calendar
      </h3>
      <div className=" overflow-y-auto ">
        <table className="table w-full" style={{ fontSize: 12 }}>
          {/* head */}
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Deadlines</th>
              <th>Completed</th>
              <th>Done By</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th style={{ fontSize: 13 }}>
                Define the architectures and frameworks to be used
              </th>
              <td>
                14/03/2023
                <br />
                <b>Milestone 2</b>
              </td>
              <td>
                <div className="form-control items-center">
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      checked
                      className="checkbox checkbox-success"
                    />
                  </label>
                </div>{" "}
              </td>
              <td className="text-center">All</td>
            </tr>
            <tr>
              <th style={{ lineHeight: 1.6 }}>
                Start the development of the API and the required backend for
                the platform. <br></br>
                Integrate with data from the ACTLL (Aveiro City Tech Living Lab)
                sensors.​​<br></br>
                Integrate with data from mobility applications (HERE, Waze).​​
              </th>
              <td>28/03/2023 </td>
              <td></td>
              <td className="text-center">All</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th style={{ fontSize: 13, lineHeight: 1.6 }}>
                Combine all data to generate events. <br></br>Develop the
                interface for the analysis platform.​
              </th>
              <td>11/04/2023 </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            <tr className="hover">
              <th style={{ fontSize: 13 }}>Prototype, mid-term presentation</th>
              <td>
                11/04/2023
                <br />
                <b>Milestone 3 </b>
              </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            {/* row 9 */}
            <tr>
              <th style={{ fontSize: 13 }}>
                Implement Machine Learning to analyse unusual periods in the
                city.
              </th>
              <td>02/05/2023</td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            {/* row 10 */}
            <tr>
              <th style={{ fontSize: 13, lineHeight: 1.6 }}>
                Connect the entire system to the ACTLL infrastructure.​​
                <br></br>
                Write the documentation.​
              </th>
              <td>23/05/2023</td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            {/* row 9 */}
            <tr>
              <th style={{ fontSize: 13 }}>
                Submit technical report (final version) <br />
                Demo and poster for students@deti & video
              </th>
              <td>30/05/2023 </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            <tr className="hover">
              <th style={{ fontSize: 13 }}>Final Project Presentation</th>
              <td>
                06/06/2023 <br />
                <b>Milestone 4 </b>
              </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
