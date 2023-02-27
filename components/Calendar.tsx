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
                {/* <input
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  type="checkbox"
                  checked
                  className="checkbox"
                /> */}
              </td>
              <td className="text-center">All</td>
            </tr>
            <tr>
              <th>
                Start the development of the API and the required backend for
                the platform.{" "}
              </th>
              <td>28/03/2023 </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th style={{ fontSize: 13 }}>
                Process the data from the sensors.{" "}
              </th>
              <td>28/03/2023 </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th style={{ fontSize: 13 }}>
                Integrate with data from mobility applications (HERE, Waze).{" "}
              </th>
              <td>28/03/2023</td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            <tr>
              <th style={{ fontSize: 13 }}>Integrate with Twitter events.</th>
              <td>28/03/2023 </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            {/* row 6 */}
            <tr>
              <th style={{ fontSize: 13 }}>
                Combine all data to generate events.{" "}
              </th>
              <td>11/04/2023 </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            <tr>
              <th style={{ fontSize: 13 }}>
                Develop the interface for the analysis platform.{" "}
              </th>
              <td>11/04/2023</td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            <tr className="hover">
              <th style={{ fontSize: 13 }}>Prototype, mid-term presentation</th>
              <td>
                11/04/2023
                <br />
                12/04/2023
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
              <th style={{ fontSize: 13 }}>
                Combine all data to generate events.{" "}
              </th>
              <td>11/04/2023 </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            <tr>
              <th>Connect the entire system to the OpenLab infrastructure. </th>
              <td>23/05/2023 </td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>
            <tr>
              <th style={{ fontSize: 13 }}>Write the documentation. </th>
              <td>23/05/2023</td>
              <td> </td>
              <td className="text-center">All</td>
            </tr>{" "}
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
