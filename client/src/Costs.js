import React from "react";

function Costs({tableData}){

  return(
    <table id="costTable">
              <thead>
                <tr>
                  <th>Camp</th>
                  <th>Notes<small><em> (click to edit)</em></small></th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {tableData.rows}
              </tbody>
              <tfoot>
                <tr>
                  <th/>
                  <th>Total:</th>
                  <th>${tableData.total}</th>
                </tr>
              </tfoot>
            </table>
  )
}

export default Costs